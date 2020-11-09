// Import Game Data components
import GameState from "./components/GameState.js";
import RuntimeState from "./components/RuntimeState.js";
import GameEnums from "./GameEnums.js"; 

// Import Game Managment systems
import processTick from "./systems/processTick.js"; 
import findPaths, {getEuclideanDistance} from "./systems/findPaths";

/**
 * @class
 * 
 * @property {GameState} gameState current state info for entities
 * @property {RuntimeState} runtimeState current runtime info such as paused, wave running, etc
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

        this.updateCallback = undefined;
    }

    init(grid, sourceArray, target){
        this.gameState.mapGrid = grid;
        this.gameState.sourceArray = sourceArray;
        this.gameState.target = target;
    }

    /**
     * Stores a method to call upon the completion of each tick, returning the new game state
     * @param {()=>void} callback
     */
    assignUdateCallback(callback){
        this.updateCallback = callback;
    }

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
}