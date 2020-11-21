import Game from "../../game/index.js";
import Tile from "../Tile.js";
import Grid from "../Grid.js";
import Enums from "../GameEnums.js";
import CreepEntity from "../entities/CreepEntity.js";

/**
 * @template T
 * @typedef {Object.<number, T>} Directory<T>
 */

/**
 * @class
 * @memberof module:Components
 * 
 * @property {Directory<CreepEntity>} creepDirectory Directory of active creeps in the game state @see module:Entities~CreepEntity
 * @property {Directory<CreepEntity>} towerDirectory Directory of active creeps in the game state @see module:Entities~TowerEntity
 * @property {Directory<CreepEntity>} projectileDirectory Directory of active creeps in the game state @see module:Entities~ProjectileEntity
 * @property {number} playerLives Number of creep hits the player can take
 * @property {number} playerMoney Money available to the player
 * @property {number} waveIndex Number of the last wave to have been sent
 * @property {Grid} mapGrid Grid of tiles for the game to adhere to
 * @property {Tile[]} sourceArray Array of tiles from which to spawn creeps
 * @property {Tile} target Planet tile
 * @property {Tile[][]} pathDirectory Collection of paths for creeps corresponding to the sources
 * @property {Tile[]} baseGrid Array of tiles which have tower bases on them
 * @property {Tile[]} wallGrid Array of tiles which have walls on them
 * @property {Tile[]} towerGrid Array of tiles which have towers on them
 * @property {Object.<string, any>} pathData Path data for pathfinding and other such algorithms
 */
class GameState {
    constructor(stateData){
        if(stateData){
            this.creepDirectory = stateData.creepDirectory || {};
            this.projectileDirectory = stateData.projectileDirectory || {};
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
            this.pathData = stateData.pathData || {};
            this.towerGrid = stateData.towerGrid || [];
        }
        else{
            this.creepDirectory = {};
            this.projectileDirectory = {};
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
            this.pathData = {};
            this.towerGrid = [];
        }
    }
}

export default GameState;