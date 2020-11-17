import Tile from "./Tile.js";

export default class CreepData{
    /**
     * @param {number} id
     * @param {string} archtype 
     * @param {{x:number, y:number}[]} path array of delays in ms for each frame in the spritesheet
     */
    constructor(id, archtype, spritesheet, path){
        this.id = id;
        /** @type {string} string representing the prefab archtype being instantiated */
        this.archtype = archtype;
        /** @type {string} string representing the path to the spritesheet from the public/Assets/ folder */
        this.spriteSheet = spritesheet;
        /** @type {Tile[]} waypoints in world space for the creep to travel to */
        this.path = Array.from(path);
        /** @type {number} integer representing the path index of the current target tile */
        this.targetIndex = 0;
        /** @type {Tile} current target tile for movement*/
        this.target = this.path[0];
    }
}