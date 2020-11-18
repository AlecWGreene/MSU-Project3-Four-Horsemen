import GameManager from "../GameManager";

/**
 * @namespace removeCreep
 * @memberof module:Systems
 */

/**
 * @function removeCreep
 * @memberof module:Systems.removeCreep
 * 
 * @description Destroys a creep entitiy from a manager
 * 
 * @param {GameManager} manager GameManager instance to mutate
 * @param {number} id Id of the creep to destroy
 * 
 * @returns {Void}
 */
function removeCreep(manager, id){
    delete manager.gameState.creepDirectory[id];
    manager.gameState.playerLives--;
}

export default removeCreep;