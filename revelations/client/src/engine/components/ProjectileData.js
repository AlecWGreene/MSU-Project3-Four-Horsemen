/** 
 * @class 
 * 
 * @memberof module:Components
 * 
 * @classdesc
 * Data container for a projectile's instance data
 * 
 * @property {number} id Id for directory
 * @property {string} archtype Prefab key for instantiation
 * @property {string} spriteSheet Prefab key for rendering
 * @property {number} launcherId Id of tower which launched the projectile data
 * @property {number} targetsHit Number of targets hit
 * @property {number} distanceTraveled How far projectile has traveled
*/
class ProjectileData{
    constructor(id, archtype, spriteSheet, launcherId, targetsHit, distanceTraveled){
        this.id = id;
        this.archtype = archtype;
        this.spriteSheet = spriteSheet;
        this.launcherId = launcherId;
        this.targetsHit = targetsHit;
        this.distanceTraveled = distanceTraveled;
    }
}

export default ProjectileData;