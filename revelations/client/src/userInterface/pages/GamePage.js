import React, { useContext, useEffect, useReducer } from "react";

// Engine imports
import GameState from "../../engine/components/GameState.js";
import RuntimeState from "../../engine/components/RuntimeState.js";
import Tile from "../../engine/components/Tile.js";
import GameManager from "../../engine/GameManager.js";
import testGame from "../../engine/GameTest.js";

// React component imports
import Game from "../../Game"

/**
 * @type {React.Context} Context containing the last passed version of the game state
 */
export const GameStateContext = React.createContext({});
function gameStateReducer(state, action){
  switch(action.type){
    case "updateGameState":
      return action.payload;
    default: throw new Error(`Action type (${action.type}) for GameState dispatch is not valid`);
  }
}

function GamePage() {

  // Game manager setup
  let gameManager = new GameManager();
  gameManager.updateCallback = () => dispatch({ type: "updateGameState", payload: { gameState: gameManager.gameState, runtimeState: gameManager.runtimeState }});

  useEffect(() => {
    console.log("GamePage rendered!");
    testGame();
  });

  /**
   * @type {[{gameState: GameState, runtimeState: RuntimeState}, (action, state)=>{gameState: GameState, runtimeState: RuntimeState}]}
   */
  const [state, dispatch] = useReducer(gameStateReducer, gameManager.getGameState());
  return (
    <GameStateContext.Provider value={[state, dispatch]}>
      <Game manager={gameManager}/>
    </GameStateContext.Provider>
  );
}

export default GamePage;