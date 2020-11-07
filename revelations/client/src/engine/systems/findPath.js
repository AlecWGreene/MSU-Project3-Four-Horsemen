import Grid from "../entities/Grid.js";
import Tile from "../components/Tile.js";

function getGridDistance(current, start){
    return Math.abs(current.index.row - start.index.row) + Math.abs(current.index.col - start.index.col);
}

function getEuclideanDistance(current, target){
    return (current.position.x - target.position.x)**2 + (current.position.y - target.position.y)**2;
}

function retracePath(start, end, parents){
    const visited = [];
    let current = end;
    while(!current.isEqualTo(start)){
        visited.push(current);
        current = parents[current.index.row+","+current.index.col] || start;
    }
    visited.push(start);
    return visited.reverse();
}

function addToOpen(tile, open){
    for(let i = 0; i < open.length; i++){
        if(open[i].fScore > tile.fScore){
            open.splice(i, 0, tile);
            return;
        }
    }

    open.push(tile);
}

/** 
 * @param {Tile[]} path
 * @param {Tile} end
 * @param {Tile[]} unwalkable
*/
export function simplifyPath(path, end, unwalkable){

    // Form wall segments
    const intersections = unwalkable.filter((tile, index, array) => {
        const wallNeighbours = array.filter(nextTile => tile.neighbours.includes(nextTile));
        switch(wallNeighbours.length){
            case 0:
                return false;
            case 1: // Return penisulas
                return true;
            case 4:
                return false;
            case 2: // Return L-shaped intersections
                return (wallNeighbours[0].index.row === wallNeighbours[1].index.row || wallNeighbours[0].index.col === wallNeighbours[1].index.col) ? false : true;
            case 3: // Return T-shaped intersections
                return true;
        }
    }).map((tile, index, array) => [tile, array.filter(nextTile => tile.neighbours.includes(nextTile))]);

    // Collect segments as a pair of coordinates
    const gates = [];
    for(const inter of intersections){
        const tile = inter[0];

        // For each connected segment
        for(const n of inter[1]){
            const dir = { row: tile.index.row - n.index.row, col: tile.index.col - n.index.col };
            let segmentEnd = n;
            let candidate = unwalkable.find(t => t.row === segmentEnd.index.row + dir.row && t.col === segmentEnd.index.col + dir.col );
            while(candidate){
                segmentEnd = candidate;
                candidate = unwalkable.find(t => t.row === segmentEnd.index.row + dir.row && t.col === segmentEnd.index.col + dir.col );
            }

            gates.push([n, segmentEnd]);
        }
    }

    console.log(gates);

    // Simplify path segments
    // let current = path[0];
    // while(current.isEqualTo(end)){
    //     let index = path.findIndex(node => node.isEqualTo(current));
    //     let tracking = path[index];
    //     for(let i = index + 1; i < path.length; i++){
    //         // Skip if ray follows a row/column
    //         if(path[i].index.row === current.row || path[i].index.col === current.col){
    //             continue;
    //         }

            
    //     }
    // }
}

/** 
 * 
*/
export default function findPath(start, end, grid, unwalkable){
    // Setup open/closed sets and helper vars
    const open = [start];
    const closed = [];
    const parents = {
        root: {
            start
        }
    }

    while(open.length > 0){
        // Get open point with lowest fScore
        const current = open[0];

        // Return a succesful path
        if(current.isEqualTo(end)){
            return retracePath(start, end, parents);
        }

        // Close off point
        open.splice(open.findIndex(value => current.isEqualTo(value)),1);
        closed.push(current);

        // Open up available neighbours
        for(const newTile of current.getNeighbours()){
            const newCost = current.fScore + getGridDistance(current, newTile);

            // Skip unwalkable squares
            if(unwalkable.filter(square => square.isEqualTo(newTile)).length > 0){
                continue;
            }

            // If tile has no fScore
            if(open.filter(value => newTile.isEqualTo(value)).length === 0
            && closed.filter(value => newTile.isEqualTo(value)).length === 0){
                newTile.setScore(getGridDistance(newTile, current) * getEuclideanDistance(newTile, end));
                parents[newTile.index.row + "," + newTile.index.col] = current;
                addToOpen(newTile, open);
            }
            // If tile is open and newCost is less than the fScore
            else if(closed.filter(value => newTile.isEqualTo(value)).length === 0 && newCost < newTile.fScore){
                newTile.setScore(newCost);
                parents[newTile.index.row + "," + newTile.index.col] = current;
            }
        }
    }

    return undefined;
}