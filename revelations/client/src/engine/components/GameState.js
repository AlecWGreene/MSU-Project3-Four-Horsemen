<<<<<<< HEAD
export default class GameState {
=======
import Game from "../../Game/index.js";
import Enums from "../GameEnums.js";

/**
 * @template T
 * @typedef {Object.<string, T>} Directory<T>
 */

/**
 * @class
 * @memberof module:Components
 * 
 * @property {Directory<module:Components~CreepData>} creepDirectory directory of active creeps in the game state
 */
class GameState {
>>>>>>> AG_Documentation
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
            this.baseGrid = stateData.baseGrid || [];
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
            this.baseGrid = [];
        }
    }
}

export default GameState;