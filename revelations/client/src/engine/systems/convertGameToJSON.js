function replacer(key, value){

}

/**
 * @function
 * Takes an entity directory and stringifies it by removing extraneous data
 * @example
 * (id, TowerEntity) => { 
 *   return {
 *      archtype: "Tower_Laser2",
 *      transform: {
 *          position: {
 *              x: 120,
 *              y: 120
 *          },
 *          rotation: 45
 *      },
 *      TowerData: {
 *          id: 30419,
 *          target: 10924   
 *      }
 *    };
 * } 
 * 
 */
function replaceDirectory(directory){

}

/**
 * @example
 *(id, CreepEntity) => { 
 *   return {
 *      archtype: "Creep_1_RED",
 *      transform: {
 *          position: {
 *              x: 120,
 *              y: 120
 *          },
 *          rotation: 45
 *      },
 *      CreepData: {
 *          id: 30419,
 *          target: 10924   
 *      },
 *      CreepStats: {
 *      
 *      }
 *    };
 * } 
 * 
 * @param {src/engine/entities/CreepEntity.js~CreepEntity.js} creep 
 */
function replaceCreepEntity(creep){

}

/**
 * @function
 * Stringifies single data pieces such as numbers, strings, tiles, etc
 * @example
 * new Tile(x,y,r,c) => { x: x, y: y, row: r, col:c }
 */
function replaceValue(value){

}

export default function convertGameToJSON(manager){

}