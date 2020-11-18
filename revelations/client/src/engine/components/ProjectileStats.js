/** 
 * @class 
 * 
 * @memberof module:Components
 * 
 * @classdesc
 * Data container for combat stats of a projectile
 * 
 * @property {number} origin Starting health
 * @property {number} maxDistance Max distance it can travel
 * @property {number} maxTargets Number of targets the projectile can hit before it is destroyed
 * @property {number} speed Speed in game unites per second
 * @property {boolean} camoDetection Can projectile hit camo targets
*/
class ProjectileStats{
    constructor(origin, maxDistance, maxTargets, speed, camoDetection, tickLength){
        this.origin = origin;
        this.maxDistance = maxDistance;
        this.maxTargets = maxTargets;
        this.speed = speed / tickLength;
        this.camoDetection = camoDetection;
    }
}

export default ProjectileStats;