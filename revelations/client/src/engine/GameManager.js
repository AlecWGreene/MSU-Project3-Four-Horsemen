// Import Game Data components
import GameState from "./components/GameState.js";
import RuntimeState from "./components/RuntimeState.js";
import GameEnums from "./GameEnums.js"; 

// Import Game Managment systems
import processTick from "./systems/processTick.js"; 
import findPaths, {getEuclideanDistance} from "./systems/findPaths";
import spawnTower from "./systems/spawnTower.js";

/**
 * @module GameManager
 */

/**
 * @callback updateCallback
 * @returns {void}  
 */

/**
 * @class
 * 
 * @description
 * Manages the game logic by calling systems and centralizing the game state storage
 * 
 * @property {GameState} gameState current state info for entities
 * @property {RuntimeState} runtimeState current runtime info such as paused, wave running, etc
 * @property {updateCallback} updateCallback
 * 
 * @method init Sets up the game systems to launch a wave or resume a save
 * @method sendWave Sends the next wave using the GameEnums.WAVE_CONFIGS settings
 */
export default class GameManager {
    constructor(saveData){
        if(saveData){
            this.gameState = saveData.gameState || new GameState();
            this.runtimeState = saveData.runtimeState || new RuntimeState();
            this.tickInterval = undefined;
        }
        else{
            this.gameState = new GameState();
            this.runtimeState = new RuntimeState();
            this.tickInterval = undefined;
        }

        this.updateCallback = undefined;
        this.animationState = {
            towers: []
        }
        this.numberWaves = Object.keys(GameEnums.WAVE_CONFIG).length;
    }

    init(grid, sourceArray, target){
        this.gameState.mapGrid = grid;
        this.gameState.sourceArray = sourceArray;
        this.gameState.target = target;
    }

    /**
     * Stores a method to call upon the completion of each tick, returning the new game state
     * @param {updateCallback} callback
     */
    assignUdateCallback(callback){
        this.updateCallback = callback;
    }

    /**
     * 
     */
    sendWave(waveConfig){
        if(this.runtimeState.isPaused || !this.runtimeState.isWaveRunning){
            if(!this.runtimeState.isWaveRunning){
                // Set up to next 
                this.gameState.waveIndex++;
                this.runtimeState.isWaveRunning = true;
                this.runtimeState.isPaused = false;

                // If there are no waves left, end game
                if(this.gameState.waveIndex > this.numberWaves){
                    this.runtimeState.isWaveRunning = false;
                    this.runtimeState.isGameOver = true;
                    clearInterval(this.tickInterval);
                }

                this.gameState.pathDirectory = findPaths(this.gameState.sourceArray, this.gameState.target, this.gameState.wallGrid, this.gameState.mapGrid, getEuclideanDistance, undefined, undefined, this.gameState?.pathData);
                this.runtimeState.totalWaveTime = GameEnums.WAVE_CONFIG[this.gameState.waveIndex].reduce((aggregate, current) => aggregate + current.delay, 0);
            }

            if(Object.values(this.gameState.pathDirectory).filter(path => path === undefined).length === 0){
                console.log("ERROR: GameManager.sendWave() found no paths");
                return false;
            }
            this.tickInterval=setInterval(processTick.bind(arguments[0]), GameEnums.GAME_CONFIG.tickLength, this);
            return true;
        }
    }

    getGameState(){
        return {
            /** @type {GameState} */
            gameState: this.gameState,
            /** @type {RuntimeState} */
            runtimeState: this.runtimeState,
            animationState: this.animationState
        }
    }

    placeWall(tile){
        // Return is wave is running
        if(this.runtimeState.isWaveRunning){
            return false;
        }

        if(this.gameState.wallGrid.filter(t => tile.isEqualTo(t)).length === 0){
            this.gameState.wallGrid.push(tile);
            return true;
        }
        else{
            return false;
        }

        this.updateCallback();
    }

    placeBase(tile){
        if(this.gameState.wallGrid.filter(t => tile.isEqualTo(t)).length > 0
        && this.gameState.baseGrid.filter(t => tile.isEqualTo(t)).length === 0){
            this.gameState.baseGrid.push(tile);
            if(!this.runtimeState.isPause || !this.runtimeState.isWaveRunning) this.updateCallback();
            return true;
        }
        else{
            return false;
        }

    }

    placeTower(archtype, tile){
        const id = 30000 + Object.keys(this.gameState.towerDirectory).length;
        const success = spawnTower(this, id, archtype, tile);
        if(success){
            this.gameState.towerGrid.push(tile);
            if(!this.runtimeState.isPause || !this.runtimeState.isWaveRunning) this.updateCallback();
            return true;
        }
        else{
            return false;
        }
    }

    convertWorldPointToTile(x, y){
        const row = Math.floor(x / this.gameState.mapGrid.cellsize);
        const col = Math.floor(y / this.gameState.mapGrid.cellsize);

        if(row < 0 || row >= this.gameState.mapGrid.tiles.length){
            throw new Error(`GameManager.convertWorldPointToTile: ${row} is not a valid row value`);
        }
        else if(col < 0 || col >= this.gameState.mapGrid.tiles[0].length){
            throw new Error(`GameManager.convertWorldPointToTile: ${col} is not a valid col value`);
        }
        else{
            return this.gameState.mapGrid.tiles[row][col];
        }
    }
}