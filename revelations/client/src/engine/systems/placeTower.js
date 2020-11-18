function placeTower(manager, archtype, tile){
    if(manager.gameState.baseGrid.filter(t => t.isEqualTo(tile)).length === 0){
        throw new Error("Systems~placeTower: tile does not contain a base");
    }
    else if(Object.values(manager.gameState.towerDirectory).filter(tower => tower.transform.position.x === tile.position.x && tower.transform.position.y === tile.position.y).length > 0){
        throw new Error("Systems~placeTower: tile already has a tower");
    }
    else{
        
    }
}

export default placeTower;