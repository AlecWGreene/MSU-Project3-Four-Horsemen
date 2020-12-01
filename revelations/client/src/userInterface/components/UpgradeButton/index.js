import React from "react";
import { Image } from "../GameButton";

function UpgradeButton(props){
    return <Image delta={{x:0, y:0}} height={props.height} width={props.width} style={props.styles} src={props.src} onClickCapture={props.clickHandler} draggable="false" />
}

export default UpgradeButton;