import GameManager from "../GameManager.js";
import checkCapsuleCollision from "./checkCapsuleCollision.js";
import registerHit from "./registerHit.js";

/**
 * @namespace moveProjectile
 * @memberof module:Systems
 */

 /**
  * @function moveProjectile
  * @memberof module:Systems~moveProjectile
  * 
  * @description Moves the projectiles and checks for collision
  * 
  * @param {GameManager} manager GameManager instance
  * 
  * @returns {Void}
  */
function moveProjectiles(manager){
    const projectileDirectory = manager.gameState.projectileDirectory;
    const creepDirectory = manager.gameState.creepDirectory;
    const cellsize = manager.gameState.mapGrid.cellsize;

    // Move the projectiles
    for(const id of Object.keys(projectileDirectory)){
        const projectile = projectileDirectory[id];
        
        // Move the projectile
        const pos = projectile.transform.position;
        const rotation = projectile.transform.rotation;
        const speed = projectile.stats.speed;
        projectile.transform.position = {
            x: pos.x + speed * Math.cos(rotation),
            y: pos.y + speed * Math.sin(rotation)
        }
        // projectile.collider.center = {
        //     x: projectile.collider.center.x + speed * Math.cos(rotation),
        //     y: projectile.collider.center.y + speed * Math.sin(rotation)
        // }
        projectile.data.distanceTraveled += speed;

        // Check if the projectile is colliding with anything
        const hits = checkCapsuleCollision(projectile, creepDirectory, 0.5 * cellsize);
        if(hits.length > 0){
            //registerHit(projectile, creepDirectory[parseInt(hits[0][0])], manager);
            delete manager.gameState.projectileDirectory[parseInt(id)];
            delete manager.gameState.creepDirectory[parseInt(hits[0][0])];
        }

        // Destroy the projectile if it has passed its max distance
        if(projectile.data.distanceTraveled >= projectile.stats.maxDistance){
            delete manager.gameState.projectileDirectory[id];
        }
    }

    
}

export default moveProjectiles;