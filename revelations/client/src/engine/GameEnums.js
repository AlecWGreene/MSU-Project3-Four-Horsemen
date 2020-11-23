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
import ProjectileData from "./components/ProjectileData.js";
import ProjectileStats from "./components/ProjectileStats.js";

const tickLength = 20;

/**
 * @module GameEnums
 */
export default {
    GAME_CONFIG: {
        startLives: 100,
        startMoney: 300,
        tickLength: tickLength,
        mapSize: {
            rows: 13,
            cols: 19,
            height: 450,
            width: 800 
        },
        waveReward: 150,
        wallCost: 25,
        baseCost: 50,
        sourceArray: [
            [0,0], [12, 18]
        ],
        target: [7, 10]
    },
    WAVE_CONFIG: {
        0: [
            { creeps: ["test_creep","test_creep"], delay: 500}
           ],
        1: [
            { creeps: ["test_creep","test_creep"], delay: 500},
            { creeps: ["test_creep","test_creep"], delay: 300},
           ],
        2: [
            { creeps: ["test_creep","test_creep"], delay: 1000},
            { creeps: ["test_creep","test_creep"], delay: 1300},
            { creeps: ["test_creep","test_creep"], delay: 1300}
           ],
        3: [
            { creeps: ["test_creep","test_creep"], delay: 1000},
            { creeps: ["test_creep","test_creep"], delay: 1300},
            { creeps: ["test_creep","test_creep"], delay: 500},
            { creeps: ["test_creep","test_creep"], delay: 500},
            { creeps: ["test_creep","test_creep"], delay: 400},
            { creeps: ["test_creep","test_creep"], delay: 400},
            { creeps: ["test_creep","test_creep"], delay: 300},
            { creeps: ["test_creep","test_creep"], delay: 300}
           ] 
    },
    TOWER_PREFABS: {
        "test_tower1": {
            name: "test_tower1",
            data: new TowerData(0, "test_tower1", "Tower_1Barrel", "Laser_Bolt_Yellow", [{x: 0.7, y: 0}], 0),
            stats: new TowerStats(150, 30, 180 * (Math.PI / 180), 2, 100, false, tickLength),
            damageData: new DamageData(200, 0, []),
            upgradeTree: new UpgradeTree(),
            sfx: "Sound_cannon_2"
        },
        "test_tower2": {
            name: "test_tower2",
            data: new TowerData(0, "test_tower2", "Tower_Laser1", "Laser_Bolt_Blue", [{x: 0, y: 1}], 0),
            stats: new TowerStats(150, 30, 90 * (Math.PI / 180), 2, 100, false, tickLength),
            damageData: new DamageData(200, 0, []),
            upgradeTree: new UpgradeTree(),
            sfx: "Sound_cannon_1"
        }
    },
    PROJECTILE_PREFABS: {
        "Laser_Bolt_Yellow": {
            name: "Laser_Bolt_Yellow",
            data: new ProjectileData(0, "Laser_Bolt_Yellow", "Projectile_Laser_Yellow", 0, 0, 0),
            stats: new ProjectileStats({x:-1,y:-1}, 150, 1, 300, true, tickLength),
            collider: new Collider([{x:-5,y:-3.5},
                                    {x:-5,y:3.5},
                                    {x:0,y:6},
                                    {x:5,y:3.5},
                                    {x:5,y:-3.5},
                                    {x:0,y:-6}],{ x:0, y:0}),
        },
        "Laser_Bolt_Orange": {
            name: "Laser_Bolt_Orange",
            data: new ProjectileData(0, "Laser_Bolt_Orange", "Projectile_Laser_Orange", 0, 0, 0),
            stats: new ProjectileStats({x:-1,y:-1}, 150, 1, 300, true, tickLength),
            collider: new Collider([{x:-5,y:-3.5},
                                    {x:-5,y:3.5},
                                    {x:0,y:6},
                                    {x:5,y:3.5},
                                    {x:5,y:-3.5},
                                    {x:0,y:-6}],{ x:0, y:0}),
        },
        "Laser_Bolt_Blue": {
            name: "Laser_Bolt_Blue",
            data: new ProjectileData(0, "Laser_Bolt_Blue", "Projectile_Laser_Blue", 0, 0, 0),
            stats: new ProjectileStats({x:-1,y:-1}, 150, 3, 300, true, tickLength),
            collider: new Collider([{x:-5,y:-3.5},
                                    {x:-5,y:3.5},
                                    {x:0,y:6},
                                    {x:5,y:3.5},
                                    {x:5,y:-3.5},
                                    {x:0,y:-6}],{ x:0, y:0}),
        }
    },
    CREEP_PREFABS: {
        "test_creep": {
            name: "test_creep",
            data: new CreepData(0,"test_creep", "Creep_1_BLUE", []),
            stats: new CreepStats(100,80,270,true,50, 100,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        }
    }
};