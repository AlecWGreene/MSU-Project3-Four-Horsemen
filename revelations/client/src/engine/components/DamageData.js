/**
 * @class
 * @memberof module:Components
 * 
 * @property {number} damage Damage to apply to creeps
 * @property {number} radius Radius of the impact, 0 represents single target 
 * @property {Object} effects Special effects the damage will apply 
 */
class DamageData{
    constructor(damage, radius, effects){
        this.damage = damage;
        this.radius = radius;
        this.effects = effects;
    }
}

export default DamageData;