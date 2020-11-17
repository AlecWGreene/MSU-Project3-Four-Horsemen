/**
 * @typedef {Object} Vector
 * @property {number} x x coordinate
 * @property {number} y y coordinate
 */

/**
 * @class 
 * @memberof module:Components
 * 
 * @property {number} id Unique identifier for the tower
 * @property {string} archtype Prefab key used to instantiate the tower
 * @property {string} projectileArchtype Prefab key used to instantiate projectiles
 * @property {Vector[]} barrels Coordinates representing the spawn points for projectiles if the tower was of default size and no rotation
 * @property {number} kills Number of creeps this tower has destroyed
 */
class TowerData{
    constructor(id, archtype, projectileArchtype, barrels, kills){
        this.id = id;
        this.archtype = archtype;
        this.projectileArchtype = projectileArchtype;
        this.barrels = barrels;
        this.kills = kills;
    }
}

export default TowerData;