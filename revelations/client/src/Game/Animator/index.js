import React from "react";
import Sprite from "./Sprite.js";

function converTransformToStyle(transform){

}

function Animator(props){
    const divStyle = converTransformToStyle(props.transform);
    const offset = props.frame * props.imgData.width / props.imgData.numFrames;
    return <div style={divStyle}>
        <Sprite 
         src={props.imgData.src}
         height={props.imgData.height}
         width={props.imgData.width}
         scale={props.scale}
         offset={offset}
        />
    </div>
}

export default Animator;