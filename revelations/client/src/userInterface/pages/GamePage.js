import React, { useReducer, useLayoutEffect, useRef, useEffect, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
import VFXLayer from "../../game/VFXLayer";
import { useAuth } from "../components/UserAuth";
import { useSfx } from "../components/SoundSuite/index";
import GameOverModal from "../components/GameOverModal";
// Testing imports
import loadTestScenario from "./GameUtils/loadTestScenario.js";
import useIndexedDB from "../../utils/hooks/useIndexedDB.js";
// import Credits from "../components/Credits/index"
/**
 * @type {React.Context} Context containing the last passed version of the game state
 */
export const GameStateContext = React.createContext({});
/**
 * @function convertScreenPointToMapTile
 */
export function convertScreenPointToMapTile(point, frame, ratio, gameState){
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
  const indices = [
    { row: row, col: col},
    { row: row + 1, col: col + 1},
    { row: row + 1, col: col},
    { row: row, col: col + 1}
  ];
  let lowestDistance, lowestIndex;
  for(const index of indices){
    try{
      const p = gameState.mapGrid.tiles[index.row][index.col];
      const dist = Math.hypot(p.position.x - point.x, p.position.y - point.y);
      if(!lowestDistance || dist  < lowestDistance){
        lowestIndex = index;
        lowestDistance = dist;
      }
    }
    catch{
      continue;
    }
  }
  
  return lowestIndex ? gameState.mapGrid.tiles[lowestIndex.row][lowestIndex.col] : false;
}
function GamePage() {
  const auth = useAuth();
  const sfx = useSfx();
    
  const { saveGame } = useIndexedDB();

  // Game manager setup
  let gameManager = new GameManager();
  const manager = useRef(gameManager);

  // Dispatches window size to gameStateReducer
  const initializeGameSize = () => {
      const divBox = document.getElementById("gameFrame").getClientRects()[0];
      const grid = gameManager.gameState.mapGrid;
      dispatch({
          type: "updateFrameSize",
          manager: manager.current,
          payload: {
              frameSize: {
                  height: divBox.height,
                  width: divBox.width,
                  rect: divBox,
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

  // Reducer for the GameStateContext value
  const gameStateReducer = (state, action) => {
    switch(action.type){
      case "initialize":
        return action.payload;
      case "updateGameState":
        return {
          ...state,
          manager: manager.current,
          gameState: action.payload.gameState,
          runtimeState: action.payload.runtimeState,
          animationState: action.payload.animationState,
        };
      case "updateFrameSize":
        return {
          ...state,
          manager: manager.current,
          frameSize: action.payload.frameSize,
          scaleRatio: action.payload.scaleRatio,
          origin: action.payload.origin,
        };
      case "addWall":
      case "addBase":
      case "addTowerBarrel":
      case "addTowerLaser":
          return {
            ...state,
            gameState: manager.current.gameState,
          };
      case "towerClick":
        return {
          ...state,
          uiState: {
            sidebarView: action.payload.archtype,
            selection: action.payload.id
          }
        }
      default: throw new Error(`Action type (${action.type}) for GameState dispatch is not valid`);
    }
  }
  /**
   * @type {[{gameState: GameState, runtimeState: RuntimeState}, (action, state)=>{gameState: GameState, runtimeState: RuntimeState}]}
   */
  const [state, dispatch] = useReducer(gameStateReducer, gameManager);

  useEffect(() => {
    if(!state.runtimeState.isWaveRunning) {
      sfx.ambientSound('Sound_background_0');
    };
  }, [state.runtimeState.isWaveRunning])

  useEffect(() => {
    console.log("State changed");
  }, [state.runtimeState.isGameOver]);

  // Called on initial render
  useLayoutEffect(()=>{
    // Initialize the GameManager instance
    gameManager.updateCallback = () => { 
      const data = manager.current.getGameState();
      dispatch({ type: "updateGameState", payload: { gameState: data.gameState, runtimeState: data.runtimeState, animationState: data.animationState }})
    };
    gameManager.endWaveCallback = () => {
      saveGame(gameManager);
    };
    setupGame(gameManager, GameEnums.GAME_CONFIG);

    const userState = auth.user.data?.gameState?.replace(/^\"|\"$|\\/g,"");
    if(userState){
      const saveData = JSON.parse(userState); 
      gameManager.loadSave(saveData);
    }

    // Setup the frame size
    const divBox = document.getElementById("gameFrame").getBoundingClientRect();
    const grid = gameManager.gameState.mapGrid; 
    dispatch({
      type: "initialize",
      payload: { 
        manager: manager,
        uiState: {
          sidebarView: "Standard",
          selection: undefined
        },
        frameSize: {
          height: divBox.height,
          width: divBox.width,
          rect: divBox,
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
    loadTestScenario(manager.current);
  },[]);
  return (
    <>
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
                  <VFXLayer array={state?.animationState.vfx} />
              </GameFrame>
          </div>
        </GameContainer>
        <GameOverModal show={state.runtimeState.isGameOver}/>
      </GameStateContext.Provider>
    </>
  );
}
export default GamePage;