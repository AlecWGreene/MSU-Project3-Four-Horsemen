import Animator from "./Animator";


export default function Sprite(props){
    return <Animator 
              src={props.src} 
              height={props.height} 
              width={props.width} 
              imgSize={props.imgSize} 
              frame={0}
              /> 

}; 