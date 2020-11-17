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

function BaseLayer(props){
    const [state, dispatch] = useContext(GameStateContext);
    return (
        <div style={styles.container}>
        {
            (!props.baseGrid) ? undefined : Object.entries(props.directory).map(entry => {
                // Retrieve sprite
                const imgData = SpriteEnums[entry[1]];
                return <Animator 
                          height={state.gameState.mapGrid.cellsize} 
                          width={state.gameState.mapGrid.cellsize} 
                          imgData={imgData} 
                          position={convertWorldPointToScreenPoint(baseTile.position, state.scaleRatio, state.origin)} 
                          rotation={0} 
                          scale={state.scaleRatio} />
            })
        }
        </div>
    );
}

function shouldRun(prevProps, nextProps){
    return !(prevProps.length === nextProps.length);
}

export default React.memo(BaseLayer, shouldRun);