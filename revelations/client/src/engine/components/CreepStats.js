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
 * @property {number} speed Speed in game units per second
 * @property {number} turnSpeed Speed in degrees per second
 * @property {boolean} visible Is camo detection be required
 * @property {number} armor Damage reduction applied to all incoming dmg 
 * @property {number} reward Cash reward for killing the creep
 * @property {number} tickLength Used to adjust speed for the configured tick length
*/
class CreepStats{
    constructor(health, speed, turnSpeed, visible, armor, reward, tickLength){
        this.health = health;
        this.hitPoints = health;
        this.speed = speed / tickLength;
        this.turnSpeed = turnSpeed / tickLength;
        this.visible = visible;
        this.armor = armor;
        this.reward = reward;
    }
}

export default CreepStats;