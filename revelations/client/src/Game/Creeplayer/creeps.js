import React, { useEffect } from "react";
import SPRITE_ENUM from "../../Game/SpriteEnums.js";
import Animator from "../Animator/index.js"; 




export default function CreepLayer(props){
    useEffect(() => {
    console.log("creeps rendered"); 
});
    return (
        <div>
        {Object.entries(props.directory).map(creep => <Animator imgData={SPRITE_ENUM["Creep_1_RED"]} position={creep[1].transform.position} rotation={creep[1].transform.rotation * 180 / Math.PI} scale={1} key={creep[0]}  />)}
        </div>
    ); 
}






