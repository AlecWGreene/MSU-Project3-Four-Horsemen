import React, { useContext, useEffect } from "react";

import GameFrame from "./GameFrame";
import WallLayer from "./WallLayer";

import { GameStateContext } from "../userInterface/pages/GamePage.js"
import Tile from "../engine/components/Tile";
import Animator from "./Animator";
import SPRITE_ENUM from "../game/SpriteEnums.js";
import CreepLayer from "../game/CreepLayer/creep.js";

function Game(props){
    /**
   * @type {[{gameState: GameState, runtimeState: RuntimeState}, (action, state)=>{gameState: GameState, runtimeState: RuntimeState}]}
   */
    const [state, dispatch] = useContext(GameStateContext);

    useEffect(() => {
       
    });

    return (
        <div style={{ height: "100%", width: "100%"}}>
            <GameFrame>
                <WallLayer wallGrid={state.gameState ? state.gameState.wallGrid : []} />
                <CreepLayer creep={state.gameState.creepDirectory} />
            </GameFrame>
        </div>
    );
}

export default Game;

