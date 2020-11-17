/** 
 * @class 
 * 
 * @memberof module:Components
 * 
 * @classdesc
 * Data container for combat stats of a creep
 * 
 * @property {number} maximum starting health
 * @property {number} current current health remaining
 * @property {number} linear speed in game units per tick
 * @property {number} rotational speed in degrees per tick
 * @property {boolean} should camo detection be required
 * @property {number} reduction applied to all incoming dmg 
*/
class CreepStats{
    constructor(health, speed, turnSpeed, visible, armor){
        /** @type {number} maximum health */
        this.health = health;
        /** @type {number} current health */
        this.hitPoints = health;
        /** @type {number} linear speed in units per tick*/
        this.speed = speed;
        /** @type {number} rotational speed */
        this.turnSpeed = turnSpeed;
        /** @type {boolean} should camo detection be required */
        this.visible = visible;
        /** @type {number} reduction applied to all incoming dmg */
        this.armor = armor;
    }
}

export default CreepStats;