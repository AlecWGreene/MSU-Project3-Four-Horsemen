export default function moveCreeps(manager){
    for(const id in manager.gameState.creepDirectory){
        const creep = manager.gameState.creepDirectory[id];
        console.log(creep.data.path);
        console.log(creep);
    }
}