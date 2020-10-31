import Tile from  "./Tile.js";

export default class Grid{
    constructor(numRows, numCols, height, width){
        // Calculate cellsize
        const cellsize = Math.min(height/numRows, width/numCols);

        // Initialize the tiles array
        this.tiles = [];
        for(let i = 0; i < numRows; i++){
            this.tiles.push([]);
            for(let j = 0; j < numCols; j++){
                this.tiles[i].push(new Tile(j * cellsize, i * cellsize, i, j));
            }
        }

        // Setup tile neighbours
        for(const gridRow of this.tiles){
            for(const tile of gridRow){
                const row = tile.index.row;
                const col = tile.index.col;

                // Check compass directions
                const indices = [
                    { row: row, col: col + 1},
                    { row: row + 1, col: col},
                    { row: row - 1, col: col},
                    { row: row, col: col - 1}
                ]

                for(const index of indices){
                    if(this.tiles[index.row] && this.tiles[index.row][index.col]){
                        tile.addNeighbour(this.tiles[index.row][index.col]);
                    }
                }
            }
        }
    }
}