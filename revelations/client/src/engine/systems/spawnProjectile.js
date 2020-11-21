import ProjectileData from "../components/ProjectileData";
import Transform from "../components/Transform";
import ProjectileEntity from "../entities/ProjectileEntity";
import GameEnums from "../GameEnums";
import GameManager from "../GameManager";

/**
 * @namespace spawnProjectile
 * @memberof module:Systems
 */

/**
 * @function spawnProjectile
 * @memberof module:Systems~spawnProjectile
 * 
 * @description Spawns a projectile and registers it to the manager's projectile directory
 * 
 * @param {number} towerId Id of the tower from the manager's tower directory 
 * @param {number} barrelIndex Index of the barrel from the prefab, represented as a pair of numbers (-1,1) which represent the percentage of the square the barrel point lays on
 * @param {GameManager} manager GameManager instance
 * 
 * @returns {Void}
 */
function spawnProjectile(towerId, barrelIndex, manager){
    // Retrieve archtype data
    const tower = manager.gameState.towerDirectory[towerId];
    const archtype = GameEnums.PROJECTILE_PREFABS[tower.data.projectileArchtype];

    // Construct component data
    const newId = 40000 + Object.keys(manager.gameState.projectileDirectory).length;
    const newData = archtype.data;
    newData.id = newId;
    newData.launcherId = towerId;
    const angle = tower.transform.rotation;
    const transform = new Transform(tower.transform.position.x + tower.data.barrels[barrelIndex].x * Math.cos(angle) * manager.gameState.mapGrid.cellsize / 2, 
                                    tower.transform.position.y + tower.data.barrels[barrelIndex].x * Math.sin(angle) * manager.gameState.mapGrid.cellsize / 2, 
                                    angle);
    
    // Instantiate prefab
    manager.gameState.projectileDirectory[newId] = new ProjectileEntity(newData, archtype.stats, tower.damageData, transform, archtype.collider);
}

export default spawnProjectile;