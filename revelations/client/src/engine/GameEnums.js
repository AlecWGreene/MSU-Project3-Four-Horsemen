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

const tickLength = 30;

/**
 * @module GameEnums
 */
export default {
    GAME_CONFIG: {
        startLives: 100,
        startMoney: 20000,
        tickLength: tickLength,
        mapSize: {
            rows: 13,
            cols: 19,
            height: 450,
            width: 800 
        },
        waveReward: 150,
        wallCost: 100,
        baseCost: 250,
        sourceArray: [
            [0, 0], [6, 0], [12, 0],
            [12, 4], [12, 9], [12, 14], [12, 18],
            [0, 18], [6, 18], [12, 18],
            [0, 4], [0, 9], [0, 14,], [0, 18]
        ],
        target: [7, 10]
    },
    WAVE_CONFIG: {
        // Source Pos:     0               1            2              3            4             5             6             7             8             9             10            11            12            13         
        //template: { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 500}                
        // Wave 0
        0: [
            { creeps: ["Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
           ],
        1: [
            { creeps: ["Creep_Standard", "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: ["Creep_Standard", undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 1500}
           ],
        // Wave 10
        20: [
            { creeps: ["Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: ["Creep_Standard", undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 2310},
            { creeps: ["Creep_Standard", undefined, "Creep_Standard", undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 3210}
            ],
    },
    TOWER_PREFABS: {
        "Tower_Cannon1": {
            name: "Tower_Cannon1",
            data: new TowerData(0, "Tower_Cannon1", "Tower_1Barrel", "Laser_Bolt_Yellow", [{x: 0.7, y: 0}], 0),
            stats: new TowerStats(150, 30, 180 * (Math.PI / 180), 2, 1000, false, tickLength),
            damageData: new DamageData(200, 0, []),
            upgradeTree: new UpgradeTree(),
            sfx: "Sound_cannon_2"
        },
        "Tower_Laser1": {
            name: "Tower_Laser1",
            data: new TowerData(0, "Tower_Laser1", "Tower_Laser1", "Laser_Bolt_Blue", [{x: 0, y: 1}], 0),
            stats: new TowerStats(150, 30, 90 * (Math.PI / 180), 2, 1500, false, tickLength),
            damageData: new DamageData(200, 0, []),
            upgradeTree: new UpgradeTree(),
            sfx: "Sound_cannon_1"
        }
    },
    PROJECTILE_PREFABS: {
        "Laser_Bolt_Yellow": {
            name: "Laser_Bolt_Yellow",
            data: new ProjectileData(0, "Laser_Bolt_Yellow", "Projectile_Laser_Yellow", 0, 0, 0),
            stats: new ProjectileStats({x:-1,y:-1}, 250, 1, 450, true, tickLength),
            // collider: new Collider([{x:-5,y:-3.5},
            //                         {x:-5,y:3.5},
            //                         {x:0,y:6},
            //                         {x:5,y:3.5},
            //                         {x:5,y:-3.5},
            //                         {x:0,y:-6}],{ x:0, y:0}),
            collider: undefined
        },
        "Laser_Bolt_Orange": {
            name: "Laser_Bolt_Orange",
            data: new ProjectileData(0, "Laser_Bolt_Orange", "Projectile_Laser_Orange", 0, 0, 0),
            stats: new ProjectileStats({x:-1,y:-1}, 150, 1, 450, true, tickLength),
            // collider: new Collider([{x:-5,y:-3.5},
            //                         {x:-5,y:3.5},
            //                         {x:0,y:6},
            //                         {x:5,y:3.5},
            //                         {x:5,y:-3.5},
            //                         {x:0,y:-6}],{ x:0, y:0}),
            collider: undefined
        },
        "Laser_Bolt_Blue": {
            name: "Laser_Bolt_Blue",
            data: new ProjectileData(0, "Laser_Bolt_Blue", "Projectile_Laser_Blue", 0, 0, 0),
            stats: new ProjectileStats({x:-1,y:-1}, 150, 5, 450, true, tickLength),
            // collider: new Collider([{x:-5,y:-3.5},
            //                         {x:-5,y:3.5},
            //                         {x:0,y:6},
            //                         {x:5,y:3.5},
            //                         {x:5,y:-3.5},
            //                         {x:0,y:-6}],{ x:0, y:0}),
            collider: undefined
        }
    },
    CREEP_PREFABS: {
        "Creep_Standard": {
            name: "Creep_Standard",
            data: new CreepData(0,"Creep_Standard", "Creep_1_BLUE", []),
            stats: new CreepStats(150,100,120,true,50, 50,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Tough": {
            name: "Creep_Tough",
            data: new CreepData(0,"Creep_Tough", "Creep_2_BLUE", []),
            stats: new CreepStats(500,100,90,true,50, 250,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Fast_Standard": {
            name: "Creep_Fast_Standard",
            data: new CreepData(0,"Creep_Fast_Standard", "Creep_1_GREEN", []),
            stats: new CreepStats(150,240,120,true,50, 100,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Fast_Agile": {
            name: "Creep_Fast_Agile",
            data: new CreepData(0,"Creep_Fast_Agile", "Creep_6_GREEN", []),
            stats: new CreepStats(150,240,180,true,150, 150,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Agile": {
            name: "Creep_Agile",
            data: new CreepData(0,"Creep_Agile", "Creep_1_GREEN", []),
            stats: new CreepStats(150,160,180,true,50, 150,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        }
    }
};