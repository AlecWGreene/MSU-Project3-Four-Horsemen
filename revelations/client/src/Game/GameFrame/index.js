import React, { useEffect, useState } from "react";
import "./style.css";

function GameFrame(props){


    return <div id="gameFrame">{props.children}</div>
}


export default GameFrame;