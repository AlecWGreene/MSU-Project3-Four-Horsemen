// Import Game Data components
import GameState from "./components/GameState.js";
import RuntimeState from "./components/RuntimeState.js";
import GameEnums from "./GameEnums.js"; 
// Import Game Managment systems
import processTick from "./systems/processTick.js"; 
import findPaths, {getEuclideanDistance} from "./systems/findPaths";
import spawnTower from "./systems/spawnTower.js";
import convertGameToJSON from "./systems/convertGameToJSON.js";
import Tile from "./Tile.js";
import CreepEntity from "./entities/CreepEntity.js";
// Import Enums
import SpriteEnums from "../game/SpriteEnums.js";
import TowerEntity from "./entities/TowerEntity.js";
import ProjectileEntity from "./entities/ProjectileEntity.js";
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
            this.gameState = saveData.gameState || new GameState();
            this.runtimeState = saveData.runtimeState || new RuntimeState();
            this.tickInterval = undefined;
        }
        else{
            this.gameState = new GameState();
            this.runtimeState = new RuntimeState();
            this.tickInterval = undefined;
        }
        this.endWaveCallback = undefined;
        this.updateCallback = undefined;
        this.animationState = {
            towers: []
        }
        this.numberWaves = Object.keys(GameEnums.WAVE_CONFIG).length;
    }
    init(grid, sourceArray, target){
        this.gameState.mapGrid = grid;
        this.gameState.sourceArray = sourceArray;
        this.gameState.target = target;
        this.counters = {
            creeps: 0,
            towers: 0,
            projectiles: 0
        }
    }
    instantiateTile(string){
        const { 1:x, 2:y, 3:row, 4:col } = string.match(/Tile\(([\-\w\.]+),([\-\w\.]+),([\-\w\.]+),([\-\w\.]+)\)/);
        return this.gameState.mapGrid.tiles[row][col];
    }
    loadSave(saveData){
        try{
            // Load saved data
            this.gameState = new GameState({
                mapGrid: this.gameState.mapGrid,
                ...saveData.gameState
            });
            this.runtimeState = new RuntimeState(saveData.runtimeState);
            console.log(this);
            // Convert tile placeholders
            this.gameState.baseGrid = this.gameState.baseGrid.map(str => this.instantiateTile(str));
            this.gameState.towerGrid = this.gameState.towerGrid.map(str => this.instantiateTile(str));
            this.gameState.wallGrid = this.gameState.wallGrid.map(str => this.instantiateTile(str));

            // Convert Creep entity placeholders
            for(const entry of Object.entries(this.gameState.creepDirectory)){
                const creepEnumData = GameEnums.CREEP_PREFABS[entry[1].data.archtype];
                // Instantiate data component
                const newData = {...creepEnumData.data};
                newData.id = entry[1].data.id;
                newData.path = entry[1].data.path;
                newData.targetIndex = entry[1].data.targetIndex;
                newData.target = entry[1].data.path[newData.targetIndex];
                newData.hitPoints = entry[1].data.hitPoints;
                this.gameState.creepDirectory[entry[0]] = new CreepEntity(newData, entry[1].transform, creepEnumData.stats,undefined);
            }

            // Instantiate Tower entity placeholders
            for(const entry of Object.entries(this.gameState.towerDirectory)){
                const towerEnumData = GameEnums.TOWER_PREFABS[entry[1].data.archtype];
                // Instantiate data component
                const newData = {...towerEnumData.data};
                newData.id = entry[1].data.id;
                newData.kills = entry[1].data.kills;
                newData.priority = entry[1].data.priority;
                newData.target = this.gameState.creepDirectory[entry[1].data.target];
                newData.cooldown = entry[1].data.cooldown;
                this.gameState.towerDirectory[entry[0]] = new TowerEntity(newData, towerEnumData.stats, towerEnumData.damageData, entry[1].transform,towerEnumData.upgradeTree);
            }

            // Instantiate Projectile entity placeholders
            for(const entry of Object.entries(this.gameState.projectileDirectory)){
                const projectileEnumData = GameEnums.PROJECTILE_PREFABS[entry[1].data.archtype];
                // Instantiate data component
                const newData = {...projectileEnumData.data};
                newData.id = entry[1].data.id;
                newData.launcherId = entry[1].data.launcherId;
                newData.targetsHit = entry[1].data.priority;
                newData.distanceTraveled = this.gameState.creepDirectory[entry[1].data.target];
                this.gameState.projectileDirectory[entry[0]] = new ProjectileEntity(newData, projectileEnumData.stats, GameEnums.TOWER_PREFABS[newData.launcherId].damageData, entry[1].transform,undefined);
            }
            console.log(this); 
            return true;
        }
        catch(error){
            console.log(error);
            return false
        }
    }
    /**
     * Stores a method to call upon the completion of each tick, returning the new game state
     * @param {updateCallback} callback
     */
    assignUdateCallback(callback){
        this.updateCallback = callback;
    }
    /**
     * Sends the next available wave
     */
    sendWave(waveConfig){
        // Return out if game is over
        if(this.runtimeState.isGameOver){
            return;
        }

        if(this.runtimeState.isPaused || !this.runtimeState.isWaveRunning){
            if(!this.runtimeState.isWaveRunning){
                // Set up next wave
                this.gameState.waveIndex++;
                this.runtimeState.isWaveRunning = true;

                // If there are no waves left, end game
                if(this.gameState.waveIndex >= this.numberWaves){
                    this.runtimeState.isWaveRunning = false;
                    this.runtimeState.isGameOver = true;
                    clearInterval(this.tickInterval);
                }
                this.gameState.pathDirectory = findPaths(this.gameState.sourceArray, this.gameState.target, this.gameState.wallGrid, this.gameState.mapGrid, getEuclideanDistance, undefined, undefined, this.gameState?.pathData);
                this.runtimeState.totalWaveTime = GameEnums.WAVE_CONFIG[this.gameState.waveIndex].reduce((aggregate, current) => aggregate + current.delay, 0);
            }

            // Throw error in console if no paths found
            if(this.gameState.pathDirectory.filter(path => path === undefined).length > 0){
                console.log("ERROR: GameManager.sendWave() found no paths");
                return false;
            }

            // Resume game
            this.runtimeState.isPaused = false;
            this.tickInterval=setInterval(processTick.bind(arguments[0]), GameEnums.GAME_CONFIG.tickLength, this);
            return true;
        }
    }
    getGameState(){
        return {
            /** @type {GameState} */
            gameState: this.gameState,
            /** @type {RuntimeState} */
            runtimeState: this.runtimeState,
            animationState: this.animationState
        }
    }
    placeWall(tile){
        // Return is wave is running
        if(this.runtimeState.isWaveRunning){
            return false;
        }
        if(this.gameState.wallGrid.filter(t => tile.isEqualTo(t)).length === 0){
            // Ensure player has sufficient funds
            if(this.gameState.playerMoney < GameEnums.GAME_CONFIG.wallCost){
                return false;
            }
            this.gameState.playerMoney -= GameEnums.GAME_CONFIG.wallCost;

            // Add wall
            this.gameState.wallGrid.push(tile);
            return true;
        }
        else{
            return false;
        }
        this.updateCallback();
    }
    placeBase(tile){
        if(this.gameState.wallGrid.filter(t => tile.isEqualTo(t)).length > 0
        && this.gameState.baseGrid.filter(t => tile.isEqualTo(t)).length === 0){
            // Ensure player has sufficient funds
            if(this.gameState.playerMoney < GameEnums.GAME_CONFIG.baseCost){
                return false;
            }
            this.gameState.playerMoney -= GameEnums.GAME_CONFIG.baseCost;

            // Add base
            this.gameState.baseGrid.push(tile);
            if(!this.runtimeState.isPause || !this.runtimeState.isWaveRunning) this.updateCallback();
            return true;
        }
        else{
            return false;
        }
    }
    placeTower(archtype, tile){
        const id = 30000 + ++this.counters.towers;
        const success = spawnTower(this, id, archtype, tile);
        if(success){
            this.gameState.towerGrid.push(tile);
            if(!this.runtimeState.isPause || !this.runtimeState.isWaveRunning) this.updateCallback();
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
    pause(){
        this.runtimeState.isPaused = true;
        clearInterval(this.tickInterval);
    }
    endWave(){
        this.gameState.projectileDirectory = {};
        this.runtimeState.isWaveRunning = false;
        this.gameState.playerMoney += GameEnums.GAME_CONFIG.waveReward;
        if(this.endWaveCallback){
            this.endWaveCallback();
        }
    }
}