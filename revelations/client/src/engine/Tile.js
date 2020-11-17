/**
 * @typedef Vector
 * @type {Object}
 * @property {number} x x coordinate
 * @property {number} y y coordinate
 */

 /**
  * @typedef Index
  * @type {Object}
  * @property {number} row the parent array index of the tile
  * @property {number} col the secondary array index of the tile
  */

/**
 * @class 
 * 
 * @memberof module:Grid
 * 
 * @property {Vector} position world space location of the tile
 * @property {Index} index position of the Tile in the grid 
 */
class Tile {
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

    /**
     * @method
     * 
     * @description
     * Register a tile as a neighbour
     * 
     * @param {Tile} tile 
     * 
     * @returns {void}
     */
    addNeighbour(tile){
        this.neighbours.push(tile);
    }

    /**
     * @method
     * 
     * @description
     * Returns Tiles in the parent grid which are directly adjacent to it 
     * 
     * @returns {Array.<Tile>}
     */
    getNeighbours(){
        return this.neighbours;
    }

    /**
     * @method
     * 
     * @description
     * Compares the positions of two tiles
     * 
     * @returns {Boolean}
     */
    isEqualTo(tile){
        if(tile === undefined){
            return false;
        }
        return this.position.x === tile.position.x && this.position.y === tile.position.y; 
    }

    /**
     * @method
     * 
     * @description
     * Auxillary function for pathfinding and other heuristic methods involving tiles, assigns the value to this.fScore. 
     * 
     * @returns {void}
     */
    setScore(value){
        this.fScore = value;
    }
}

export default Tile;