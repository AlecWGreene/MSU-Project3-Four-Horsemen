import React, { useContext, useEffect } from "react";

import GameFrame from "./GameFrame";
import WallLayer from "./WallLayer";

import { GameStateContext } from "../userInterface/pages/GamePage.js"
import Tile from "../engine/components/Tile";
import Animator from "./Animator";
import SPRITE_ENUM from "./SpriteEnums";

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
                {
                    !state.gameState ? undefined : Object.values(state.gameState.creepDirectory).map(creep => <Animator imgData={SPRITE_ENUM["Creep_1_RED"]} position={creep.transform.position} rotation={creep.transform.rotation * 180 / Math.PI} scale={1} />)
                }
            </GameFrame>
        </div>
    );
}

export default Game;