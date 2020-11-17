/**
 * @class 
 * @memberof module:Components
 * 
 * @property {number} attackSpeed Number of attacks per second this tower can perform
 * @property {string} rotateSpeed Radians per second this tower can turn
 * @property {Vector[]} projectileSpeed How fast to launch the projectile in game units per second
 * @property {number} detectsCamo Number of creeps this tower has destroyed
 */
class TowerStats{
    constructor(attackSpeed, rotateSpeed, projectileSpeed, detectsCamo, tickLength){
        this.attackSpeed = attackSpeed / tickLength;
        this.rotateSpeed = rotateSpeed / tickLength;
        this.projectileSpeed = projectileSpeed / tickLength;
        this.detectsCamo = detectsCamo;
    }
}

export default TowerStats;