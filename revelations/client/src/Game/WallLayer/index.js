import React, { useContext, useState } from "react";
import { GameStateContext } from "../../userInterface/pages/GamePage";
import Animator from "../Animator";
import SpriteEnums from "../SpriteEnums.js";
import convertWorldPointToScreenPoint from "../../userInterface/pages/GameUtils/convertWorldPointToScreenPoint.js";


const styles = {
    container: {
        position: "absolute",
        height: "100%",
        width: "100%"
    }
}

function WallLayer(props){
    const [state, dispatch] = useContext(GameStateContext);
    return (
        <div style={styles.container}>
        {
            (!props.wallGrid) ? undefined : props.wallGrid.map(wallTile => {
                let connections = ""

                // Check which walls the wall must connect to
                for(const neighbour of wallTile.getNeighbours()){
                    if(props.wallGrid.filter(t => t.isEqualTo(neighbour)).length > 0){
                        const diff = {
                            row: neighbour.index.row - wallTile.index.row,
                            col: neighbour.index.col - wallTile.index.col
                        }

                        // Insert the compass direction of the connection into the string, maintain NESW order
                        if(diff.col === 0){
                            if(diff.row === 1){
                                connections = "N" + connections;
                            }
                            else if(diff.row === -1){
                                if(connections.endsWith("W")){
                                    connections = connections.replace("W", "SW");
                                }
                                else{
                                    connections += "S";
                                }
                            }
                        }
                        else if(diff.row === 0){
                            if(diff.col === 1){
                                if(connections.charAt(0) === "N"){
                                    connections = connections.replace("N", "NE");
                                }
                                else{
                                    connections = "E" + connections;
                                }
                            }
                            else if(diff.col === -1){
                                connections += "W";
                            }
                        }
                    }
                }

                // Retrieve sprite
                const imgData = SpriteEnums[connections === "" ? "Wall_Island" : `Wall_Connection_${connections}`];
                return <Animator 
                          height={128} 
                          width={128} 
                          imgData={imgData} 
                          position={convertWorldPointToScreenPoint(wallTile.position, state.scaleRatio, state.origin)} 
                          rotation={0} 
                          scale={0.295} />
            })
        }
        </div>
    );
}

function shouldRun(prevProps, nextProps){
    return !(prevProps.length === nextProps.length);
}

export default React.memo(WallLayer, shouldRun);