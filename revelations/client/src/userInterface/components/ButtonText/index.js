import React from "react";
import "./style.css";

function ButtonText(props){
    return (
        <div className="ButtonText col-8">
            <p className={"ButtonText-Name"}> {props.name} </p>
            <p className={"ButtonText-Cost"}> ${props.cost} </p>
            {/* <p className={"ButtonText-Description"}>{props.description}</p> */}
        </div>
    );
}

export default ButtonText;