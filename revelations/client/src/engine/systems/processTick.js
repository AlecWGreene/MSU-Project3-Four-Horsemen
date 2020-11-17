import GameEnums from "../GameEnums.js";
import moveCreeps from "./moveCreeps.js";
import spawnCreep from "./spawnCreep.js";

export default function processTick(manager) {
    // Move creeps
    moveCreeps(manager)

    // Spawn wave
    let totalTime = 0;
    const waveData = GameEnums.WAVE_CONFIG[manager.gameState.waveIndex];
    checkTime: for(let i = 0; i < waveData.length; i++){
        totalTime += waveData[i].delay;

        // Check the anticipated time vs wave time
        if(manager.runtimeState.waveTime === totalTime){
            for(let sourceIndex = 0; sourceIndex < waveData[i].creeps.length; sourceIndex++){
                if(waveData[i].creeps[sourceIndex] !== undefined){
                    const newId = 10000 + Object.keys(manager.gameState.creepDirectory).length;
                    spawnCreep(manager, newId, waveData[i].creeps[sourceIndex], manager.gameState.sourceArray[sourceIndex], manager.gameState.pathDirectory[sourceIndex]);
                }
            }
            break checkTime;
        }
    }

    manager.runtimeState.waveTime += GameEnums.GAME_CONFIG.tickLength;
    requestAnimationFrame(manager.updateCallback);
    const x = 0;
}