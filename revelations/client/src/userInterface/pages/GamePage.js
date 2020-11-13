import React, { useContext, useEffect, useReducer, useLayoutEffect } from "react";

// Engine imports
import GameState from "../../engine/components/GameState.js";
import RuntimeState from "../../engine/components/RuntimeState.js";
import Grid from "../../engine/entities/Grid.js";
import GameEnums from "../../engine/GameEnums.js";
import GameManager from "../../engine/GameManager.js";
import testGame from "../../engine/GameTest.js";

// React component imports
import Game from "../../game"
import GameContainer from "../components/GameContainer/index.js";
import setupGame from "./GameUtils/setupGame.js";

// Testing imports
import loadTestScenario from "./GameUtils/loadTestScenario.js"

/**
 * @type {React.Context} Context containing the last passed version of the game state
 */
export const GameStateContext = React.createContext({});
function gameStateReducer(state, action){
  switch(action.type){
    case "initialize":
      return action.payload;
    case "updateGameState":
      return {
        frameSize: state.frameSize,
        scaleRatio: state.scaleRatio,
        origin: state.origin,
        gameState: action.payload.gameState,
        runtimeState: action.payload.runtimeState
      };
    case "updateFrameSize":
      return {
        frameSize: action.payload.frameSize,
        scaleRatio: action.payload.scaleRatio,
        origin: action.payload.origin,
        gameState: state.gameState,
        runtimeState: state.runtimeState
      };
    default: throw new Error(`Action type (${action.type}) for GameState dispatch is not valid`);
  }
}


function GamePage() {

  // Game manager setup
  let gameManager = new GameManager();

  /**
   * @type {[{gameState: GameState, runtimeState: RuntimeState}, (action, state)=>{gameState: GameState, runtimeState: RuntimeState}]}
   */
  const [state, dispatch] = useReducer(gameStateReducer, gameManager);

  function initializeGameSize(){
    console.log("layout renderedx");
      const divBox = document.getElementById("gameFrame").getClientRects()[0];
      const grid = gameManager.gameState.mapGrid;
      dispatch({
          type: "updateFrameSize",
          payload: {
              frameSize: {
                  height: divBox.height,
                  width: divBox.width
              },
              scaleRatio: Math.min(divBox.height / (grid.cellsize * grid.tiles.length), divBox.width / (grid.cellsize * grid.tiles[0].length)),
              origin: {x: 0, y: 0}
          }
      });
      console.log(state);
      console.log("that was state")
}

  // Called on initial render
  useLayoutEffect(()=>{
    gameManager.updateCallback = () => dispatch({ type: "updateGameState", payload: { gameState: gameManager.gameState, runtimeState: gameManager.runtimeState }});
    setupGame(gameManager, GameEnums.GAME_CONFIG);
    loadTestScenario(gameManager);
    gameManager.updateCallback();
    console.log("initial setup"); console.log(divBox);  
    const divBox = document.getElementById("gameFrame").getBoundingClientRect();
    const grid = gameManager.gameState.mapGrid;
    dispatch({
      type: "initialize",
      payload: { 
        frameSize: {
          height: divBox.height,
          width: divBox.width
        }, 
        scaleRatio: Math.min(divBox.height / (grid.cellsize * grid.tiles.length), divBox.width / (grid.cellsize * grid.tiles[0].length)),
        origin: {x: 0, y: 0},
        gameState: gameManager.getGameState().gameState, 
        runtimeState: gameManager.getGameState().runtimeState
      }
    });
    console.log(state);
    initializeGameSize();
    setTimeout(gameManager.updateCallback, 5000);
  },[]);

  // Called on every render
  useEffect(() => {

  });

  return (
    <GameStateContext.Provider value={[state, dispatch]}>
      <GameContainer>
        <Game />
      </GameContainer>
    </GameStateContext.Provider>
  );
}

export default GamePage;