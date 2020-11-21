import React, { useContext } from "react";
import { GameStateContext } from "../../userInterface/pages/GamePage.js";
import convertWorldPointToScreenPoint from "../../userInterface/pages/GameUtils/convertWorldPointToScreenPoint.js";
import Animator from "../Animator/index.js";
import SPRITE_ENUM from "../SpriteEnums.js";

const styles = {
    container: {
        position: "absolute",
        height: "100%",
        width: "100%"
    }
}

function ProjectileLayer(props){
    const [state, dispatch] = useContext(GameStateContext);

    return <div style={styles}>
            {
                !props.directory ? undefined : Object.entries(props.directory).map(entry => {
                    const imgData = SPRITE_ENUM[entry[1].data.spriteSheet];
                    const origin = {
                        x: state.origin.x,
                        y: state.origin.y
                    }
                    return <Animator 
                            height={imgData.height}
                            width={imgData.width}
                            imgData={imgData}
                            position={convertWorldPointToScreenPoint(entry[1].transform.position, state.scaleRatio, origin)}
                            rotation={-180 / Math.PI  * entry[1].transform.rotation}
                            leftOffsetRatio={0}
                            bottomOffsetRatio={-0.5}    
                            scale={state.scaleRatio * imgData.scale}
                            key={entry[0]}
                            />
                }) 
            }
        </div>
}

// Only render layer if there are projectiles in the directory
function shouldRender(prev, next){
    return Object.keys(next.directory).length > 0;
}

export default React.memo(ProjectileLayer, shouldRender);