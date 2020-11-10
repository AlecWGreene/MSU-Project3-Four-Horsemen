import React from "react";
import styled from "styled-components";

/**
 * @example
 * <Frame height={120} width={120} rotation={45} scale={0.75}> ... </Frame>
 */
const Frame = styled.div``;

/**
 * @example
 * <Image src={"./Assets/spaceship.png"} left={90} />
 */
const Image = styled.object``;

/**
 * @param {{src: string, height: number, width: number, rotation: number, scale: number, offset: number}} props
 */
function Sprite(props){
    return <Frame>
        <Image src={props.src} type={"image/svg+xml"} />
    </Frame>
}

export default Sprite;