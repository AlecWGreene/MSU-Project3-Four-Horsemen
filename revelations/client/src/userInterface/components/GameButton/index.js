import React, { useState } from "react";
import { DraggableCore } from "react-draggable";
import styled from "styled-components";
import { convertScreenPointToMapTile, GameStateContext } from "../../pages/GamePage.js"; 
import { useContext } from "react";
import convertWorldPointToScreenPoint from "../../pages/GameUtils/convertWorldPointToScreenPoint.js";

const Image = styled.img`
    height: ${({height})=>height}px;
    width: ${({width})=>width}px;
    transform: translate(${({delta})=>`${delta.x}px, ${delta.y}px`});
    transition: all 100ms;
`;

/**
 * @param {{src: string, height: number, width: number, styles: React.StyleHTMLAttributes}} props
 */
function GameButton(props){

    const [state, dispatch] = useContext(GameStateContext)

    // Setup internal states
    const [isDragging, toggleDragging] = useState(false);
    const [initialPosition, setInitialPosition] = useState(null);
    const [deltaPosition, setDeltaPosition] = useState({x:0,y:0});

    // Drag handlers
    const handleDragStart = (event, data) => {
        if(!initialPosition){
            const pos = event.target.getBoundingClientRect();
            setInitialPosition({
                x: pos.x + pos.width /2,
                y: pos.y + pos.height /2 
            });
        }
    }
    const handleDrag = (event, data) => {
        // Get mouse position and closest tile
        const pos = {
            x: event.screenX,
            y: event.screenY - state.origin.y
        };
        const tile = convertScreenPointToMapTile({
            x: pos.x - state.origin.x,
            y: pos.y - state.origin.y
        }, state.frameSize, state.scaleRatio, state.gameState); 

        // If closest tile is found, snap to tile
        if (tile){
            console.log(tile.index.row+","+tile.index.col);
            const position = convertWorldPointToScreenPoint({
                x: tile.position.x - state.gameState.mapGrid.cellsize / 4,
                y: tile.position.y + state.gameState.mapGrid.cellsize / 4
            }, state.scaleRatio, state.origin); 
            position.y = state.frameSize.height - position.y;
            setDeltaPosition({
                x: position.x - initialPosition.x,
                y: position.y - initialPosition.y
            }); 
        }  else { setDeltaPosition({
            x: deltaPosition.x + data.deltaX,
            y: deltaPosition.y + data.deltaY
        });}
       
    }
    const handleDragStop = (event, data) => {
        props.callback(event,data)
        toggleDragging(false);
        setDeltaPosition({
            x: 0,
            y: 0
        });
    };

    return <DraggableCore
                onStart={handleDragStart}
                onDrag={handleDrag}
                onStop={handleDragStop}
            >
        <Image delta={deltaPosition} height={props.height} width={props.width} style={props.styles} src={props.src} draggable="false" />
    </DraggableCore>;
}

export default GameButton;