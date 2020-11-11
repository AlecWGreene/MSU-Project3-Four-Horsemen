// Use this to store prefabs for Creeps, Towers, and Projectiles
import CreepData from "./components/CreepData.js";
import CreepStats from "./components/CreepStats.js";
import CreepEntity from "./entities/CreepEntity.js";
import Collider from "./components/Collider.js";

// Sprite references
import SpriteEnums from "../Game/SpriteEnums.js";

/**
 * @module GameEnums
 */
export default {
    /**
     * @description
     * Stores values to be used as initial game values
     * 
     * @type {Object.<string, number>}
     */
    GAME_CONFIG: {
        startLives: 100,
        startMoney: 999,
        tickLength: 250
    },
    /**
     * @typedef {Object} creepBatch
     * @property {Array.<string>} creeps list of creep archtypes to spawn organized in numerical order by the source to spawn them at
     * @property {number} delay time in ms from start of the wave until the batch is spawned
     */
    /** 
     * @type {Object.<number, Array.<creepBatch>>}
     */
    WAVE_CONFIG: {
        0: [{ creeps: ["test_creep","test_creep"], delay: 5000}] 
    },
    TOWER_PREFABS: {},
    PROJECTILE_PREFABS: {},
    /**
     * @typedef {Object} creepPrefab
     * @property {} data
     * @property {} stats
     * @property {} collider
     */
    /**
     * 
     */
    CREEP_PREFABS: {
        "test_creep": {
            data: new CreepData(0,"placeholder.png", []),
            stats: new CreepStats(100,55,90,true,50),
            collider: new Collider([{x: -30, y: -30}, {x: -30, y: 30}, {x: 30, y: 30}, {x: 30, y: -30}], {x: 0, y: 0})
        }
    }
};