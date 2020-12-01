import React, { useContext, useEffect, useState } from "react";
import { GameStateContext } from "../../userInterface/pages/GamePage";
import Animator from "../Animator";
import SpriteEnums from "../SpriteEnums.js";
import convertWorldPointToScreenPoint from "../../userInterface/pages/GameUtils/convertWorldPointToScreenPoint.js";
import SPRITE_ENUM from "../SpriteEnums.js"
import GameEnums from "../../engine/GameEnums";


const styles = {
    container: {
        position: "absolute",
        height: "100%",
        width: "100%"
    }
}

function TowerLayer(props){
    const [state, dispatch] = useContext(GameStateContext);
    const handleClickTower = (event,dispatch,towerId,archtype) => {
        event.preventDefault();
        event.stopPropagation();
        const type = ["Tower_Cannon1", "Tower_Cannon2", "Tower_Cannon3"].includes(archtype) ? "TowerCannon" : "TowerLaser";
        dispatch({
            type: "towerClick",
            payload: {
                id: towerId,
                archtype: type
            }
        });
    }
    const handleContainerClick = () => {
        dispatch({
            type: "towerClick",
            payload: {
                id: undefined,
                archtype: "Standard"
            }
        });
    }
    return (
        <div style={styles.container} onClickCapture={handleContainerClick}>
        {
            (!props.directory) ? undefined : Object.entries(props.directory).map(entry => {
                // Retrieve sprite
                const imgData = SpriteEnums[entry[1].data.spriteSheet];
                const sfx = GameEnums.TOWER_PREFABS[entry[1].data.archtype].sfx;
                const animFlag = state.animationState.towers.includes(parseInt(entry[0]));
                return <Animator 
                          height={state.gameState.mapGrid.cellsize} 
                          width={state.gameState.mapGrid.cellsize} 
                          imgData={imgData} 
                          position={convertWorldPointToScreenPoint(entry[1].transform.position, state.scaleRatio, state.origin)} 
                          rotation={90 - entry[1].transform.rotation * (180 / Math.PI) } 
                          scale={state.scaleRatio} 
                          key={entry[0]}
                          startAnimation={animFlag}
                          clickHandler={(event)=>{handleClickTower(event,dispatch,entry[0], entry[1].data.archtype)}}
                          sfx={sfx}
                          />
            })
        }
        </div>
    );
}

export default TowerLayer;