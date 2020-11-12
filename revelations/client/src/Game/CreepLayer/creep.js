import React from "react"; 
import Animator from "../Animator/index.js"; 
import SPRITE_ENUM from "../Game/SpriteEnums.js";

export default function CreepLayer(props){

    return (
        {
            Object.entries(props.creepDirectory).map(creep => <Animator imgData={SPRITE_ENUM["Creep_1_RED"]} position={creep[1].transform.position} rotation={creep[1].transform.rotation * 180 / Math.PI} scale={1} key={creep[0]}/>)
        }
        
    )   

}









                