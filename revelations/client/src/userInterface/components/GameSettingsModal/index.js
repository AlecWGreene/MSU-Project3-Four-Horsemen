import React, { useContext, useEffect, useState } from 'react';
import Settings from "../../pages/Settings"
import Gear from "../../assets/metal-gear.png"
import { GameStateContext } from '../../pages/GamePage';

export default function Modal() {

  const [modalShow, setModalShow] = React.useState(false);
  const [state, dispatch] = useContext(GameStateContext);
  const [wasPaused, setWasPaused] = useState(true);

  // Called when component is rendered
  useEffect(() => {
      if(modalShow){
        // If the game wasn't already paused, pause it
        setWasPaused(state.runtimeState.isPaused)
        if(!state.runtimeState.isPaused){
            state.manager.pause();
        }
      }
      // Called when component is removed from the DOM
      else{
          // If the game isn't paused using the button, resume the game
          if(!wasPaused){
              state.manager.sendWave();
          }
      }
  }, [modalShow]);

  return (
    <>
      <div
      style={{marginBottom:'7px'}}
      onClick={() => setModalShow(true)}>

        <img className="settings-gear" src={Gear} />

      </div>
      <Settings
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}