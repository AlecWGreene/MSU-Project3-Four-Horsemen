// Use this to store prefabs for Creeps, Towers, and Projectiles
import CreepData from "./components/CreepData.js";
import CreepStats from "./components/CreepStats.js";
import CreepEntity from "./entities/CreepEntity.js";
import Collider from "./components/Collider.js";

// Sprite references
import SpriteEnums from "../game/SpriteEnums.js";

export default {
    GAME_CONFIG: {
        startLives: 100,
        startMoney: 999,
        tickLength: 250,
        mapSize: {
            rows: 25,
            cols: 39,
            height: 450,
            width: 800 
        },
        sourceArray: [
            [0,0], [15, 14]
        ],
        target: [13, 18]
    },
    /**
     * @type {{[key: number]: { creeps: string[], delay: number}[]}}
     */
    WAVE_CONFIG: {
        0: [{ creeps: ["test_creep","test_creep"], delay: 5000}] 
    },
    /**
     * @type {{name: string, archtype: {data: TowerData, stats: TowerStats, damageType: DamageData}}}
     */
    TOWER_PREFABS: {},
    /**
     * @type {{name: string, archtype: {data: ProjectileData, stats: ProjectileStats, damageType: DamageData}}}
     */
    PROJECTILE_PREFABS: {},
    /**
     * @type {{[key: string]:{data: CreepData, stats: CreepStats, collider: Collider}}}
     */
    CREEP_PREFABS: {
        "test_creep": {
            data: new CreepData(0,"placeholder.png", []),
            stats: new CreepStats(100,55,90,true,50),
            collider: new Collider([{x: -30, y: -30}, {x: -30, y: 30}, {x: 30, y: 30}, {x: 30, y: -30}], {x: 0, y: 0})
        }
    }
};