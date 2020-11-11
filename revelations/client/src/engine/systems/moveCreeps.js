import { getEuclideanDistance } from "./findPaths.js";
import removeCreep from "./removeCreep.js";

function rotateCreep(creep, angle){
    creep.transform.rotation += angle;
    const {x: x0, y: y0} = creep.collider.center;
    for(let i = 0; i < creep.collider.vertices.length; i++){
        const {x: x, y: y} = creep.collider.vertices[i];
        creep.collider.vertices[i] = {
            x: x0 + (x - x0) * Math.cos(angle) - (y - y0) * Math.sin(angle),
            y: y0 + (x - x0) * Math.sin(angle) + (y - y0) * Math.cos(angle)
        }
        creep.collider.setAxes();
    }
}

export default function moveCreeps(manager){
    for(const id in manager.gameState.creepDirectory){
        const creep = manager.gameState.creepDirectory[id];
        let distRemaining = creep.stats.speed;
        let distToTarget = getEuclideanDistance(creep.transform,creep.data.target);
        const dir = {
            x: creep.data.target.position.x - creep.transform.position.x,
            y: creep.data.target.position.y - creep.transform.position.y
        }

        // If target is farther than remaining speed, move towards target
        if(distRemaining < distToTarget){
            const { x: x0, y: y0 } = creep.transform.position;
            creep.transform.position = {
                x: x0 + dir.x * distRemaining / distToTarget,
                y: y0 + dir.y * distRemaining / distToTarget
            }
        }
        // If creep needs to move to a different target
        else{

            // If creep is not at target
            if(distToTarget > 0){
                creep.transform.position = creep.data.target.position;
                distRemaining -= distToTarget;
            }

            // Return out if creep is at the target
            if(creep.data.targetIndex === creep.data.path.length - 1){  
                removeCreep(manager, id);
                return;
            }

            // Update creep target
            creep.data.target = creep.data.path[++creep.data.targetIndex];
            distToTarget = getEuclideanDistance(creep.transform,creep.data.target);

            // If movement points are still left
            if(distRemaining > 0){
                // If creep not pointing to target, rotate towards target
                let targetAngle = creep.transform.rotation - Math.atan2(dir.x, dir.y);
                if(targetAngle !== 0){
                    let angleToRotate = Math.sign(targetAngle) * Math.min(Math.abs(targetAngle), Math.abs(creep.stats.turnSpeed)); 
                    targetAngle -= angleToRotate;
                    rotateCreep(creep, angleToRotate);
                    distRemaining -= Math.abs(angleToRotate) * (Math.PI / 180) * creep.collider.circumference;
                }
                
                // If creep is pointing to target, move towards new target
                if(targetAngle === 0 && distRemaining > 0){
                    // Prevent creep from overshooting target
                    if(distRemaining > distToTarget){
                        distRemaining = distToTarget;
                    }

                    const { x: x, y: y } = creep.transform.position;
                    const dir2 = {
                        x: creep.data.target.position.x - creep.transform.position.x,
                        y: creep.data.target.position.y - creep.transform.position.y
                    }
                    creep.transform.position = {
                        x: x + dir2.x * distRemaining / distToTarget,
                        y: y + dir2.y * distRemaining / distToTarget
                    }
                }
            }

        }
    }
}