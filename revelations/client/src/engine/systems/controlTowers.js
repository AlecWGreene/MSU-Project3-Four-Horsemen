import CreepEntity from "../entities/CreepEntity.js";
import TowerEntity from "../entities/TowerEntity.js";
import GameManager from "../GameManager.js";
import GameEnums from "../GameEnums.js";
import spawnProjectile from "./spawnProjectile.js";

/**
 * @namespace controlTowers
 * @memberof module:Systems
 */

/**
 * @template T
 * @typedef {Object.<number, T>} Directory<T>
 */

 /**
  * @function getDistanceToTarget
  * @memberof module:Systems.controlTowers
  * 
  * @description Uses a Dijkstra map to get the distance a creep has to travel until it reaches the target
  * 
  * @param {CreepEntity} creep The creep to use for measurement
  * @param {GameManager} manager GameManager instance to get the Dijkstra map from
  * 
  * @returns {number}
  */
const getDistanceToTarget = (creep, manager) => {
    const dijkstraMap = manager.gameState.pathData.dijkstraMap;
    const nearestTile = manager.gameState.mapGrid.tiles[creep.data.target.index.row][creep.data.target.index.col];
    return dijkstraMap[nearestTile.index.row + "," + nearestTile.index.col];
}

/**
 * @callback Heuristic
 * @param {CreepEntity} creepA First creep to compare
 * @param {CreepEntity} creepB Second creep to compare
 * @param {GameManager} manager GameManager instance to retrieve data from
 * @returns {CreepEntity}
 */

/**
 * @const priorityHeuristics
 * @type {Object.<string, Heuristic>}
 * @description A enum of targeting heuristics correlating to the different priority settings towers can have
 * @property {Heuristic} First Returns the creep with the shortest distance left to the target
 * @property {Heuristic} Last Returns the creep with the longest distance left to the target
 */
const priorityHeuristics = {
    First: (creepA, creepB, manager) => {
        const distA = getDistanceToTarget(creepA, manager);
        const distB = getDistanceToTarget(creepB, manager);
    
        if(distA < distB){
            return creepA;
        }
        else if(distA > distB){
            return creepB;
        }
        else{
            const euclidA = Math.sqrt((creepA.transform.position.x - creepA.data.target.position.x)**2+(creepA.transform.position.y - creepA.data.target.position.y)**2)
            const euclidB = Math.sqrt((creepB.transform.position.x - creepB.data.target.position.x)**2+(creepB.transform.position.y - creepB.data.target.position.y)**2)
            if(euclidA > euclidB){
                return creepB
            }
            else{
                return creepA;
            }
        }
    },
    Last: (creepA, creepB, manager) => {
        const distA = getDistanceToTarget(creepA, manager);
        const distB = getDistanceToTarget(creepB, manager);
        
        if(distA > distB){
            return creepA;
        }
        else if(distA < distB){
            return creepB;
        }
        else{
            const euclidA = Math.sqrt((creepA.transform.position.x - creepA.data.target.position.x)**2+(creepA.transform.position.y - creepA.data.target.position.y)**2)
            const euclidB = Math.sqrt((creepB.transform.position.x - creepB.data.target.position.x)**2+(creepB.transform.position.y - creepB.data.target.position.y)**2)
            if(euclidA < euclidB){
                return creepB
            }
            else{
                return creepA;
            }
        }
    }    
}

/** 
 * @function rotateTower
 * @memberof module:Systems.controlTowers
 * 
 * @description Rotates a tower
 * 
 * @param {TowerEntity} tower Tower entity to rotate
 * @param {number} angle Angle in radians the tower needs to rotate
 * 
 * @returns {Void}
*/
function rotateTower(tower, angle){
    tower.transform.rotation += angle;
}

/** 
 * @function getCreepsInRange
 * @memberof module:Systems.controlTowers
 * 
 * @description Finds every creep in range of the tower
 * 
 * @param {TowerEntity} tower The tower peforming the search
 * @param {Directory<CreepEntity>} creepDirectory Current directory of creeps
 * 
 * @returns {CreepEntity[]}
*/
function getCreepsInRange(tower, manager){
    // For each creep
    const targets = [];
    const creepDirectory = manager.gameState.creepDirectory;
    const range = tower.stats.attackRange;

    // Check against every creep
    for(const id of Object.keys(creepDirectory)){
        const creep = creepDirectory[id];
        const dir = {
            x: creep.transform.position.x - tower.transform.position.x,
            y: creep.transform.position.y - tower.transform.position.y
        }

        // Return out if they are not in the bounding box
        if(Math.abs(dir.x) > range || Math.abs(dir.y) > range){
            continue;
        }

        const dist = Math.sqrt((dir.x)**2 + (dir.y)**2);

        // If creep is in range
        if(dist < range){
            targets.push(creep);
        }
    }

    return targets;
}

/** 
 * @function getCreepsInRange
 * @memberof module:Systems.controlTowers
 * 
 * @description Selects a new target based on the chosen priority
 * 
 * @param {TowerEntity} tower Tower with an empty target
 * @param {CreepEntity[]} creepArray Array of creeps in range of the tower
 * 
 * @returns {Void}
 */
function selectNewTarget(tower, creepArray, manager){
    let current = creepArray[0];
    const heuristic = priorityHeuristics[tower.data.priority];
    for(const creep of creepArray){
        current = heuristic(current, creep, manager);
    }

    tower.data.target = current;
}

/** 
 * @function removeStartAnimationFlag
 * @memberof module:Systems.controlTowers
 * 
 * @description Removes the tower id from manager's animationState
 * 
 * @param {TowerEntity} tower Tower which is being referenced
 * @param {GameManager} manager GameManager instance
 * 
 * @returns {Void}
*/
function removeStartAnimationFlag(tower, manager){
    manager.animationState.towers = manager.animationState.towers.filter(t => t !== tower.data.id);
}

/**
 * @function calculateAngleDifference
 * @memberof module:Systems.controlTowers
 * 
 * @description Calculate the shortest angle between two angles preserving direction
 * 
 * @param {number} start Beginning angle in radians
 * @param {number} end Destination angle in radians
 * 
 * @returns {number}
 */
export function calculateAngleDifference(start, end){
    // Adjust angles to be between 0 and 2*PI
    const newStart = start < 0 ? (start + 2*Math.PI) : start;
    const newEnd = end < 0 ? (end + 2*Math.PI) : end; 
    const diff = newEnd - newStart;

    return (diff >= Math.PI ? (diff - 2 * Math.PI) : (diff <= -Math.PI ? (diff + 2 * Math.PI) : diff));
}
/**
 * @function controlTowers
 * @memberof module:Systems.controlTowers
 * 
 * @description Iterate through active towers and perform the specified actions
 * 
 * @param {GameManager} manager Game Manager instance to mutate
 * 
 * @returns {Void}
 */
function controlTowers(manager){
    // Iterate over each tower
    const towerDirectory = manager.gameState.towerDirectory;
    for(const id of Object.keys(towerDirectory)){
        // Retrieve tower and flush its animation flag
        const tower = towerDirectory[id];
        if(tower.data.cooldown <= 0) tower.data.cooldown = 0;
        else tower.data.cooldown -= GameEnums.GAME_CONFIG.tickLength;
        removeStartAnimationFlag(tower, manager);

        // If tower has no target or target is destroyed
        if(tower.data.target === undefined || tower.data.target.data.hitPoints <= 0){
            const c = getCreepsInRange(tower, manager);
            if(c.length > 0){
                selectNewTarget(tower, c, manager);
            }
            else{
                tower.data.target = undefined;
            }
        }
        else{
            const creep = tower.data.target;
            const dir = {
                x: creep.transform.position.x - tower.transform.position.x,
                y: creep.transform.position.y - tower.transform.position.y
            }
            const distToCreep = Math.sqrt((dir.x)**2 + (dir.y)**2);

            // If creep leaves the tower range look for a new target
            if(distToCreep > tower.stats.attackRange){
                tower.data.target = undefined;
                const c = getCreepsInRange(tower, manager);
                if(c.length > 0){
                    selectNewTarget(tower, c, manager);
                }
            }
            // Rotate to lead the target and fire if cooldown is 0
            else{
                const creepDirection = {
                    x: creep.data.target.position.x - creep.transform.position.x,
                    y: creep.data.target.position.y - creep.transform.position.y
                }

                // Adjust tower rotation to lead towers and rotate in the shortest direction
                const angle = Math.atan2((creep.transform.position.y + creepDirection.y * 0.25) - tower.transform.position.y, (creep.transform.position.x + creepDirection.x * 0.25) - tower.transform.position.x);
                const angleToRotate = calculateAngleDifference(tower.transform.rotation, angle);

                // If tower can rotate to lead it
                if(Math.abs(angleToRotate) <= tower.stats.rotateSpeed){
                    tower.transform.rotation = angle;

                    // If tower has no cooldown left then fire
                    if(tower.data.cooldown <= 0){
                        tower.data.cooldown = 1000 / tower.stats.attackSpeed;
                        manager.animationState.towers.push(tower.data.id);
                        for(let index = 0; index < tower.data.barrels.length; index++){
                            spawnProjectile(tower.data.id, index, manager);
                        }
                    }
                }
                else{
                    // Rotate towards creep
                    rotateTower(tower, tower.stats.rotateSpeed * Math.sign(angleToRotate));
                }
            }
        }
    }
}

export default controlTowers;