import React, { useEffect, useState } from "react";
import { DraggableCore } from "react-draggable";
import styled from "styled-components";

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

    // Setup internal states
    const [isDragging, toggleDragging] = useState(false);
    const [handlerData, setHandlerData] = useState(null);
    const [deltaPosition, setDeltaPosition] = useState({x:0,y:0});

    const handleDragStart = (event, data) => {
        if(!isDragging){
            toggleDragging(true);
        }
    }
    const handleDrag = (event, data) => {
        setDeltaPosition({
            x: deltaPosition.x + data.deltaX,
            y: deltaPosition.y + data.deltaY
        });
    }
    const handleDragStop = (event, data) => {
        toggleDragging(false);
        if(handlerData === null){
            setHandlerData({
                event: event,
                data: data
            });
        }
        else{
            setHandlerData(null);
        }
        setDeltaPosition({
            x: 0,
            y: 0
        });
    }

    // Calls every time handlerData is updated
    useEffect(() => {
        
    }, [handlerData]);

    return <DraggableCore
                onStart={handleDragStart}
                onDrag={handleDrag}
                onStop={handleDragStop}
            >
        <Image delta={deltaPosition} height={props.height} width={props.width} style={props.styles} src={props.src} draggable="false" />
    </DraggableCore>;
}

export default GameButton;