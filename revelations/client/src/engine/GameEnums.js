// Use this to store prefabs for Creeps, Towers, and Projectiles
import CreepData from "./components/CreepData.js";
import CreepStats from "./components/CreepStats.js";

import Collider from "./components/Collider.js";

import TowerData from "./components/TowerData.js";
import TowerStats from "./components/TowerStats.js";
import DamageData from "./components/DamageData.js";
import UpgradeTree from "./components/UpgradeTree.js";

// Sprite references
import SpriteEnums from "../game/SpriteEnums.js";

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
        tickLength: 10,
        mapSize: {
            rows: 13,
            cols: 19,
            height: 450,
            width: 800 
        },
        sourceArray: [
            [0,0], [12, 18]
        ],
        target: [7, 10]
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
    /**
     * @type {{name: string, archtype: {data: TowerData, stats: TowerStats, damageType: DamageData}}}
     */
    TOWER_PREFABS: {
        "test_tower": {
            name: "test_tower",
            data: new TowerData(0, "test_Tower", [], 0),
            stats: new TowerStats(),
            damageData: new DamageData(1, 0, []),
            upgradeTree: new UpgradeTree()
        }
    },
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
            data: new CreepData(0,"test_creep", "Creep_1_RED", []),
            stats: new CreepStats(100,2,270,true,50),
            collider: new Collider([{x: -30, y: -30}, {x: -30, y: 30}, {x: 30, y: 30}, {x: 30, y: -30}], {x: 0, y: 0})
        }
    }
};