import GameEnums from "../GameEnums.js";
import CreepData from "../components/CreepData.js";
import CreepStats from "../components/CreepStats.js";
import CreepEntity from "../entities/CreepEntity.js";
import Collider from "../components/Collider.js";
import Transform from "../components/Transform.js"

export default function spawnCreep(manager, archtype, source, path){
    // Get creep archtypes
    archtype = GameEnums.CREEP_PREFABS[archtype];

    // Instatiante component data
    const newID = 1 + Object.keys(manager).length;
    const newData = new CreepData(newID, archtype.data.spriteSheet, path);
    const newStats = archtype.stats;
    const newCollider = archtype.collider;

    // Calculate the starting rotation
    const startAngle = (180 / Math.PI) * Math.atan2(source.position.x, source.position.y) - 90;
    const newTransform = new Transform(source.position.x, source.position.y, startAngle);

    manager.gameState.creepDirectory[newID] = new CreepEntity(newData, newTransform, newStats, newCollider);
}

