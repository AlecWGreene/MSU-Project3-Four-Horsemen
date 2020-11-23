/**
 * @class 
 * @memberof module:Components
 * 
 * @property {number} attackRange Distance in game units the tower can attack
 * @property {number} attackSpeed Number of attacks per second this tower can perform
 * @property {string} rotateSpeed Radians per second this tower can turn
 * @property {number} cost Cost of the tower
 * @property {Vector[]} projectileSpeed How fast to launch the projectile in game units per second
 * @property {number} detectsCamo Number of creeps this tower has destroyed
 */
class TowerStats{
    constructor(attackRange, attackSpeed, rotateSpeed, projectileSpeed, cost, detectsCamo, tickLength){
        this.attackRange = attackRange;
        this.attackSpeed = attackSpeed / tickLength;
        this.rotateSpeed = rotateSpeed / tickLength;
        this.projectileSpeed = projectileSpeed / tickLength;
        this.cost = cost;
        this.detectsCamo = detectsCamo;
    }
}

export default TowerStats;