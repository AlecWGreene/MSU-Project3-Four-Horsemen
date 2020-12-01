import React, { useState } from "react";
import { DraggableCore } from "react-draggable";
import styled from "styled-components";
import { convertScreenPointToMapTile, GameStateContext } from "../../pages/GamePage.js"; 
import { useContext } from "react";
import convertWorldPointToScreenPoint from "../../pages/GameUtils/convertWorldPointToScreenPoint.js";

export const Image = styled.img`
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
    const [initialPosition, setInitialPosition] = useState(null);
    const [deltaPosition, setDeltaPosition] = useState({x:0,y:0});

    // Drag handlers
    const handleDragStart = (event, data) => {
        if(!initialPosition){
            const pos = event.target.getBoundingClientRect();
            setInitialPosition({
                x: pos.x,
                y: pos.y
            });
        }
    }
    const handleDrag = (event, data) => {
        // Get mouse position and closest tile
        const tile = convertScreenPointToMapTile({ 
                        x: event.screenX - state.frameSize.rect.left, 
                        y: event.screenY - state.frameSize.rect.top
                    }, state.frameSize, state.scaleRatio, state.gameState);
        // If closest tile is found, snap to tile
        if (tile){
            const position = convertWorldPointToScreenPoint(tile.position, state.scaleRatio, state.origin);
            const cellsize = state.gameState.mapGrid.cellsize * state.scaleRatio;
            setDeltaPosition({
                x: position.x - initialPosition.x + cellsize / 4,
                y: window.innerHeight - position.y - cellsize - state.frameSize.bottomLeft.y - initialPosition.y
            });
        }  else { 
            setDeltaPosition({
                x: deltaPosition.x + data.deltaX,
                y: deltaPosition.y + data.deltaY
            });
        }
       
    }
    const handleDragStop = (event, data) => {
        props.callback(event,data)
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