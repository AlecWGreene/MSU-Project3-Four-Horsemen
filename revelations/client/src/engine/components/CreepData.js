export default class CreepData{
    /**
     * @param {number} id
     * @param {string} spriteSheet 
     * @param {number[]} keyFrames array of delays in ms for each frame in the spritesheet
     */
    constructor(id, spriteSheet, keyFrames, path){
        this.id = id;
        /** @type {string} string representing the path to the spritesheet from the public/Assets/ folder */
        this.spriteSheet = spriteSheet;
        /** @type {number[]} array of delays in ms for each frame in the spritesheet */
        this.keyFrames = keyFrames;
        /** @type {{x:number,y:number}[]} waypoints in world space for the creep to travel to */
        this.path = Array.from(path);
    }
}