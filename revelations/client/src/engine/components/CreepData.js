/**
 * @typedef Vector
 * @type {Object}
 * @property {number} x x coordinate
 * @property {number} y y coordinate
 */

/**
 * @class
 * 
 * @memberof module:Components
 * 
 * @classdesc Non-generic information pertaining to a specific creep
 * 
 * @property {number} id Unique id for the entity
 * @property {string} spriteSheet string representing the path to the spritesheet from the public/Assets/ folder
 * @property {Array.<Tile>} path waypoints in world space for the creep to travel to
 * @property {number} targetIndex integer representing the path index of the current target tile
 * @property {Tile} target current target tile for movement
 */
class CreepData{
    /**
     * @param {number} id
     * @param {string} spriteSheet 
     * @param {Array<Vector>} path array of delays in ms for each frame in the spritesheet
     */
    constructor(id, archtype, spriteSheet, path){
        this.id = id;
        this.archtype = archtype;
        this.spriteSheet = spriteSheet;
        this.path = Array.from(path);
        this.targetIndex = 0;
        this.target = this.path[0];
    }
}

export default CreepData;