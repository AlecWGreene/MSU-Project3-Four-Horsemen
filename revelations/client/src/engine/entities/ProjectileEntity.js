import Collider from "../components/Collider.js";
import ProjectileStats from "../components/ProjectileStats.js";
import DamageData from "../components/DamageData.js";
import ProjectileData from "../components/ProjectileData.js";
import Transform from "../components/Transform.js";

/**
 * @class
 * @memberof module:Entities
 * 
 * @property {ProjectileData} data Instance data of the projectile
 * @property {ProjectileStats} stats Archtype stats of the projectile, which will describe it's behaviour
 * @property {DamageData} damageData Damage information to apply to victims
 * @property {Transform} transform World transform of the projectile
 * @property {Collider} collider Collider information of the projectile
 */
class ProjectileEntity{
    constructor(data, stats, damageData, transform, collider){
        this.data = data;
        this.transform = transform;
        this.damageData = damageData;
        this.stats = stats;
        this.collider = collider;
    }
}

export default ProjectileEntity;