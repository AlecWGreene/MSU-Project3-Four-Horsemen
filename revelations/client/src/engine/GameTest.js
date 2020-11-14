import Grid from "./entities/Grid.js";
import GameManager from "./GameManager.js";
import GameEnums from "./GameEnums.js";
import CreepEntity from "./entities/CreepEntity.js";
import Transform from "./components/Transform.js";

function setupWalls(manager, waveIndex){
    switch(waveIndex){
        case 0:
            manager.gameState.wallGrid = [
                manager.gameState.mapGrid.tiles[10][14], manager.gameState.mapGrid.tiles[10][13], manager.gameState.mapGrid.tiles[10][12], manager.gameState.mapGrid.tiles[10][11], manager.gameState.mapGrid.tiles[10][9], manager.gameState.mapGrid.tiles[10][8], manager.gameState.mapGrid.tiles[10][7], manager.gameState.mapGrid.tiles[10][6], // Horizontal left, up of target
                manager.gameState.mapGrid.tiles[6][15], manager.gameState.mapGrid.tiles[7][15], manager.gameState.mapGrid.tiles[8][15], manager.gameState.mapGrid.tiles[9][15], manager.gameState.mapGrid.tiles[10][15], // Vertical up, right of target
                manager.gameState.mapGrid.tiles[5][11], manager.gameState.mapGrid.tiles[5][12], manager.gameState.mapGrid.tiles[5][13], manager.gameState.mapGrid.tiles[5][14], manager.gameState.mapGrid.tiles[5][15], // Horizontal bottom
                manager.gameState.mapGrid.tiles[7][10], manager.gameState.mapGrid.tiles[6][10], manager.gameState.mapGrid.tiles[5][10], // Vertical down, left of target
                manager.gameState.mapGrid.tiles[8][13], manager.gameState.mapGrid.tiles[8][12], manager.gameState.mapGrid.tiles[8][11], manager.gameState.mapGrid.tiles[8][10], // Above target
                manager.gameState.mapGrid.tiles[7][13] // Right of target
            ];
            break;
        case 1:
            break;
    }
}

function renderGame(manager){
    let returnString = "+"+ "-".repeat(25) + "+\n";
    let creepTiles = Object.values(manager.gameState.creepDirectory).map(creepEntity => {return manager.gameState.mapGrid.tiles[Math.floor(creepEntity.transform.position.y / 64)][Math.floor(creepEntity.transform.position.x / 64)]});
    for(let i = 0; i < manager.gameState.mapGrid.tiles.length; i++){
        const row = "|";
        for(let j = 0; j < manager.gameState.mapGrid.tiles[0].length; j++){
            const currentTile = manager.gameState.mapGrid.tiles[i][j];
            if(manager.gameState.wallGrid.filter(t => t.isEqualTo(currentTile)).length > 0){
                row += "x";
            }
            else if(currentTile.isEqualTo(manager.gameState.target)){
                row += "T";
            }
            else if(creepTiles.filter(t => t.isEqualTo(currentTile)).length > 0){
                row += "c"
            }
            else if(manager.gameState.sourceArray.filter(t => t.isEqualTo(currentTile)).length > 0){
                row += "S";
            }
            else{
                row += " ";
            }
        }
        returnString += row+"|\n";
    }
    returnString += "+"+ "-".repeat(25) + "+";
   
}

export default function testGame(){
    const manager = new GameManager();
    const grid = new Grid(15, 25, 975, 1635);
    const sourceArray = [grid.tiles[2][20], grid.tiles[13][20]];
    const target = grid.tiles[7][12];
    manager.init(grid, sourceArray, target);
    manager.updateCallback = () => renderGame(manager);
    setTimeout(() => {
        setupWalls(manager, 0);
        manager.updateCallback();

        manager.sendWave();
    }, 2000);

}