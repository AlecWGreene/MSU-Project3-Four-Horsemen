import React, { useState, useReducer } from "react"; 
import Grid from "../engine/entities/Grid.js"; 
import Animator from "./Sprite/Animator.js"; 
import WallLayer from "./WallLayer";

const GameState = React.createContext(null);

function gameStateReducer(state, action){

}

export default function GameFrame(props){
    const [state, dispatch] = useReducer(gameStateReducer, {wallGrid: []});

    const {innerWidth, innerHeight} = window;
    /** @type {Grid} */
    const grid = new Grid(20,40,innerHeight,innerWidth); 
    grid.cellsize = Math.min(innerHeight / 20, innerWidth / 40);

    const handleClick = (event) => {
        // Place turret base
        if(event.shiftKey){

        }
        // Place wall
        else{
            const row = Math.floor((400 - event.clientY) / grid.cellsize);
            const col = Math.floor(event.clientX / grid.cellsize);
        }
    }


    return (
        <GameState.Provider value={dispatch}>
            <div style= {{height:"900px", width:"1600px"}} onClickCapture={handleClick}>
                <WallLayer />
            </div>
        </GameState.Provider>
    );

}

// <Animator position={{x: 60, y: 60}} imgSize={{height: 128, width: 128}} src="./Assets/Towers/Tower_1Barrel.png"/>