import React, { useState } from "react";
import Sprite from "../Sprite";
import Tile from "../../engine/components/Tile.js";

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
    return (
        <div style={styles.container}>
        {
            (!props.wallGrid) ? undefined : props.wallGrid.map(wallTile => {
                return <Sprite src={prefabs.wall_connection_NESW.src} height={128} width={128} imgSize={prefabs.wall_connection_NESW.imgSize} position={wallTile.position} />;
            })
        }
        </div>
    );
}