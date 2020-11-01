import Collider from "../components/Collider.js";
import CreepStats from "../components/CreepStats.js";
import CreepData from "../components/CreepData.js";
import Transform from "../components/Transform.js";

export default class CreepEntity{
    /**
     * @param {CreepData} data
     * @param {Transform} transform
     * @param {CreepStats} stats
     * @param {Collider} collider
     */
    constructor(data, transform, stats, collider){
        /** @type {CreepData} data */
        this.data = data;
        /** @type {Transform} transform */
        this.transform = transform;
        /** @type {CreepStats} stats */
        this.stats = stats;
        /** @type {Collider} collider */
        this.collider = collider;
    }
}