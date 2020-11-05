import React from "react"; 
import Grid from "../engine/entities/Grid.js"; 
import Animator from "./Animator.js"; 


export default function GameFrame(props){
    const {innerWidth, innerHeight} = window;
    const grid = new Grid(20,40,innerHeight,innerWidth); 
    const cellsize = Math.min(innerWidth / 40, innerHeight / 20);
    console.log(grid); 

    const handleClick = (event) => {
        // Place turret base
        if(event.shiftKey){

        }
        // Place wall
        else{
            const row = Math.floor((400 - event.clientY) / cellsize);
            const col = Math.floor(event.clientX / cellsize);
            console.log("click at: "+ event.clientX+","+event.clientY);
            console.log("grid tile at: "+ row+","+col);
            console.log("grid position at: "+grid.tiles[row][col].position.x+","+grid.tiles[row][col].position.y);

            
        }
    }

    return <div style= {{height:"900px", width:"1600px"}} onClickCapture={handleClick}>
            <Animator src="./Assets/Towers/Tower_1Barrel.png"/> 
    </div>

}

