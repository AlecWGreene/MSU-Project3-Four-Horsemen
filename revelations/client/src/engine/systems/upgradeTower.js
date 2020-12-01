import GameEnums from "../GameEnums.js";

function upgradeTower(towerId, prefab, manager){
    const towerPrefab = GameEnums.TOWER_PREFABS[prefab];
    manager.gameState.towerDirectory[towerId].upgrades.currentUpgrade++;
    manager.gameState.towerDirectory[towerId].stats = towerPrefab.stats;
    manager.gameState.towerDirectory[towerId].damageData = towerPrefab.damageData;
    manager.gameState.towerDirectory[towerId].data = {
        ...manager.gameState.towerDirectory[towerId].data,
        archtype: towerPrefab.data.archtype,
        spriteSheet: towerPrefab.data.spriteSheet,
        projectileArchtype: towerPrefab.data.projectileArchtype,
        barrels: towerPrefab.data.barrels
    };

    if(!manager.runtimeState.isWaveRunning){
        manager.updateCallback();
    }
}

export default upgradeTower;