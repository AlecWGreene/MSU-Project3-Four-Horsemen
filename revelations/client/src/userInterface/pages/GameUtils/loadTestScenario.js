export default function loadTestScenario(manager){
    
    manager.gameState.wallGrid = [
        manager.gameState.mapGrid.tiles[8][9], manager.gameState.mapGrid.tiles[8][10], manager.gameState.mapGrid.tiles[8][11],
        manager.gameState.mapGrid.tiles[7][9], manager.gameState.mapGrid.tiles[6][9],
        manager.gameState.mapGrid.tiles[6][10], manager.gameState.mapGrid.tiles[6][11], manager.gameState.mapGrid.tiles[6][12], manager.gameState.mapGrid.tiles[6][13],
        manager.gameState.mapGrid.tiles[7][13], manager.gameState.mapGrid.tiles[8][13], manager.gameState.mapGrid.tiles[9][13], manager.gameState.mapGrid.tiles[10][13],
        manager.gameState.mapGrid.tiles[10][12], manager.gameState.mapGrid.tiles[10][11], manager.gameState.mapGrid.tiles[10][10], manager.gameState.mapGrid.tiles[10][9], manager.gameState.mapGrid.tiles[10][8], manager.gameState.mapGrid.tiles[10][7],
        manager.gameState.mapGrid.tiles[9][7], manager.gameState.mapGrid.tiles[8][7], manager.gameState.mapGrid.tiles[7][7],
        manager.gameState.mapGrid.tiles[6][6], manager.gameState.mapGrid.tiles[5][7], manager.gameState.mapGrid.tiles[7][5]
    ];

    manager.gameState.baseGrid = [
        manager.gameState.mapGrid.tiles[8][9]
    ];
   
}