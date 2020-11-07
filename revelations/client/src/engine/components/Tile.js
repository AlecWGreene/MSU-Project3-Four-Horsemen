export default class Tile {
    constructor(x, y, row, col){
        this.position = {
            x: x,
            y: y
        }

        this.index = {
            row: row,
            col: col
        }

        this.neighbours = [];
        this.fScore = -1;
    }

    addNeighbour(tile){
        this.neighbours.push(tile);
    }

    getNeighbours(){
        return this.neighbours;
    }

    isEqualTo(tile){
        if(tile === undefined){
            return false;
        }
        return this.position.x === tile.position.x && this.position.y === tile.position.y; 
    }

    setScore(value){
        this.fScore = value;
    }
}