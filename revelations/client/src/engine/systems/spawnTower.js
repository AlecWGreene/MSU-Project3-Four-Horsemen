import TowerData from "../components/TowerData";
import GameEnums from "../GameEnums.js";
import GameManager from "../GameManager";
import Tile from "../Tile";
import TowerEntity from "../entities/TowerEntity.js";
import Transform from "../components/Transform";

/**
 * @namespace spawnTower
 * @memberof module:Systems
 */

 /**
  * @function
  * @memberof module:Systems.spawnTower
  * 
  * @description Attempts to place a tower and returns true if it was successful
  * 
  * @param {GameManager} manager GameManager instance being mutated
  * @param {string} archtype Prefab key to use for instantiation
  * @param {Tile} tile Tile to place the tower on
  * 
  * @returns {boolean}
  */
 function spawnTower(manager, id, archtype, tile){
     
     // Return false if no base is on the tile
    if(manager.gameState.baseGrid.filter(t => t.isEqualTo(tile)).length === 0){
        return false;
    }

    // Get tower archtype
    archtype = GameEnums.TOWER_PREFABS[archtype];

    // Instantiate component data
    const newData = archtype.data;
    newData.id = id;
    const newStats = archtype.stats;
    const newDamageData = archtype.damageData;
    const newUpgradeTree = archtype.upgradeTree;
    const transform = new Transform(tile.position.x, tile.position.y, Math.PI / 2);
    
    // Instantiate new entity
    manager.gameState.towerDirectory[id] = new TowerEntity(newData, newStats, newDamageData, transform, newUpgradeTree); 
    return true;
 }

 export default spawnTower;