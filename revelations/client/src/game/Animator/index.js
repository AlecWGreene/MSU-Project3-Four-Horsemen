import React, { useEffect, useState, useContext, useRef } from "react";
import Sprite from "./Sprite.js";
import styled from "styled-components";
import { useSfx } from "../../userInterface/components/SoundSuite/";
// import { GameStateContext } from "../../userInterface/pages/GamePage"; 

/**
 * @example
 * <Container 
 *   height={120} 
 *   width={120}  
 *   position={{x: 70, y: 15}}>
 *      ...
 * </Container>
 */
const Container = styled.div`
    position: absolute;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    left: ${({position}) => position.x}px; 
    bottom: ${({position}) => position.y}px;
    transform-origin: center;
    transform: rotate(${(props) => {
        return props.rotation;
    }}deg);
`;

/** 
 * @description
 * Renders an image on screen, using imgData and a scale
 * 
 * @example
 * <Animator imgData={SPRITE_ENUMS["spaceship_red"]} scale={0.2} key={20095} />
 */
function Animator(props){
    // Setup component states
    const [ isAnimating, toggleAnimation ] = useState(false);
    // const [state, dispatch] = useContext(GameStateContext);
    const [ frame, setFrame ] = useState(0);
    const { sfxSound } = useSfx();

    // When object is rendered, update Sprite offset
    let offset = frame * props.imgData.width / props.imgData.numFrames;

    // Call when props.fireCount is changed
    useEffect(() => {
        let animFrame;
        if(props.startAnimation && !isAnimating){
            animFrame = requestAnimationFrame(() => toggleAnimation(true));
        }

        return () => cancelAnimationFrame(animFrame)
    });

    // Call when isAnimating is changed
    useEffect(() => {
        let animFrame;
        if(!isAnimating){
            animFrame = requestAnimationFrame(() =>setFrame(0));
        }
        else{
            animFrame = requestAnimationFrame(() => {
                setFrame(1);
                if(props.sfx){
                    sfxSound(props.sfx);
                }
            });
        }

        return () => cancelAnimationFrame(animFrame)
    }, [isAnimating]);

    // Call when frame is changed
    useEffect(() => {
        let animFrame;
        if(isAnimating){
            if(frame === props.imgData.numFrames - 1){
                animFrame = requestAnimationFrame(() => { 
                    setFrame(0);
                    toggleAnimation(false);
                    if(props.finishHandler){
                        props.finishHandler(animFrame.current);
                    }
                }); 
            }
            else{
                animFrame = requestAnimationFrame( () => {
                    setFrame(frame+1)
                });
            }
        }

        return () => cancelAnimationFrame(animFrame)
    }, [frame])

    return <Container height={props.height * props.scale} width={props.width * props.scale} position={props.position} rotation={props.rotation}>
        <Sprite 
         src={props.imgData.src}
         height={props.imgData.height}
         width={props.imgData.width / props.imgData.numFrames}
         rotation={props.rotation}
         scale={props.scale * props.imgData.scale}
         imgScale={props.width  / (props.imgData.width / props.imgData.numFrames)}
         parentSize={props.width * props.scale}
         bottomOffsetRatio={props.bottomOffsetRatio}
         leftOffsetRatio={props.leftOffsetRatio}
         clickHandler={props.clickHandler}
         offset={offset}
        />
    </Container>
}

export default Animator;