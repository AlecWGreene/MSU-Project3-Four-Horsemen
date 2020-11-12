import React, { useContext, useEffect, useReducer } from "react";

// Engine imports
import GameState from "../../engine/components/GameState.js";
import RuntimeState from "../../engine/components/RuntimeState.js";
import GameManager from "../../engine/GameManager.js";
import testGame from "../../engine/GameTest.js";
import Grid from "../../engine/entities/Grid.js";

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
  console.log("Did this run?");
  let gameManager = new GameManager();
  useEffect(()=>{
    gameManager.updateCallback = () => dispatch({ type: "updateGameState", payload: gameManager.getGameState()});
    const grid = new Grid(15, 25, 975, 1635);
      const sourceArray = [grid.tiles[2][20], grid.tiles[13][20]];
      const target = grid.tiles[7][12];
      gameManager.init(grid, sourceArray, target);
      gameManager.gameState.wallGrid = [
        gameManager.gameState.mapGrid.tiles[10][14], gameManager.gameState.mapGrid.tiles[10][13], gameManager.gameState.mapGrid.tiles[10][12], gameManager.gameState.mapGrid.tiles[10][11], gameManager.gameState.mapGrid.tiles[10][9], gameManager.gameState.mapGrid.tiles[10][8], gameManager.gameState.mapGrid.tiles[10][7], gameManager.gameState.mapGrid.tiles[10][6], // Horizontal left, up of target
        gameManager.gameState.mapGrid.tiles[6][15], gameManager.gameState.mapGrid.tiles[7][15], gameManager.gameState.mapGrid.tiles[8][15], gameManager.gameState.mapGrid.tiles[9][15], gameManager.gameState.mapGrid.tiles[10][15], // Vertical up, right of target
        gameManager.gameState.mapGrid.tiles[5][11], gameManager.gameState.mapGrid.tiles[5][12], gameManager.gameState.mapGrid.tiles[5][13], gameManager.gameState.mapGrid.tiles[5][14], gameManager.gameState.mapGrid.tiles[5][15], // Horizontal bottom
        gameManager.gameState.mapGrid.tiles[7][10], gameManager.gameState.mapGrid.tiles[6][10], gameManager.gameState.mapGrid.tiles[5][10], // Vertical down, left of target
        gameManager.gameState.mapGrid.tiles[8][13], gameManager.gameState.mapGrid.tiles[8][12], gameManager.gameState.mapGrid.tiles[8][11], gameManager.gameState.mapGrid.tiles[8][10], // Above target
        gameManager.gameState.mapGrid.tiles[7][13] // Right of target
    ];
    setTimeout(() => {
      console.log("wave sending")
      gameManager.sendWave();
  }, 3000);
  }, []);

  useEffect(() => {
    console.log("GamePage rendered!");
    //testGame();
  });

  /**
   * @type {[{gameState: GameState, runtimeState: RuntimeState}, (action, state)=>{gameState: GameState, runtimeState: RuntimeState}]}
   */
  const [state, dispatch] = useReducer(gameStateReducer, gameManager.getGameState());
  return (
    <GameStateContext.Provider value={[state, dispatch]}>
<<<<<<< HEAD
      <Game />
=======
      <GameContainer>
        <Game />
      </GameContainer>
>>>>>>> main
    </GameStateContext.Provider>
  );
}

export default GamePage;