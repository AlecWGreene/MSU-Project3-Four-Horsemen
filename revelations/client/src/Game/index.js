import React, { useContext, useEffect } from "react";

import GameFrame from "./GameFrame";
import WallLayer from "./WallLayer";

import { GameStateContext } from "../userInterface/pages/GamePage.js"
import Tile from "../engine/components/Tile";
import Animator from "./Animator";
import SPRITE_ENUM from "./SpriteEnums";
import CreepLayer from "../Game/Creeplayer/creeps.js"; 

function Game(props){
    /**
   * @type {[{gameState: GameState, runtimeState: RuntimeState}, (action, state)=>{gameState: GameState, runtimeState: RuntimeState}]}
   */
    const [state, dispatch] = useContext(GameStateContext);

    useEffect(() => {
        console.log("Game component Rendered!");
        console.log(state);
    });

    return (
        <div>
            <GameFrame>
                <WallLayer wallGrid={state.gameState ? state.gameState.wallGrid : []} />
               <CreepLayer directory={state.gameState.creepDirectory} /> 
            </GameFrame>
        </div>
    );
}

export default Game ;