import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    /* border: 0.1rem solid pink; */
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    left: ${({position}) => position.x}px; 
    bottom: ${({position}) => position.y}px;
    transform-origin: center;
    transform: scale(${({scale}) => `${scale}, ${scale}`})
`;

const Image = styled.img`
position: absolute;
bottom: ${({height, parentHeight}) => (parentHeight - height)/2 }px;
left: ${({width, parentWidth}) => (parentWidth - width)/2}px;
transform: rotate(${({rotation}) => -rotation}deg)
`;

function Projectile(props){
    return <Container position={props.position} height={props.height} width={props.width} scale={props.scale * props.imgData.scale}>
        <Image 
            parentHeight={props.height * props.scale * props.imgData.scale} 
            parentWidth={props.width * props.scale * props.imgData.scale} 
            height={props.imgData.height} 
            width={props.imgData.width} 
            src={props.imgData.src} 
            rotation={props.rotation} />
    </Container>
}

export default Projectile;