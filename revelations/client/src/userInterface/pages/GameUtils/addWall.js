import React from 'react'; 


function addWall(event, dispatch) {
    dispatch({
      type: "addWall",
      payload: {
        x: event.screenX,
        y: event.screenY
      }
    });
    console.log(event.screenX); 
  }

  export default addWall; 