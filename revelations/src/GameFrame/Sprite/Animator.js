import styled from "styled-components"; 

const Container = styled.div `
overflow:hidden;
width: ${({width})=> width}px; 
height: ${({height}) => height}px;
transform: scale(${({scale}) => `${scale}, ${scale}`});
transform-origin: top left;
position: absolute; 
left: ${({ left }) => left}px;
bottom: ${({ bottom }) => bottom}px;

transform: rotate(0deg);
transform: ${props => (props.rotate ? `rotate(180deg)` : "")};`

const Image = styled.img`
transform: translate(-${({left}) => left}px,0)
`



function Animator (props){

 const offset = props.frame * props.imgSize.width / props.numFrames;

 return (<Container left={props.position.x} bottom={props.position.y} height={props.imgSize.height}
  width={props.imgSize.width} scale={props.scale || 1}>
 <Image left={offset || 0}
  src={props.src}/> 
 </Container>)
}

export default Animator


// pass in x and y coordinates and rotation and image link... transform:rotate ${}