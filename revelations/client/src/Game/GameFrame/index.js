import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import { GameStateContext } from "../../userInterface/pages/GamePage.js";

function GameFrame(props){
    const [state, dispatch] = useContext(GameStateContext);
    const [frameSize, updateFrameSize] = useState();

    let gameFrame;

    function handleWindowResize(event){
        console.log("Window Resized");
        console.log(state);

        if(!gameFrame){
            return;
        }

        dispatch({ type: "resizeWindow", payload: { height: gameFrame.clientHeight, width: gameFrame.clientWidth} }); 
    }  

    // Run on first render
    useEffect(()=>{
        gameFrame = document.getElementById("gameFrame");
        window.addEventListener("resize", handleWindowResize);

    }, []);

    return <div id="gameFrame">{props.children}</div>
}


export default GameFrame;