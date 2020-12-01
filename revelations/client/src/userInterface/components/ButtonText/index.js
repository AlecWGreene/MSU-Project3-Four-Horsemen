import React from "react";
import "./style.css";

function ButtonText(props){
    return (
        <div className="ButtonText aldrich-font col-6">
            <p className={"ButtonText-Name aldrich-font"}> {props.name} </p>
            <p className={"ButtonText-Cost aldrich-font"}> ${props.cost} </p>
            {/* <p className={"ButtonText-Description"}>{props.description}</p> */}
        </div>
    );
}

export default ButtonText;