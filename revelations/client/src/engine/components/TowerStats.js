/**
 * @class 
 * @memberof module:Components
 * 
 * @property {number} attackSpeed Number of attacks per second this tower can perform
 * @property {string} rotateSpeed Radians per second this tower can turn
 * @property {Vector[]} projectileSpeed How fast to launch the projectile
 * @property {number} detectsCamo Number of creeps this tower has destroyed
 */
class TowerStats{
    constructor(attackSpeed, rotateSpeed, projectileSpeed, detectsCamo){
        this.attackSpeed = attackSpeed;
        this.rotateSpeed = rotateSpeed;
        this.projectileSpeed = projectileSpeed;
        this.detectsCamo = detectsCamo;
    }
}

export default TowerStats;