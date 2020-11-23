function managerReplacer(key, value){
    const rts = value.runtimeState;
    let str = "{";
    str += "\"gameState\":" + gameStateReplacer(value.gameState) +",";
    str += `\"runtimeState\":{\"isPaused\":${rts.isPaused.toString()},\"isWaveRunning\":${rts.isWaveRunning.toString()},\"isGameOver\":${rts.isGameOver.toString()},\"waveTime\":${rts.waveTime},\"totalWaveTime\":${rts.totalWaveTime}}`
    str += "}"
    return str;
}

function gameStateReplacer(value){
    let obj = "{";
    for(const key of Object.keys(value)){
        switch(key){
            case "baseGrid": // Convert array of tiles to string
                let array = "[" 
                for(const element of value[key]){
                    array += replaceTile(element) + ",";
                }
                array = array.replace(/,$/,"") + "]"
                obj += "\"baseGrid\":"+array+","
                break;
            case "creepDirectory":
                const cdirectory = value[key];
                let cdir = "\"creepDirectory\":{";
                // For each creep
                for(const entry of Object.entries(cdirectory)){
                    // Add the key to the object
                    cdir += `\"${parseInt(entry[0])}\":{`
                    // Stringify the data
                    cdir += `\"data\":{\"id\":${parseInt(entry[0])},\"archtype\":\"${entry[1].data.archtype}\",\"path\":[${entry[1].data.path.map(tile => replaceTile(tile)).join(",")}],\"targetIndex\":${entry[1].data.targetIndex}},\"hitPoints\":${entry[1].data.hitPoints}`
                    // Stringify the transform
                    cdir += `\"transform\":{\"position\":{\"x\":${entry[1].transform.position.x},\"y\":${entry[1].transform.position.y}},\"rotation\":${entry[1].transform.rotation}}`
                    cdir += "},"
                }
                cdir = cdir.replace(/,$/,"") + "},"
                obj += cdir;
                break;
            case "playerLives":
                obj += `\"playerLives\":${value[key]},`;
                break;
            case "playerMoney":
                obj += `\"playerMoney\":${value[key]},`;
                break;
            case "projectileDirectory":
                const pdirectory = value[key];
                let pdir = "\"projectileDirectory\":{";
                // For each creep
                for(const entry of Object.entries(pdirectory)){
                    // Add the key to the object
                    pdir += `\"${parseInt(entry[0])}\":{`
                    // Stringify the data
                    pdir += `\"data\":{\"id\":${parseInt(entry[0])},\"archtype\":\"${entry[1].data.archtype}\",\"launcherId\":${entry[1].data.launcherId},\"targetsHit\":${entry[1].data.targetsHit},\"distanceTraveled\":${entry[1].data.distanceTraveled}},`
                    // Stringify the transform
                    pdir += `\"transform\":{\"position\":{\"x\":${entry[1].transform.position.x},\"y\":${entry[1].transform.position.y}},\"rotation\":${entry[1].transform.rotation}}`
                    pdir += "},"
                }
                pdir = pdir.replace(/,$/,"") + "},"
                obj += pdir;
                break;
            case "towerDirectory":
                const tdirectory = value[key];
                let tdir = "\"towerDirectory\":{";
                // For each creep
                for(const entry of Object.entries(tdirectory)){
                    // Add the key to the object
                    tdir += `\"${parseInt(entry[0])}\":{`
                    // Stringify the data
                    tdir += `\"data\":{\"id\":${parseInt(entry[0])},\"archtype\":\"${entry[1].data.archtype}\",\"kills\":${entry[1].data.kills},\"priority\":\"${entry[1].data.priority}\",\"target\":${entry[1].data.target?.data.id || `\"undefined\"`},\"cooldown\":${entry[1].data.cooldown}},`
                    // Stringify the transform
                    tdir += `\"transform\":{\"position\":{\"x\":${entry[1].transform.position.x},\"y\":${entry[1].transform.position.y}},\"rotation\":${entry[1].transform.rotation}}`
                    tdir += "},"
                }
                tdir = tdir.replace(/,$/,"") + "},"
                obj += tdir;
                break;
            case "towerGrid":
                let tarray = "[" 
                for(const element of value[key]){
                    tarray += replaceTile(element) + ",";
                }
                tarray = tarray.replace(/,$/,"") + "]"
                obj += "\"towerGrid\":"+tarray+","
                break;
            case "wallGrid":
                let warray = "[" 
                for(const element of value[key]){
                    warray += replaceTile(element) + ",";
                }
                warray = warray.replace(/,$/,"") + "]"
                obj += "\"wallGrid\":"+warray+","
                break;
            case "waveIndex":
                obj += `\"waveIndex\":${value[key]},`
                break;
            default: // Leave out any other keys
        }
    }
    return obj.replace(/,$/,"") + "}";
}

function runtimeStateReplacer(key, value){
    return value;
}


/**
 * @function
 * Stringifies single data pieces such as numbers, strings, tiles, etc
 * @example
 * new Tile(x,y,r,c) => { x: x, y: y, row: r, col:c }
 */
function replaceTile(value){
    return `\"Tile(${value.position.x},${value.position.y},${value.index.row},${value.index.col})\"`;
}

export default function convertGameToJSON(manager){
    try{
        return JSON.stringify(manager, managerReplacer, "\t");
    }
    catch(error){
        return error;
    }
}