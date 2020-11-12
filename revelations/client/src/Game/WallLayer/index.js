import React, { useEffect, useState } from "react";
import Sprite from "../DEPRECATED_Sprite";
import Tile from "../../engine/components/Tile.js";
import Animator from "../Animator";
import SpriteEnum from "../SpriteEnums.js";

const styles = {
    container: {
        position: "absolute",
        height: "100%",
        width: "100%"
    }
}

const prefabs ={
    wall_connection_NESW: {
        src: "./Assets/Buildings/Walls/Wall_Connection_NESW.png",
        imgSize: {
            height: 128,
            width: 128
        }
    }
}

export default function WallLayer(props){

    useEffect(()=>{
        console.log("Wall Layer rendered");
    });

    return (
        <div style={styles.container}>
        <Animator imgData={SpriteEnum["Creep_1_RED"]} height={120} width={120} position={{x: 80, y: 80}} rotation={0} scale={1}/>
        {
            (!props.wallGrid) ? undefined : props.wallGrid.map(wallTile => {
                return <Animator imgData={SpriteEnum["Wall_Connection_NESW"]} height={128} width={128} position={wallTile.position} rotation={0} scale={1} />;
            })
        }
        </div>
    );
}