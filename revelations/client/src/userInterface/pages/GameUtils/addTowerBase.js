import React from 'react'; 


function addTowerBase(event, dispatch) {
    dispatch({
      type: "addTowerBase",
      payload: {
        x: event.screenX,
        y: event.screenY
      }
    });
    console.log(event.screenX); 
  }

  export default addTowerBase; 