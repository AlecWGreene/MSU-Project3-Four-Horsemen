import styled from "styled-components"; 

const Container = styled.div `
overflow:hidden;
width: ${({width})=> width}px; 
height: ${({height}) => height}px;
transform: scale(${({scale}) => `${scale}, ${scale}`});
transform-origin: top left;
position: absolute; 
left:100px;

transform: rotate(0deg);
transform: ${props => (props.rotate ? `rotate(180deg)` : "")};`

const Image = styled.img`
transform: translate(-${({left}) => left}px,0)
`



function Animator (props){

 const offset = props.frame * props.imgSize.width / props.numFrames;

 return (<Container height={props.imgSize.height}
  width={props.imgSize.width}>
 <Image left="128"
  src={props.src}/> 
 </Container>)
}

export default Animator


// pass in x and y coordinates and rotation and image link... transform:rotate ${}