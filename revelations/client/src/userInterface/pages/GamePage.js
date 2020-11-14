import React, { useContext, useEffect, useReducer } from "react";

// Engine imports
import GameState from "../../engine/components/GameState.js";
import RuntimeState from "../../engine/components/RuntimeState.js";
import Grid from "../../engine/entities/Grid.js";
import GameManager from "../../engine/GameManager.js";
import testGame from "../../engine/GameTest.js";

// React component imports
import Game from "../../Game"
import GameContainer from "../components/GameContainer/index.js";

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

  useEffect(()=>{
    gameManager.updateCallback = () => dispatch({ type: "updateGameState", payload: { gameState: gameManager.gameState, runtimeState: gameManager.runtimeState }});
    const grid = new Grid(20,20,100,100);
    const sourceArray = [grid.tiles[0][0], grid.tiles[0][1]];
    const target = grid.tiles[18][18];
    gameManager.init(grid, sourceArray, target);
  },[]);

  useEffect(() => {
    testGame();
  });

  /**
   * @type {[{gameState: GameState, runtimeState: RuntimeState}, (action, state)=>{gameState: GameState, runtimeState: RuntimeState}]}
   */
  const [state, dispatch] = useReducer(gameStateReducer, gameManager.getGameState());
  return (
    <GameStateContext.Provider value={[state, dispatch]}>
      <GameContainer>
        <Game />
      </GameContainer>
    </GameStateContext.Provider>
  );
}

export default GamePage;