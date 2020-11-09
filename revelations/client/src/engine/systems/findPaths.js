function getClosestPointToLine(lineStart, lineEnd, point) {
    // Vector representing the connection from the start of the line to the point
    const startToPoint = {
        x: lineStart.position.x - point.position.x,
        y: lineStart.position.y - point.position.y
    }
    // Vector representing the slope of the line
    const lineVector = {
        x: lineEnd.position.x - lineStart.position.x,
        y: lineEnd.position.y - lineStart.position.y
    }

    // Calculate distance to line
    const dotProduct = startToPoint.x * lineVector.x + startToPoint.y * lineVector.y;
    const lineLength = lineVector.x ** 2 + lineVector.y ** 2;
    
    // Find closest point on the line segment
    let parameter = Math.abs(dotProduct) / (lineLength);
    if(parameter < 0){
        parameter = 0;
    }
    else if(parameter > 1){
        parameter = 1;
    }
    const closest = {
        x: lineStart.position.x + parameter * lineVector.x,
        y: lineStart.position.y + parameter * lineVector.y
    }

    // Find smallest coordinate difference between point and intersection
    return closest;
}

function pointInBox(point, center, cellWidth){
    // Calculate box vertices
    const padding = cellWidth * Math.sqrt(2) / 2;
    const xBounds = [center.position.x - padding, center.position.x + padding];
    const yBounds = [center.position.y - padding, center.position.y + padding];

    // Check if point fits in the bounds
    if( (xBounds[0] <= point.x && point.x <= xBounds[1]) && (yBounds[0] <= point.y && point.y <= yBounds[1]) ){
        return true;
    }
    else{
        return false;
    }
}

function getDijkstraMapValue(current, source, target, unwalkable, grid, data){
    return data.dijkstraMap[current.index.row+","+current.index.col]
}

function getEuclideanDistance(current, source, target, unwalkable, grid, data){
    return Math.sqrt((current.position.x - source.position.x)**2+(current.position.y - source.position.y)**2);
}

function straightenZigZags(path, unwalkable, cellWidth){
    const newPath = [];
    let index = 0;
    while(index < path.length - 1){
        const pivot = path[index];
        let targetIndex = index + 1;

        // Use raycasts to verify that path won't collide with walls
        raycast: while(targetIndex < path.length){
            const target = path[targetIndex];
            for(let i = 0; i < unwalkable.length; i++){
                const wall = unwalkable[i];
                const closest = getClosestPointToLine(pivot, target, wall);
                
                // If raycast hits, then return last visited tile as next pivot
                if(pointInBox(closest, wall, cellWidth)){
                    newPath.push(path[targetIndex - 1]);
                    index = targetIndex - 1;
                    break raycast;
                }

                
            }

            // If next tile is the end of the path
            if(targetIndex === path.length - 1){
                newPath.push(path[targetIndex]);
                return newPath;
            }
            targetIndex++;
        }
    }

    return newPath;
}

const computeDijkstraMap = (data, source, target, unwalkable, grid) => {
    const frontier = [];
    frontier.push(target);
    const distance = {};
    distance[target.index.row+","+target.index.col] = 0;

    // Use breadth search to link each tile to a parent
    while(frontier.length > 0){
        let current = frontier.splice(0,1)[0];
        for(const tile of current.getNeighbours()){
            if(unwalkable.filter(t => t.isEqualTo(tile)).length === 0 && !Object.keys(distance).includes(tile.index.row+","+tile.index.col)){
                frontier.push(tile);
                distance[tile.index.row+","+tile.index.col] = distance[current.index.row+","+current.index.col]+grid.cellsize;
            }
        }
    }

    data.dijkstraMap = distance;
}

function runPathfind(source, target, unwalkable, grid, sourceHeuristic, targetHeuristic, dataLoaders, data){
    // Setup helper variables
    const pathData = data ? data : {};
    for(const loader of Object.entries(dataLoaders)){
        if(!pathData[loader[0]]){
            loader[1](pathData, source, target, unwalkable, grid);
        }
    }
    const open = [];
    const closed = new WeakSet();
    const parents = {}
    const tileToString = tile => tile.index.row+","+tile.index.col;
    const setHasTile = (set, tile) => set.filter(t => t.isEqualTo(tile)).length > 0; 
    parents[tileToString(source)] = undefined;
    open.push(source);

    // Helper method to retrace a tile's parents
    const retracePath = (tile) => {
        const path = [];
        let current = tile;
        while(current != undefined){
            path.push(current);
            current = parents[tileToString(current)];
        }

        return path;
    }

    // While there are still open tiles
    while(open.length  > 0){
        // Get the open tile with the lowest fScore
        let current = open[0];
        let currentIndex = 0;
        if(open.length > 1){
            for(let i = 1; i < open.length; i++){
                if(open[i].fScore < current.fScore){
                    current = open[i];
                    currentIndex = i;
                }
            }
        }

        // Return out if target is reached
        if(current.isEqualTo(target)){
            return retracePath(current);
        }

        // Close off current
        closed.add(current);
        open.splice(currentIndex, 1);

        // Open walkable neighbours
        for(const tile of current.getNeighbours()){
            // Skip unwalkable tiles
            if(setHasTile(unwalkable, tile)){
                continue;
            }

            // Update tile fScore
            const newScore = tile.fScore + sourceHeuristic(current, source, tile, unwalkable, grid, pathData);
            if(!setHasTile(open, tile) && !closed.has(tile)){
                tile.setScore(sourceHeuristic(current, source, target, unwalkable, grid, pathData) + targetHeuristic(current, source, target, unwalkable, grid, pathData));
                open.push(tile);
                parents[tileToString(tile)] = current;
            }
            else if(setHasTile(open, tile) && newScore < tile.fScore){ 
                tile.setScore(newScore);
                parents[tileToString(tile)] = current;
            }
        }
    }

    // Return undefined if no path is found
    return undefined;
}

function findPaths(sourceArray, target, unwalkable, grid, sourceHeuristic, targetHeuristic, dataLoaders){
    // Set default targetHeuristic and loaders
    let targetH, loaders;
    if(!targetHeuristic && !dataLoaders){
        targetH = getDijkstraMapValue;
        loaders = { dijkstraMap: computeDijkstraMap };
    }
    else{
        targetH = targetHeuristic;
        loaders = dataLoaders;
    }

    // Call runPathfind
    const paths = [];
    for(const source of sourceArray){
        paths.push(straightenZigZags(runPathfind(target,source, unwalkable, grid, sourceHeuristic, targetH, loaders), unwalkable, grid.cellsize));
    }

    return paths;
};

// Export the important upper level functions
export default findPaths;
export {
    runPathfind,
    computeDijkstraMap,
    getDijkstraMapValue,
    straightenZigZags,
    getEuclideanDistance
};