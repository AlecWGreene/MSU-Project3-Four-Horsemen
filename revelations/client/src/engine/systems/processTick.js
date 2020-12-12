import GameEnums from "../GameEnums.js";
import GameManager from "../GameManager.js";
import controlTowers from "./controlTowers.js";
import moveCreeps from "./moveCreeps.js";
import moveProjectiles from "./moveProjectiles.js";
import spawnCreep from "./spawnCreep.js";

/**
 * @namespace processTick
 * @memberof module:Systems
 */

 /**
  * @function processTick
  * @memberof module:Systems.processTick
  * 
  * @description Organizes the system calls into a universal method which is called on a certain interval
  * 
  * @param {GameManager} manager GameManager instance to mutate
  * 
  * @fires module:Systems.moveCreeps.moveCreeps
  * @fires module:Systems.spawnCreep.spawnCreep
  * @fires module:GameManager.updateCallback
  * 
  * @returns {Void}
  */
function processTick(manager) {
    // Move projectiles
    moveProjectiles(manager);

    // Spawn wave
    let totalTime = 0;
    const waveData = GameEnums.WAVE_CONFIG[manager.gameState.waveIndex];
    checkTime: for(let i = 0; i < waveData.length; i++){
        totalTime += waveData[i].delay;

        // Check the anticipated time vs wave time
        if(Math.abs(manager.runtimeState.waveTime - totalTime) < 10){
            for(let sourceIndex = 0; sourceIndex < waveData[i].creeps.length; sourceIndex++){
                if(waveData[i].creeps[sourceIndex] !== undefined){
                    const newId = 10000 + ++manager.counters.creeps;
                    spawnCreep(manager, newId, waveData[i].creeps[sourceIndex], manager.gameState.sourceArray[sourceIndex], manager.gameState.pathDirectory[sourceIndex]);
                }
            }
            break checkTime;
        }
    }

    // Control towers
    controlTowers(manager);

    // Move creeps
    moveCreeps(manager)

    manager.runtimeState.waveTime += GameEnums.GAME_CONFIG.tickLength;
    requestAnimationFrame(manager.updateCallback);
}

export default processTick;