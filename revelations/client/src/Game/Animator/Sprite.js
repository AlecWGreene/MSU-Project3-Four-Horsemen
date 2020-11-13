import React from "react";
import styled from "styled-components";

/**
 * @example
 * <Frame height={120} width={120} rotation={45} scale={0.75}> ... </Frame>
 */
const Frame = styled.div`
    height: ${({height})=>height}px;
    width: ${({width})=>width}px;
    transform-origin: center; 
    transform: scale(${({scale})=>`${scale}, ${scale}`}) rotate(${({rotation})=>rotation}deg);
`;

/**
 * @example
 * <Image src={"./Assets/spaceship.png"} offset={90} />
 */
const Image = styled.img`
    transform: translate(${({offset})=>offset}, 0);
`;

/**
 * @param {{src: string, height: number, width: number, rotation: number, scale: number, offset: number}} props
 */
function Sprite(props){
    return <Frame height={props.height} width={props.width} scale={props.scale} rotation={props.rotation}>
        <Image src={props.src} offset={props.offset || 0}/>
    </Frame>
}

export default Sprite;