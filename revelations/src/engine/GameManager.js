// Import Game Data components
import GameState from "../components/GameState.js";
import RuntimeState from "../components/RuntimeState.js";
import GameEnums from "../Game_Enums.js"; 

// Import Game Managment systems
import processTick from "./processTick.js"; 

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
            throw new Error("Not implemented");
        }
        else{
            this.gameState = saveData.gameState || new GameState();
            this.runtimeState = saveData.runtimeState || new RuntimeState();
            this.tickInterval = undefined;
        }
    }

    init(){

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
}