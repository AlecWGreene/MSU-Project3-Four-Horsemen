import React, { useState } from "react";
import Sprite from "../DEPRECATED_Sprite";
import Tile from "../../engine/components/Tile.js";


const styles = {
    container: {
        position: "absolute",
        height: "100%",
        width: "100%"
    }
}

export default function WallLayer(props){
    return (
        <div style={styles.container}>
        {
            (!props.wallGrid) ? undefined : props.wallGrid.map(wallTile => {
                return <div> </div>;
            })
        }
        </div>
    );
}