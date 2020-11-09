export default class CreepStats{
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