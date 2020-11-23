import GameManager from "../GameManager.js";
import checkCapsuleCollision from "./checkCapsuleCollision.js";
import registerHit from "./registerHit.js";
import removeCreep from "./removeCreep.js";

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
            const fatalHit = registerHit(projectile, hits[0][1]);

            // Projectile destroys creep
            if(fatalHit){
                manager.gameState.playerMoney += creepDirectory[parseInt(hits[0][0])].stats.reward;
                removeCreep(manager, parseInt(hits[0][0]));
            }

            // Projecitle has hit its last target
            if(projectile.data.targetsHit >= projectile.stats.maxTargets) delete manager.gameState.projectileDirectory[id];
        }

        // Destroy the projectile if it has passed its max distance
        if(projectile.data.distanceTraveled >= projectile.stats.maxDistance){
            delete manager.gameState.projectileDirectory[id];
        }
    }

    
}

export default moveProjectiles;