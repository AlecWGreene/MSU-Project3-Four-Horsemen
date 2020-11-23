/**
 * @namespace checkCapsuleCollision
 * @memberof module:Systems
 */

 /**
  * @function checkCapsuleCollision
  * @memberof module:Systems~checkCapsuleCollision
  * 
  * @description Check if an entity is within a certain radius of any entity within a specified directory
  */
function checkCapsuleCollision(collider, directory, radius, maxHits, filter){
    const position = collider.transform.position;
    const entries = Object.entries(directory);
    const matches = [];
    const filterFn = filter ? filter : ()=>true;
    let counter = 0;

    // Check against each directory entry
    for(const entry of entries){
        if(Math.hypot(position.x-entry[1].transform.position.x, position.y-entry[1].transform.position.y) <= radius){
            counter++;
            matches.push(entry);

            if(counter >= maxHits){
                break;
            }
        }
    }

    return matches.filter(filterFn);
}

export default checkCapsuleCollision;