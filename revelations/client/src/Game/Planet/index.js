import React, { useContext } from "react";
import Animator from "../Animator";
import SpriteEnums from "../SpriteEnums.js"
import GameEnums from "../../engine/GameEnums.js";

import { GameStateContext } from "../../userInterface/pages/GamePage.js";
import convertWorldPointToScreenPoint from "../../userInterface/pages/GameUtils/convertWorldPointToScreenPoint.js" ;

export default function Planet(props){

    const [state, dispatch] = useContext(GameStateContext);

    return <>
        {
            !(state.gameState && state.gameState.mapGrid) ?
            undefined :
            <Animator 
                imgData={SpriteEnums["Creep_1_GREEN"]} /** @todo replace with planet sprite */
                height={state.gameState.mapGrid.cellsize}
                width={state.gameState.mapGrid.cellsize}
                position={convertWorldPointToScreenPoint(state.gameState.mapGrid.tiles[GameEnums.GAME_CONFIG.target[0]][GameEnums.GAME_CONFIG.target[1]].position, state.scaleRatio, {x:0,y:0})}
                rotation={0}
                scale={state.scaleRatio}
            />
        }
        </>
}