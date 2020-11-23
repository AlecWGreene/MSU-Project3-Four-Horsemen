import React from 'react';
import SfxOptions from '../SfxOptions/index';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useSfx } from "../../components/SoundSuite/index";

export default function SfxButton() {

  const sfx = useSfx();
  
  const toggle = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if(event.target.id==='play'){
      sfx.mute(true);
    }else if(event.target.id==='mute'){
      sfx.mute(false);
    }
  };

    return (
        <div className="sound-bar" value={sfx}>
          {
            !sfx.soundEnabled 
          ?
            (
              <button id='play' onClick={toggle}>
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-soundwave sound-icon" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"/>
                </svg>
              </button>
            )
          : 
            (
              <ButtonGroup className="mr-2" aria-label="First group">  
                <button id='mute' onClick={toggle}> 
                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-soundwave sound-icon" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </button>
                <SfxOptions />
              </ButtonGroup>
            )
          }
        </div>
    )
}
