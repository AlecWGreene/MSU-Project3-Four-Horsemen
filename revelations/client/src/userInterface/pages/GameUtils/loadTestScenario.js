export default function loadTestScenario(manager){
    /*
    manager.gameState.wallGrid = [
        manager.gameState.mapGrid.tiles[14][17], manager.gameState.mapGrid.tiles[14][18], manager.gameState.mapGrid.tiles[14][19]
        //manager.gameState.mapGrid.tiles[13][17], manager.gameState.mapGrid.tiles[12][17],
        //manager.gameState.mapGrid.tiles[12][18], manager.gameState.mapGrid.tiles[12][19], manager.gameState.mapGrid.tiles[12][20]
    ];
    */
   manager.gameState.wallGrid = manager.gameState.mapGrid.tiles.reduce((prev, current)=>{
    return prev.concat(current)
   },[]);
   console.log(manager.gameState.wallGrid);
   
}