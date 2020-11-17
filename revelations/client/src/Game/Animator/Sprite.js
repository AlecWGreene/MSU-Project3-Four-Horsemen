import React from "react";
import styled from "styled-components";

/**
 * @example
 * <Frame height={120} width={120} rotation={45} scale={0.75}> ... </Frame>
 */
const Frame = styled.div`
    transform-origin: center; 
    position: absolute;
    overflow: hidden;
    bottom: -${props => 0.5 * Math.abs(props.width - props.parentSize)}px;
    left: -${props => 0.5 * Math.abs(props.width - props.parentSize)}px;
    height: ${({height}) => height}px;
    width: ${({width}) => width}px;
    transform: scale(${({scale, imgScale})=>`${scale * imgScale}, ${scale * imgScale}`});
`;

/**
 * @example
 * <Image src={"./Assets/spaceship.png"} offset={90} />
 */
const Image = styled.img`
    transform: translate(-${({offset})=>offset}px, 0px);
`;

/**
 * @param {{src: string, height: number, width: number, rotation: number, scale: number, offset: number}} props
 */
function Sprite(props){
    return <Frame height={props.height} width={props.width} scale={props.scale} rotation={props.rotation} imgScale={props.imgScale} parentSize={props.parentSize}>
        <Image src={props.src} offset={props.offset || 0} rotation={props.rotation}/>
    </Frame>
}

export default Sprite;