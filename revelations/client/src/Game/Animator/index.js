import React, { useEffect, useState } from "react";
import Sprite from "./Sprite.js";
import styled from "styled-components";

/**
 * @example
 * <Container 
 *   height={120} 
 *   width={120}  
 *   position={{x: 70, y: 15}}>
 *      ...
 * </Container>
 */
const Container = styled.div``;

/** 
 * @description
 * Renders an image on screen, using imgData and a scale
 * 
 * @example
 * <Animator imgData={SPRITE_ENUMS["spaceship_red"]} scale={0.2} key={20095} />
 * 
 * @param {{imgData: {src: string, height: number, width: number, numFrames: number, scale: number}, position: {x: number, y: number}, scale: number, key: number }} props
 */
function Animator(props){
    // Setup component states
    const [ isAnimating, toggleAnimation ] = useState(false);
    const [ frame, setFrame ] = useState(0);

    // When object is rendered, update Sprite offset
    let offset = 0;
    useEffect(() => {
        offset = frame * props.imgData.width / props.imgData.numFrames;
    }, [frame]);

    return <Container height={props.height * props.scale} width={props.width * props.scale} position={props.position}>
        <Sprite 
         src={props.imgData.src}
         height={props.imgData.height}
         width={props.imgData.width}
         rotation={props.rotation}
         scale={props.scale * props.imgData.scale}
         offset={offset || 0}
        />
    </Container>
}

export default Animator;