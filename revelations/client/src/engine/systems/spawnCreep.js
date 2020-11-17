import GameEnums from "../GameEnums.js";
import CreepData from "../components/CreepData.js";
import CreepStats from "../components/CreepStats.js";
import CreepEntity from "../entities/CreepEntity.js";
import Collider from "../components/Collider.js";
import Transform from "../components/Transform.js"

export default function spawnCreep(manager, id, archtype, source, path){
    // Get creep archtype
    archtype = GameEnums.CREEP_PREFABS[archtype];

    // Instatiante component data
    const newData = new CreepData(id, archtype.name, archtype.data.spriteSheet, path);
    const newStats = archtype.stats;
    const newCollider = archtype.collider;

    // Calculate the starting rotation
    const startAngle = Math.atan2(path[0].position.y - source.position.y, path[0].position.x - source.position.x);
    const newTransform = new Transform(source.position.x, source.position.y, startAngle);

    manager.gameState.creepDirectory[id] = new CreepEntity(newData, newTransform, newStats, newCollider);
}

