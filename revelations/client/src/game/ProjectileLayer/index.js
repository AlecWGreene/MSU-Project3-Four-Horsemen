import React, { useContext } from "react";
import { GameStateContext } from "../../userInterface/pages/GamePage.js";
import convertWorldPointToScreenPoint from "../../userInterface/pages/GameUtils/convertWorldPointToScreenPoint.js";
import Animator from "../Animator/index.js";
import Sprite from "../Animator/Sprite.js";
import Projectile from "../Projectile/index.js";
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
                    const cellsize = state.gameState.mapGrid.cellsize;
                    const origin = {
                        x: state.origin.x + cellsize / 2,
                        y: state.origin.y + cellsize / 2
                    }
                    const scale = cellsize / imgData.height;
                    // return <Animator 
                    //         height={cellsize}
                    //         width={cellsize}
                    //         imgData={imgData}
                    //         position={convertWorldPointToScreenPoint(entry[1].transform.position, state.scaleRatio, origin)}
                    //         rotation={-180 / Math.PI  * entry[1].transform.rotation}
                    //         leftOffsetRatio={0}
                    //         bottomOffsetRatio={0}    
                    //         scale={state.scaleRatio * imgData.scale}
                    //         key={entry[0]}
                    //         />
                    return <Projectile 
                            height={cellsize}
                            width={cellsize}
                            imgData={imgData}
                            position={convertWorldPointToScreenPoint(entry[1].transform.position, state.scaleRatio, origin)}
                            scale={state.scaleRatio * (cellsize / imgData.height)}
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