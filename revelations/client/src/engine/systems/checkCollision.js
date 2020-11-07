import Collider from "../components/Collider.js";

/**
* Projects collider onto a normal vector by returning the interval containing the dot product of the axis with its vertices
* @param {Collider} collider The collider to project onto the axis
* @param {{x:number,y:number}} axis vector to project onto
* @returns {number[]}
*/
function projectOnto(collider, axis){
   const endPoints = [];
   for(const vertex of collider.vertices){
       const score = vertex.x * axis.x + vertex.y * axis.y;
       if(endPoints.length < 2){
           endPoints.splice(0,0,score, score);
       }
       else{
           if(score < endPoints[0]){
               endPoints[0] = score;
           }
           else if(score > endPoints[1]){
               endPoints[1] = score;
           }
       }
   }

   return endPoints;
}

/**
 * Iterates through all non-colinear axes of both colliders, and returns true if any of their projections are disjointed
 * @param {Collider} colliderA object to compare
 * @param {Collider} colliderB object to compare to
 * @returns {boolean}
 */
function collidersAreDisjoint(colliderA, colliderB){
    const axes = colliderA.axes.concat(colliderB.axes);
    const visited = [];

    // Project both colliders on the axis
    for(const axis of axes){
        // Skip axis colinear to previously computed axes
        if(visited.filter(vAxis => vAxis.x * axis.y - vAxis.y * axis.x === 0).length > 0){
            continue;
        }

        // Return true if projections are disjointed
        const [thisStart, thisEnd] = projectOnto(colliderA, axis);
        const [colliderStart, colliderEnd] = projectOnto(colliderB, axis);
        if(thisEnd < colliderStart || thisStart > colliderEnd){
            return true;
        }

        visited.push(axis);
    }

    return false;
}

/**
 * @param {{[key:number]: {collider: Collider}}} collectionA directory of objects with a collider property
 * @param {{[key:number]: {collider: Collider}}} collectionB directory of objects with a collider property
 * @returns {{[key:number]: number[]}}
 */
export default function checkCollision(collectionA, collectionB){
    // Helper callbacks for reduce
    const xLessThan = (a, b) => a.x <= b.x ? a.x : b.x;
    const yLessThan = (a, b) => a.y <= b.y ? a.y : b.y;
    const xGreaterThan = (a, b) => a.x >= b.x ? a.x : b.x;
    const yGreaterThan = (a, b) => a.y >= b.y ? a.y : b.y;
    
    // Get the bounding boxes
    const xBoundsA = Object.entries(collectionA).map(propArray => [propArray[0], propArray[1].collider.vertices.reduce(xLessThan), propArray[1].collider.vertices.reduce(xGreaterThan)]);
    const yBoundsA = Object.entries(collectionA).map(propArray => [propArray[0], propArray[1].collider.vertices.reduce(yLessThan), propArray[1].collider.vertices.reduce(yGreaterThan)]);
    const xBoundsB = Object.entries(collectionB).map(propArray => [propArray[0], propArray[1].collider.vertices.reduce(xLessThan), propArray[1].collider.vertices.reduce(xGreaterThan)]);
    const yBoundsB = Object.entries(collectionB).map(propArray => [propArray[0], propArray[1].collider.vertices.reduce(yLessThan), propArray[1].collider.vertices.reduce(yGreaterThan)]);

    // Check each collider pair and collect matches
    const matches = {};
    for(const idA of Object.keys(collectionA)){
        matches[idA] = [];
        for(const idB of Object.keys(collectionB)){
            // Get both bounding boxes
            const boxA = { xBox: xBoundsA.find(array => array[0] === idA), yBox: yBoundsA.find(array => array[0] === idA) }
            const boxB = { xBox: xBoundsB.find(array => array[0] === idB), yBox: yBoundsB.find(array => array[0] === idB) }

            // If bounding boxes overlap, then compare colliders
            if((boxA.xBox[2] < boxB.xBox[1] || boxA.xBox[1] > boxB.xBox[2]) 
              && (boxA.yBox[2] < boxB.yBox[1] || boxA.yBox[1] > boxB.yBox[2])){
                if(!collidersAreDisjoint(collectionA[idA], collectionB[idB])){
                    matches[idA].push(idB);
                }
            }
        }
    }

    return matches;
}
