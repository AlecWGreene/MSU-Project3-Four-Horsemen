export default class CreepData{
    /**
     * @param {number} id
     * @param {string} spriteSheet 
     * @param {{x:number, y:number}[]} path array of delays in ms for each frame in the spritesheet
     */
    constructor(id, spriteSheet, path){
        this.id = id;
        /** @type {string} string representing the path to the spritesheet from the public/Assets/ folder */
        this.spriteSheet = spriteSheet;
        /** @type {{x:number,y:number}[]} waypoints in world space for the creep to travel to */
        this.path = Array.from(path);
    }
}