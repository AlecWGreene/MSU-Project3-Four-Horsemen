import React, { useContext, useState } from "react";
import { GameStateContext } from "../../userInterface/pages/GamePage";
import Animator from "../Animator";
import SpriteEnums from "../SpriteEnums.js";
import convertWorldPointToScreenPoint from "../../userInterface/pages/GameUtils/convertWorldPointToScreenPoint.js";
import SPRITE_ENUM from "../SpriteEnums.js"


const styles = {
    container: {
        position: "absolute",
        height: "100%",
        width: "100%"
    }
}

function TowerLayer(props){
    const [state, dispatch] = useContext(GameStateContext);
    return (
        <div style={styles.container}>
        {
            (!props.directory) ? undefined : Object.entries(props.directory).map(entry => {
                // Retrieve sprite
                const imgData = SpriteEnums[entry[1].data.spriteSheet];
                return <Animator 
                          height={state.gameState.mapGrid.cellsize} 
                          width={state.gameState.mapGrid.cellsize} 
                          imgData={imgData} 
                          position={convertWorldPointToScreenPoint(entry[1].transform.position, state.scaleRatio, state.origin)} 
                          rotation={0} 
                          scale={state.scaleRatio} 
                          key={entry[0]} />
            })
        }
        </div>
    );
}

function shouldRun(prevProps, nextProps){
    return !(prevProps.directory.length === nextProps.directory.length);
}

export default React.memo(TowerLayer, shouldRun);