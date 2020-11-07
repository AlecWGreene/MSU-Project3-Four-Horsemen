export default class RuntimeState {
    constructor(stateData){
        if(stateData){
            this.isPaused = stateData.isPaused || true;
            this.isWaveRunning = stateData.isWaveRunning || false;
            this.isGameOver = stateData.isGameOver || false;
            this.waveTime = stateData.waveTime || 0;
            this.creepPaths = stateData.creepPaths || [];
        }
        else{
            this.isPaused = true;
            this.isWaveRunning = false;
            this.isGameOver = false;
            this.waveTime = 0;
            this.creepPaths = [];
        }
    }
}