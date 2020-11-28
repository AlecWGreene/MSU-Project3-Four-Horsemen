import React, { useContext, useEffect } from "react";
import { GameStateContext } from "../../userInterface/pages/GamePage";
import Animator from "../Animator";
import SPRITE_ENUM from "../SpriteEnums";
import convertWorldPointToScreenPoint from "../../userInterface/pages/GameUtils/convertWorldPointToScreenPoint.js"

const styles = {
    container: {
        position: "absolute",
        height: "100%",
        width: "100%"
    }
}

function VFXLayer(props){
    const [state, dispatch] = useContext(GameStateContext);

    // Removes the vfx from the animationState
    const removeAnimation = (id, manager)=> {
        return () => {
            manager.animationState.vfx = manager.animationState.vfx.filter(vfx => vfx.id !== id);
            manager.updateCallback();
        }
    }

    return (
        <div styles={styles.container}>
            {
                (!props.array || props.array.length === 0) ? undefined : props.array.map(effect => {
                    const imgData = SPRITE_ENUM[effect.sprite];
                    const cellsize = state.gameState.mapGrid.cellsize;
                    return <Animator 
                            height={cellsize} 
                            width={cellsize} 
                            imgData={imgData} 
                            position={convertWorldPointToScreenPoint(effect.position, state.scaleRatio, state.origin)} 
                            rotation={0} 
                            scale={state.scaleRatio} 
                            key={effect.id}
                            startAnimation={true}
                            finishHandler={removeAnimation(effect.id, state.manager)}
                            /*sfx={sfx}*/
                            />
                })
            }
        </div>
    );
}

export default VFXLayer;