import React from 'react'; 



function addTower(event, dispatch) {
    dispatch({
      type: "addTower",
      payload: {
        x: event.screenX,
        y: event.screenY
      }
    });
    console.log(event.screenX); 
  }

  export default addTower; 