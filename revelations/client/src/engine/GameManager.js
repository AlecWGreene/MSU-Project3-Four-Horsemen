// Import Game Data components
import GameState from "./components/GameState.js";
import RuntimeState from "./components/RuntimeState.js";
import GameEnums from "./GameEnums.js"; 

// Import Game Managment systems
import processTick from "./systems/processTick.js"; 

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
    }

    init(){

    }

    /**
     * Stores a method to call upon the completion of each tick, returning the new game state
     * @param {()=>void} callback
     */
    assignUdateCallback(callback){
        this.updateCallback = callback;
    }

    sendWave(){
        if(this.runtimeState.isPaused){
            if(!this.runtimeState.isWaveRunning){
                // Set up to next 
                this.gameState.waveIndex++;
                this.runtimeState.isWaveRunning = true;
                this.runtimeState.isPaused = false;
            }

            this.tickInterval=setInterval(processTick, GameEnums.GAME_CONFIG.tickLength, this.gameState, this.runtimeState);
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