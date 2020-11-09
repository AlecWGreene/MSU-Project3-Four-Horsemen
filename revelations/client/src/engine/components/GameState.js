import Enums from "../GameEnums.js";

export default class GameState {
    constructor(stateData){
        if(stateData){
            this.creepDirectory = stateData.creepDirectory || {};
            this.towerDirectory = stateData.towerDirectory || {};
            this.wallGrid = stateData.wallGrid || [];
            this.playerLives = stateData.playerLives || Enums.GAME_CONFIG.startLives;
            this.playerMoney = stateData.playerMoney || Enums.GAME_CONFIG.startMoney;
            this.waveIndex = stateData.waveIndex || -1;
            this.mapGrid = stateData.mapGrid || undefined;
            this.sourceArray = stateData.sourceArray || [];
            this.target = stateData.target || undefined;
            this.pathDirectory = stateData.pathDirectory || [];
        }
        else{
            this.creepDirectory = {};
            this.towerDirectory = {};
            this.wallGrid = [];
            this.playerLives = Enums.GAME_CONFIG.startLives;
            this.playerMoney = Enums.GAME_CONFIG.startMoney;
            this.waveIndex = -1;
            this.mapGrid = undefined;
            this.sourceArray = [];
            this.target = undefined;
            this.pathDirectory = [];
        }
    }
}