import Grid from "../../../engine/entities/Grid";

export default function setupGame(gameManager, config){
    const grid = new Grid(config.mapSize.rows, config.mapSize.cols, config.mapSize.height, config.mapSize.width);
    const sourceArray = config.sourceArray.map(arr => grid.tiles[arr[0]][arr[1]]);
    const target = grid.tiles[config.target[0]][config.target[1]];
    gameManager.init(grid, sourceArray, target);
}