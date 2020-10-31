import Enums from "../Game_Enums.js";

export default class GameState {
    constructor(stateData){
        if(stateData){
            this.creepDirectory = stateData.creepDirectory || {};
            this.towerDirectory = stateData.towerDirectory || {};
            this.playerLives = stateData.playerLives || Enums.GAME_CONFIG.startLives;
            this.playerMoney = stateData.playerMoney || Enums.GAME_CONFIG.startMoney;
            this.waveIndex = stateData.waveIndex || 0;
            this.mapGrid = stateData.mapGrid || undefined;
        }
        else{
            this.creepDirectory = {};
            this.towerDirectory = {};
            this.playerLives = Enums.GAME_CONFIG.startLives;
            this.playerMoney = Enums.GAME_CONFIG.startMoney;
            this.waveIndex = 0;
            this.mapGrid = undefined;
        }
    }
}