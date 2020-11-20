import Tile from "../Tile.js";

/**
 * @class
 * @memberof module:Components
 * 
 * @property {boolean} isPaused Should the game manager call processTick?
 * @property {boolean} isWaveRunning Are there creeps on the map?
 * @property {boolean} isGameOver Does the player have lives left?
 * @property {number} waveTime Time in ms that the wave has been running
 * @property {Tile[][]} creepPaths Paths to assign to the path directory
 * @property {number} totalWaveTime The total time needed to spawn every creep
 */
class RuntimeState {
    constructor(stateData){
        if(stateData){
            this.isPaused = stateData.isPaused || true;
            this.isWaveRunning = stateData.isWaveRunning || false;
            this.isGameOver = stateData.isGameOver || false;
            this.waveTime = stateData.waveTime || 0;
            this.creepPaths = stateData.creepPaths || [];
            this.totalWaveTime = stateData.totalWaveTime || 0;
        }
        else{
            this.isPaused = true;
            this.isWaveRunning = false;
            this.isGameOver = false;
            this.waveTime = 0;
            this.creepPaths = [];
            this.totalWaveTime = 0;
        }
    }
}

export default RuntimeState;