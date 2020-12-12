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
        startLives: 25,
        startMoney: 2000,
        tickLength: tickLength,
        mapSize: {
            rows: 13,
            cols: 19,
            height: 450,
            width: 800 
        },
        waveReward: 500,
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
            { creeps: ["Creep_Standard", undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined], delay: 510},
           ],
        2: [
            { creeps: [undefined, undefined, "Creep_Standard_Agile", undefined, undefined, undefined, undefined, "Creep_Standard_Agile", undefined, undefined, "Creep_Standard_Agile", undefined, undefined, undefined], delay: 510},
           ],
        3: [
            { creeps: [undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard"], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Agile", undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Agile", undefined, undefined], delay: 2010},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined, "Creep_Standard", undefined, undefined, undefined, undefined], delay: 1110},
           ],  
        4: [
            { creeps: [undefined, "Creep_Standard", undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 1110},
            { creeps: [undefined, "Creep_Standard", undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 1110},
           ],
        5: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Agile", undefined, undefined, undefined, "Creep_Standard_Agile", undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Agile", undefined, undefined, "Creep_Standard_Agile", undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined], delay: 510},
           ],
        6: [
            { creeps: [undefined, undefined, "Creep_Fast", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
           ],
        7: [
            { creeps: [undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 1110},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined], delay: 720},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard"], delay: 1110}
           ],
        8: [
            { creeps: [undefined, "Creep_Fast_Agile", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, "Creep_Fast", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: ["Creep_Fast", undefined, undefined, "Creep_Fast", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
           ],
        9: [
            { creeps: [undefined, "Creep_Fast_Agile", undefined, "Creep_Fast_Agile", undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard"], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, "Creep_Fast", undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast"], delay: 210}
           ],
        10: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Tough", undefined, undefined, undefined], delay: 510},
           ],
        11: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 210},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Agile", undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Agile", undefined, undefined, undefined, undefined, undefined, undefined], delay: 210},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Agile", undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Agile", undefined, undefined, undefined, undefined], delay: 210}
           ],
        12: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Multi", undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast", undefined, "Creep_Fast", undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Agile", undefined, undefined, undefined, "Creep_Fast_Agile", undefined, undefined, undefined, undefined], delay: 510}
           ],
        13: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: ["Creep_Standard_Multi", "Creep_Fast_Agile", "Creep_Standard_Multi", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Agile", "Creep_Standard_Multi", undefined, undefined, undefined], delay: 510},
           ],  
        14: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Multi", undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Multi", undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Multi", undefined, "Creep_Standard_Multi", undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Multi", undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Multi", undefined, undefined, "Creep_Standard_Multi", undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Multi", undefined, "Creep_Standard_Multi", undefined, undefined, undefined], delay: 510},
           ],
        15: [
            { creeps: [undefined, undefined, "Creep_Standard_Tough", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, "Creep_Fast", undefined, undefined, "Creep_Fast_Agile", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 210},
            { creeps: ["Creep_Fast", undefined, "Creep_Fast_Agile", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
           ],
        16: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast", undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined], delay: 210},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard", undefined, undefined, undefined], delay: 210},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast", undefined, undefined], delay: 210},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Multi", undefined], delay: 210},
           ],
        17: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Multi"], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Multi", undefined], delay: 210},
            { creeps: ["Creep_Standard_Multi", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Multi"], delay: 210},
            { creeps: ["Creep_Armored", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Armored", undefined], delay: 1110}
            ],
        18: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Armored", undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Armored", undefined, undefined], delay: 330},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Armored_Agile", "Creep_Armored_Agile", undefined, undefined], delay: 510}
           ],
        19: [
            { creeps: ["Creep_Armored_Agile", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Multi", undefined, undefined], delay: 510},
            { creeps: ["Creep_Fast_Multi", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Armored_Agile", undefined, undefined], delay: 210}
           ],
        20: [
            { creeps: [undefined, undefined, undefined, undefined, "Creep_Armored_Multi", "Creep_Fast_Agile", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, "Creep_Fast_Agile", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 1110},
            { creeps: [undefined, undefined, undefined, undefined, "Creep_Armored_Multi", "Creep_Fast_Agile", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 810},
            { creeps: [undefined, undefined, undefined, "Creep_Fast_Agile", "Creep_Armored_Multi", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510}
           ],
        21: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Tough", undefined, undefined], delay: 510},
           ],
        22: [
            { creeps: [undefined, "Creep_Armored", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Tough", undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, "Creep_Armored", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 330},
            { creeps: [undefined, undefined, "Creep_Armored", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Agile", undefined], delay: 330},
            { creeps: [undefined, "Creep_Armored", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Agile"], delay: 330}
           ],
        23: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Armored_Multi", undefined, "Creep_Fast_Tough", undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Armored_Multi", undefined, undefined, "Creep_Armored_Agile", "Creep_Armored_Agile", undefined, undefined, undefined], delay: 210}
           ],  
        24: [
            { creeps: [undefined, undefined, undefined, "Creep_Fast_Multi", "Creep_Armored_Agile", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, "Creep_Fast_Multi", "Creep_Armored_Agile", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 330},
            { creeps: [undefined, undefined, undefined, "Creep_Armored_Agile", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 330},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Agile", undefined, "Creep_Standard_Agile"], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Agile", undefined], delay: 330},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Standard_Agile", undefined, undefined], delay: 330}
           ],
        25: [
            { creeps: [undefined, undefined, undefined, undefined, undefined, "Creep_Armored_Agile", undefined, undefined, undefined, "Creep_Armored_Multi", undefined, undefined, "Creep_Armored_Agile", "Creep_Armored_Multi"], delay: 510},
           ],
        26: [
            { creeps: [undefined, undefined, "Creep_Armored", undefined, "Creep_Fast_Tough", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, "Creep_Fast_Tough", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 210},
            { creeps: [undefined, undefined, undefined, undefined, "Creep_Armored", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Fast_Multi"], delay: 210}
           ],
        27: [
            { creeps: ["Creep_Fast_Multi", undefined, undefined, undefined, undefined, undefined, "Creep_Armored", undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, "Creep_Armored_Agile", undefined, undefined, undefined, undefined, "Creep_Armored", undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 210},
            { creeps: [undefined, "Creep_Armored_Agile", "Creep_Fast_Multi", undefined, undefined, undefined, "Creep_Armored", undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 210},
            { creeps: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Armored", undefined, undefined, undefined, undefined, undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, "Creep_Fast_Multi", undefined, undefined, undefined, "Creep_Armored_Multi", undefined, undefined, undefined, undefined, undefined, undefined], delay: 210}
           ],
        28: [
            { creeps: [undefined, undefined, undefined, "Creep_Armored_Multi", undefined, undefined, "Creep_Armored_Multi", undefined, undefined, "Creep_Armored_Multi", undefined, undefined, undefined, "Creep_Armored_Multi"], delay: 510},
           ],
        29: [
            { creeps: [undefined, "Creep_Standard", undefined, "Creep_Fast_Agile", "Creep_Standard", undefined, undefined, undefined, undefined, undefined, undefined, "Creep_Armored_Tough", undefined, undefined], delay: 510},
            { creeps: [undefined, undefined, undefined, undefined, "Creep_Fast_Agile", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], delay: 330}
           ],
    },
    TOWER_PREFABS: {
        "Tower_Cannon1": {
            name: "Tower_Cannon1",
            data: new TowerData(0, "Tower_Cannon1", "Tower_1Barrel", "Laser_Bolt_Yellow", [{x: 0.7, y: 0}], 0),
            stats: new TowerStats(120, 45, 270 * (Math.PI / 180), 2, 1000, false, tickLength),
            damageData: new DamageData(200, 0, []),
            upgradeTree: new UpgradeTree(["Tower_Cannon2", "Tower_Cannon3", "Tower_Cannon4"], -1),
            sfx: "Sound_cannon_2"
        },
        "Tower_Cannon2": {
            name: "Tower_Cannon2",
            data: new TowerData(0, "Tower_Cannon2", "Tower_2Barrel", "Laser_Bolt_Yellow", [{x: 0.7, y: 0.1},{x: 0.7, y: -0.1}], 0),
            stats: new TowerStats(120, 45, 240 * (Math.PI / 180), 2, 1200, false, tickLength),
            damageData: new DamageData(200, 0, []),
            sfx: "Sound_cannon_2"
        },
        "Tower_Cannon3": {
            name: "Tower_Cannon3",
            data: new TowerData(0, "Tower_Cannon3", "Tower_2Barrel2", "Laser_Bolt_Orange", [{x: 0.7, y: 0.1},{x: 0.7, y: -0.1}], 0),
            stats: new TowerStats(180, 45, 240 * (Math.PI / 180), 2, 2000, false, tickLength),
            damageData: new DamageData(500, 0, []),
            sfx: "Sound_cannon_2"
        },
        "Tower_Cannon4": {
            name: "Tower_Cannon4",
            data: new TowerData(0, "Tower_Cannon4", "Tower_3Barrel", "Laser_Bolt_Orange", [{x: 0.7, y: 0.15}, {x: 0.7, y: 0.0},{x: 0.7, y: -0.15}], 0),
            stats: new TowerStats(210, 45, 210 * (Math.PI / 180), 2, 3000, false, tickLength),
            damageData: new DamageData(600, 0, []),
            sfx: "Sound_cannon_2"
        },
        "Tower_Laser1": {
            name: "Tower_Laser1",
            data: new TowerData(0, "Tower_Laser1", "Tower_Laser1", "Laser_Bolt_Blue", [{x: 0.7, y: 0}], 0),
            stats: new TowerStats(150, 30, 180 * (Math.PI / 180), 2, 1500, false, tickLength),
            damageData: new DamageData(200, 0, []),
            upgradeTree: new UpgradeTree(["Tower_Laser2", "Tower_Laser3", "Tower_Laser4"], -1),
            sfx: "Sound_cannon_1"
        },
        "Tower_Laser2": {
            name: "Tower_Laser2",
            data: new TowerData(0, "Tower_Laser2", "Tower_Laser2", "Laser_Bolt_Blue", [{x: 0.7, y: 0}], 0),
            stats: new TowerStats(150, 30, 180 * (Math.PI / 180), 2, 1500, false, tickLength),
            damageData: new DamageData(200, 0, []),
            sfx: "Sound_cannon_1"
        }, 
        "Tower_Laser3": {
            name: "Tower_Laser3",
            data: new TowerData(0, "Tower_Laser3", "Tower_Laser3", "Laser_Bolt_Red", [{x: 0.7, y: 0}], 0),
            stats: new TowerStats(150, 30, 180 * (Math.PI / 180), 2, 3000, false, tickLength),
            damageData: new DamageData(200, 0, []),
            sfx: "Sound_cannon_1"
        },
        "Tower_Laser4": {
            name: "Tower_Laser4",
            data: new TowerData(0, "Tower_Laser4", "Tower_Laser4", "Laser_Bolt_Red_Ultra", [{x: 0.7, y: 0}], 0),
            stats: new TowerStats(100, 30, 150 * (Math.PI / 180), 2, 6000, false, tickLength),
            damageData: new DamageData(200, 0, []),
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
            stats: new ProjectileStats({x:-1,y:-1}, 250, 1, 550, true, tickLength),
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
            stats: new ProjectileStats({x:-1,y:-1}, 150, 3, 400, true, tickLength),
            // collider: new Collider([{x:-5,y:-3.5},
            //                         {x:-5,y:3.5},
            //                         {x:0,y:6},
            //                         {x:5,y:3.5},
            //                         {x:5,y:-3.5},
            //                         {x:0,y:-6}],{ x:0, y:0}),
            collider: undefined
        },
        "Laser_Bolt_Red": {
            name: "Laser_Bolt_Red",
            data: new ProjectileData(0, "Laser_Bolt_Red", "Projectile_Laser_Red", 0, 0, 0),
            stats: new ProjectileStats({x:-1,y:-1}, 250, 7, 500, true, tickLength),
            // collider: new Collider([{x:-5,y:-3.5},
            //                         {x:-5,y:3.5},
            //                         {x:0,y:6},
            //                         {x:5,y:3.5},
            //                         {x:5,y:-3.5},
            //                         {x:0,y:-6}],{ x:0, y:0}),
            collider: undefined
        },
        "Laser_Bolt_Red_Ultra": {
            name: "Laser_Bolt_Red_Ultra",
            data: new ProjectileData(0, "Laser_Bolt_Red_Ultra", "Projectile_Laser_Red", 0, 0, 0),
            stats: new ProjectileStats({x:-1,y:-1}, 450, 999, 500, true, tickLength),
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
            stats: new CreepStats(100,200,120,true,50, 25,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Standard_Agile": {
            name: "Creep_Standard_Agile",
            data: new CreepData(0,"Creep_Standard_Agile", "Creep_6_BLUE", []),
            stats: new CreepStats(100,225,180,true,50, 50,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Standard_Multi": {
            name: "Creep_Standard_Multi",
            data: new CreepData(0,"Creep_Standard_Multi", "Creep_5_BLUE", []),
            stats: new CreepStats(150,235,160,true,75, 100,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Standard_Tough": {
            name: "Creep_Standard_Tough",
            data: new CreepData(0,"Creep_Standard_Tough", "Creep_2_BLUE", []),
            stats: new CreepStats(500,175,90,true,75, 150,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Fast": {
            name: "Creep_Fast",
            data: new CreepData(0,"Creep_Fast", "Creep_1_GREEN", []),
            stats: new CreepStats(100,250,100,true,30, 50,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Fast_Agile": {
            name: "Creep_Fast_Agile",
            data: new CreepData(0,"Creep_Fast_Agile", "Creep_6_GREEN", []),
            stats: new CreepStats(70,275,180,true,30, 100,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Fast_Multi": {
            name: "Creep_Fast_Multi",
            data: new CreepData(0,"Creep_Fast_Multi", "Creep_5_GREEN", []),
            stats: new CreepStats(150,235,140,true,50, 150,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Fast_Tough": {
            name: "Creep_Fast_Tough",
            data: new CreepData(0,"Creep_Fast_Tough", "Creep_2_GREEN", []),
            stats: new CreepStats(500,200,70,true,100, 250,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Armored": {
            name: "Creep_Armored",
            data: new CreepData(0,"Creep_Armored", "Creep_1_ORANGE", []),
            stats: new CreepStats(150,175,120,true,100, 100,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Armored_Agile": {
            name: "Creep_Armored_Agile",
            data: new CreepData(0,"Creep_Armored_Agile", "Creep_1_ORANGE", []),
            stats: new CreepStats(150,200,180,true,70, 150,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Armored_Multi": {
            name: "Creep_Armored_Multi",
            data: new CreepData(0,"Creep_Armored_Multi", "Creep_5_ORANGE", []),
            stats: new CreepStats(300,175,120,true,125, 250,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        },
        "Creep_Armored_Tough": {
            name: "Creep_Armored_Tough",
            data: new CreepData(0,"Creep_Armored_Tough", "Creep_2_ORANGE", []),
            stats: new CreepStats(1000,100,90,true,200, 1000,tickLength),
            collider: new Collider([{x: -10, y: -10}, {x: -10, y: 10}, {x: 10, y: 10}, {x: 10, y: -10}], {x: 0, y: 0})
        }
    }
};