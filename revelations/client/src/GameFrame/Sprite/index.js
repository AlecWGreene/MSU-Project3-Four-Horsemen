import Animator from "./Animator.js";

export default function Sprite(props){
    return <Animator 
    src={props.src} 
    height={props.height} 
    width={props.width} 
    imgSize={props.imgSize} 
    position={props.position}
    scale={props.scale}
    frame={props.frame || 0} 
    /> 
}