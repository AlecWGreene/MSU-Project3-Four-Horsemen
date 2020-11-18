import CreepEntity from "../entities/CreepEntity.js";

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
 * @property {string} spriteSheet String used to retrieve data from SpriteEnums
 * @property {string} projectileArchtype Prefab key used to instantiate projectiles
 * @property {Vector[]} barrels Coordinates representing the spawn points for projectiles if the tower was of default size and no rotation
 * @property {number} kills Number of creeps this tower has destroyed
 * @property {("First"|"Last"|"Strongest")} priority The targeting priority scheme
 * @property {CreepEntity} target Creep that the tower is targeting
 * @property {number} cooldown Time in ms that the tower must wait before firing
 */
class TowerData{
    constructor(id, archtype, spriteSheet, projectileArchtype, barrels, kills){
        this.id = id;
        this.archtype = archtype;
        this.spriteSheet = spriteSheet;
        this.projectileArchtype = projectileArchtype;
        this.barrels = barrels;
        this.kills = kills;
        this.priority = "First";
        this.target = undefined;
        this.cooldown = 0;
    }
}

export default TowerData;