import React, { useContext, useLayoutEffect } from "react";
import "./style.css";
import { GameStateContext } from "../../userInterface/pages/GamePage.js";
import GameEnums from "../../engine/GameEnums";

function GameFrame(props){

    const [state, dispatch] = useContext(GameStateContext);

    // Call on first layout Render
    useLayoutEffect(() => {

    }, [])

    return <div id="gameFrame">{props.children}</div>
}


export default GameFrame;