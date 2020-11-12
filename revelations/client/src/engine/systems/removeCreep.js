function removeCreep(manager, id){
    delete manager.gameState.creepDirectory[id];
    manager.gameState.playerLives--;
}

export default removeCreep;