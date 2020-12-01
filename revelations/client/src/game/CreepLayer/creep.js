import React, { useContext, useEffect } from "react"; 
import Animator from "../Animator/index.js"; 
import SPRITE_ENUM from "../../game/SpriteEnums.js"; 
import convertWorldPointToScreenPoint from "../../userInterface/pages/GameUtils/convertWorldPointToScreenPoint.js";
import { GameStateContext } from "../../userInterface/pages/GamePage.js";


const styles = {
    container: {
        position: "absolute",
        height: "100%",
        width: "100%"
    }
}

function CreepLayer(props){
    const [state, dispatch] = useContext(GameStateContext)

    return (
        <div style={styles.container}>
        {
            Object.entries(props.creep).map(creep => <Animator height={state.gameState.mapGrid.cellsize} 
                width={state.gameState.mapGrid.cellsize} 
                imgData={SPRITE_ENUM[creep[1].data.spriteSheet]} 
                position={convertWorldPointToScreenPoint(creep[1].transform.position,state.scaleRatio,state.origin)} 
                rotation={90 - creep[1].transform.rotation * 180 / Math.PI} 
                scale={state.scaleRatio} 
                key={creep[0]}
                />)
        }
        </div>
    )   

}

export default React.memo(CreepLayer, () => true);






                