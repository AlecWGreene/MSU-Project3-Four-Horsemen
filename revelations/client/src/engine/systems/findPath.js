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