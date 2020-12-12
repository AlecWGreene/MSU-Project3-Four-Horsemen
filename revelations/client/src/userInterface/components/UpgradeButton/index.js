import React from "react";
import { Image } from "../GameButton";
import { DraggableCore } from "react-draggable";

function UpgradeButton(props){
    return <DraggableCore>
        <Image active={props.active} delta={{x:0, y:0}} height={props.height} width={props.width} style={props.styles} src={props.src} onClickCapture={props.callback} draggable="false" />
    </DraggableCore>
}

export default UpgradeButton;