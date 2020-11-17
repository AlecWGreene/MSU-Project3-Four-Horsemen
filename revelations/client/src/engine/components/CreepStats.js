/** 
 * @class 
 * 
 * @memberof module:Components
 * 
 * @classdesc
 * Data container for combat stats of a creep
 * 
 * @property {number} health Starting health
 * @property {number} hitPoints Current health remaining
 * @property {number} speed Speed in game units per tick
 * @property {number} turnSpeed Speed in degrees per tick
 * @property {boolean} visible Is camo detection be required
 * @property {number} armor Damage reduction applied to all incoming dmg 
*/
class CreepStats{
    constructor(health, speed, turnSpeed, visible, armor){
        this.health = health;
        this.hitPoints = health;
        this.speed = speed;
        this.turnSpeed = turnSpeed;
        this.visible = visible;
        this.armor = armor;
    }
}

export default CreepStats;