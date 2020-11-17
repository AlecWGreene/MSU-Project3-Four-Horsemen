// Import Game Data components
import GameState from "./components/GameState.js";
import RuntimeState from "./components/RuntimeState.js";
import GameEnums from "./GameEnums.js"; 

// Import Game Managment systems
import processTick from "./systems/processTick.js"; 
import findPaths, {getEuclideanDistance} from "./systems/findPaths";

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
            /** @type {GameState} */
            this.gameState = saveData.gameState || new GameState();
            /** @type {RuntimeState} */
            this.runtimeState = saveData.runtimeState || new RuntimeState();
            this.tickInterval = undefined;
        }
        else{
            this.gameState = new GameState();
            this.runtimeState = new RuntimeState();
            this.tickInterval = undefined;
        }

        /** @type {updateCallback} Method to be called upon the completion of a game tick */
        this.updateCallback = undefined;
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
        if(this.runtimeState.isPaused){
            if(!this.runtimeState.isWaveRunning){
                // Set up to next 
                this.gameState.waveIndex++;
                this.runtimeState.isWaveRunning = true;
                this.runtimeState.isPaused = false;

                this.gameState.pathDirectory = findPaths(this.gameState.sourceArray, this.gameState.target, this.gameState.wallGrid, this.gameState.mapGrid, getEuclideanDistance);
            }

            this.tickInterval=setInterval(processTick.bind(arguments[0]), GameEnums.GAME_CONFIG.tickLength, this);
        }

        
    }

    getGameState(){
        return {
            /** @type {GameState} */
            gameState: this.gameState,
            /** @type {RuntimeState} */
            runtimeState: this.runtimeState
        }
    }

    placeWall(tile){
        if(this.gameState.wallGrid.filter(t => tile.isEqualTo(t)).length === 0){
            this.gameState.wallGrid.push(tile);
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