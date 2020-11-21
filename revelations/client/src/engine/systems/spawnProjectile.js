import ProjectileData from "../components/ProjectileData";
import Transform from "../components/Transform";
import ProjectileEntity from "../entities/ProjectileEntity";
import GameEnums from "../GameEnums";

function spawnProjectile(towerId, position, manager){
    // Retrieve archtype data
    const tower = manager.gameState.towerDirectory[towerId];
    const archtype = GameEnums.PROJECTILE_PREFABS[tower.data.projectileArchtype];

    // Construct component data
    const newId = 40000 + Object.keys(manager.gameState.projectileDirectory).length;
    const newData = archtype.data;
    newData.id = newId;
    newData.launcherId = towerId;
    const angle = Math.atan2(position.y - tower.transform.position.y, position.x - tower.transform.position.x);
    const transform = new Transform(position.x, position.y, angle);
    
    // Instantiate prefab
    manager.gameState.projectileDirectory[newId] = new ProjectileEntity(newData, archtype.stats, tower.damageData, transform, archtype.collider);
}

export default spawnProjectile;