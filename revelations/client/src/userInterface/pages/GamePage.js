import React, { useEffect, useReducer, useLayoutEffect, useRef } from "react";

// Engine imports
import GameState from "../../engine/components/GameState.js";
import RuntimeState from "../../engine/components/RuntimeState.js";
import Grid from "../../engine/Grid.js";
import GameEnums from "../../engine/GameEnums.js";
import GameManager from "../../engine/GameManager.js";
import testGame from "../../engine/GameTest.js";

// React component imports
import Game from "../../game"
import GameContainer from "../components/GameContainer/index.js";
import setupGame from "./GameUtils/setupGame.js";
import WallLayer from "../../game/WallLayer";
import CreepLayer from "../../game/CreepLayer/creep.js";
import GameFrame from "../../game/GameFrame";
import Planet from "../../game/Planet";
import BaseLayer from "../../game/BaseLayer";
import TowerLayer from "../../game/TowerLayer";
import ProjectileLayer from "../../game/ProjectileLayer/index.js";

// Testing imports
import loadTestScenario from "./GameUtils/loadTestScenario.js"

function convertScreenPointToMapTile(point, frame, ratio, gameState){
  const cellsize = gameState.mapGrid.cellsize;
  // Return false if we are not inside of the gameFrame
  if((point.x < frame.bottomLeft.x || point.x > frame.bottomLeft.x + frame.width )  || (point.y < frame.bottomLeft.y || point.y > frame.bottomLeft.y + frame.height)){
    return false;
  }

  // Adjust position for framesize
  point.x = (point.x - frame.bottomLeft.x) / ratio;
  point.y = (point.y - frame.bottomLeft.y) / ratio;

  // Calculate the closest grid point to out mouse
  const row = GameEnums.GAME_CONFIG.mapSize.rows - Math.floor(point.y / cellsize);
  const col = Math.floor(point.x / cellsize);

  // Check if a grid point is close
  try{
    return gameState.mapGrid.tiles[row][col];
  }
  catch{
    return false;
  }
}

/**
 * @type {React.Context} Context containing the last passed version of the game state
 */
export const GameStateContext = React.createContext({});

function GamePage() {

  // Game manager setup
  let gameManager = new GameManager();
  const manager = useRef(gameManager);

  /**
   * @type {[{gameState: GameState, runtimeState: RuntimeState}, (action, state)=>{gameState: GameState, runtimeState: RuntimeState}]}
   */
  const [state, dispatch] = useReducer(gameStateReducer, gameManager);
  function gameStateReducer(state, action){
    let tile, success, s;
    switch(action.type){
      case "initialize":
        return action.payload;
      case "updateGameState":
        return {
          frameSize: state.frameSize,
          scaleRatio: state.scaleRatio,
          origin: state.origin,
          gameState: action.payload.gameState,
          runtimeState: action.payload.runtimeState,
          animationState: action.payload.animationState
        };
      case "updateFrameSize":
        return {
          frameSize: action.payload.frameSize,
          scaleRatio: action.payload.scaleRatio,
          origin: action.payload.origin,
          gameState: state.gameState,
          runtimeState: state.runtimeState,
          animationState: state.animationState
        };
      case "addWall":
        tile = convertScreenPointToMapTile(action.payload, state.frameSize, state.scaleRatio, state.gameState);
        if(tile === false) return state;
        success = manager.current.placeWall(tile);
        if(success === false) return state;
        
        s = manager.current.getGameState();
        manager.current.updateCallback();
        return {
          frameSize: state.frameSize,
          scaleRatio: state.scaleRatio,
          origin: state.origin,
          gameState: s.gameState,
          runtimeState: s.runtimeState,
          animationState: s.animationState
        };
      case "addTowerBase":
        tile = convertScreenPointToMapTile(action.payload, state.frameSize, state.scaleRatio, state.gameState);
        if(tile === false) return state;
        success = manager.current.placeBase(tile);
        if(success === false) return state;
        
        s = manager.current.getGameState();
        manager.current.updateCallback();
        return {
          frameSize: state.frameSize,
          scaleRatio: state.scaleRatio,
          origin: state.origin,
          gameState: s.gameState,
          runtimeState: s.runtimeState,
          animationState: s.animationState
        };
      case "addTowerBarrel":
        tile = convertScreenPointToMapTile(action.payload, state.frameSize, state.scaleRatio, state.gameState);
        if(tile === false) return state;
        success = manager.current.placeTower("test_tower1",tile);
        if(success === false) return state;

        s = manager.current.getGameState();
        manager.current.updateCallback();
        return {
          frameSize: state.frameSize,
          scaleRatio: state.scaleRatio,
          origin: state.origin,
          gameState: s.gameState,
          runtimeState: s.runtimeState,
          animationState: s.animationState
        };
      case "addTowerLaser":
        tile = convertScreenPointToMapTile(action.payload, state.frameSize, state.scaleRatio, state.gameState);
        if(tile === false) return state;
        success = manager.current.placeTower("test_tower2",tile);
        if(success === false) return state;

        s = manager.current.getGameState();
        manager.current.updateCallback();
        return {
          frameSize: state.frameSize,
          scaleRatio: state.scaleRatio,
          origin: state.origin,
          gameState: s.gameState,
          runtimeState: s.runtimeState,
          animationState: s.animationState
        };
      case "selectTower":
        console.log("Performed " + action.type);
        return state;
      default: throw new Error(`Action type (${action.type}) for GameState dispatch is not valid`);
    }
  }
  

  function initializeGameSize(){
      const divBox = document.getElementById("gameFrame").getClientRects()[0];
      const grid = gameManager.gameState.mapGrid;
      dispatch({
          type: "updateFrameSize",
          payload: {
              frameSize: {
                  height: divBox.height,
                  width: divBox.width,
                  bottomLeft: {
                    x: divBox.x,
                    y: divBox.y
                  }
              },
              scaleRatio: Math.min(divBox.height / (grid.cellsize * grid.tiles.length), divBox.width / (grid.cellsize * grid.tiles[0].length)),
              origin: {x: 0, y: 0}
          }
      });
  }

  // Called on initial render
  useLayoutEffect(()=>{
    gameManager.updateCallback = () => dispatch({ type: "updateGameState", payload: { gameState: gameManager.gameState, runtimeState: gameManager.runtimeState, animationState: gameManager.animationState }});
    setupGame(gameManager, GameEnums.GAME_CONFIG);
    loadTestScenario(gameManager);
    gameManager.updateCallback();

    const divBox = document.getElementById("gameFrame").getBoundingClientRect();
    const grid = gameManager.gameState.mapGrid; 
    dispatch({
      type: "initialize",
      payload: { 
        frameSize: {
          height: divBox.height,
          width: divBox.width,
          bottomLeft: {
            x: divBox.x,
            y: divBox.y
          }
        }, 
        scaleRatio: Math.min(divBox.height / (grid.cellsize * grid.tiles.length), divBox.width / (grid.cellsize * grid.tiles[0].length)),
        origin: {x: 0, y: 0},
        gameState: gameManager.getGameState().gameState, 
        runtimeState: gameManager.getGameState().runtimeState,
        animationState: {
          towers: []
        }
      }
    });

    initializeGameSize();
    setTimeout(() => gameManager.sendWave(), 3000)
    
  },[]);

  // Called on every render
  useEffect(() => {

  });

  return (
    <GameStateContext.Provider value={[state, dispatch]}>
      <GameContainer>
      <div style={{ height: "100%", width: "100%"}}>
            <GameFrame>
               <Planet />
                <WallLayer wallGrid={state.gameState ? state.gameState.wallGrid : []} />
                <BaseLayer baseGrid={state.gameState ? state.gameState.baseGrid : []}/>
                <CreepLayer creep={state.gameState.creepDirectory} />
                <ProjectileLayer directory={state?.gameState ? state.gameState.projectileDirectory : {}}/>
                <TowerLayer directory={state?.gameState ? state.gameState.towerDirectory : {}} />
            </GameFrame>
        </div>
      </GameContainer>
    </GameStateContext.Provider>
  );
}

export default GamePage;