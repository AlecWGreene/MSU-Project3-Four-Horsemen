import Collider from "../components/Collider.js";
import CreepStats from "../components/CreepStats.js";
import CreepData from "../components/CreepData.js";
import Transform from "../components/Transform.js";

/**
 * @class
 * @memberof module:Entities
 * 
 * @property {CreepData} data Instance data of the creep
 * @property {CreepStats} stats Archtype stats of the creep, which also contains the current hitpoints
 * @property {Transform} transform World transform of the creep
 * @property {Collider} collider Collider information of the creep
 */
class CreepEntity{
    constructor(data, transform, stats, collider){
        this.data = data;
        this.transform = transform;
        this.stats = stats;
        this.collider = collider;
    }
}

export default CreepEntity;