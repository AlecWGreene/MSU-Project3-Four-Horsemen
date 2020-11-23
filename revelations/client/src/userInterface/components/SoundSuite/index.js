import React, { useState, useContext, createContext } from 'react';
import useSound from 'use-sound';
import soundEnums from '../../../game/SpriteEnums.js';
import SfxOptions from '../SfxOptions/index';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './style.css'
import SfxButton from '../SfxButton/index.js';

function SoundSuite({ children }) {
  const sfx = useProvideSfx();
  
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
    <>
      <sfxContext.Provider value={sfx}>
        {/* this need to be converted to a component and styled to not push down the app page */}
        {/* <div className="sound-bar">
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
        </div> */}
        <SfxButton />

        {children}

      </sfxContext.Provider>
    </>
  )
};

// access context provider state and methods
export function useSfx() {
  return useContext(sfxContext);
}

export default SoundSuite;

// create new context instance of sfxContext to keep track of sound effect states accross the site
const sfxContext = createContext();

// context provider state and methods
function useProvideSfx() {

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [masterVol, setMasterVol] = useState(1.0);
  const [nextFile, setNextFile] = useState('');
  const [ambientFile, setAmbientFile] = useState('Sound_background_0');
  const [sfxFile, setSfxFile] = useState('Sound_pop_0');
  const [ambientVol, setAmbientVol] = useState(0.5);
  const [sfxVol, setSfxVol] = useState(0.5);
  const [auto, setAuto] = useState(false);
  const [sfxAuto, setSFXAuto] = useState(false);

  const [play, { pause, isPlaying } ] = useSound(
    soundEnums[ambientFile].src,
    { 
      autoplay: auto,
      preload: true,
      volume: masterVol*ambientVol,
      loop: true,
      playbackRate,
      id: ambientFile
    }, 
  );

  const [playSfx, { stop, sound }] = useSound(
    soundEnums[sfxFile].src,
    { 
      autoplay: sfxAuto,
      preload: true,
      loop: false,
      volume: masterVol*sfxVol,
      id: sfxFile,
      soundEnabled
    }, 
  );

  const mute = (enable) => {
    if(enable) {
      setSFXAuto(false);
      setAuto(true);
      setSoundEnabled(true);
      play();
    }else{
      setAuto(false);
      setSFXAuto(false);
      setSoundEnabled(false);
      pause();
    };
  };

  // rate may be adjusted from 0.5x -> 4x the original speed
  const playbackSpeed = (rate) => {
    setPlaybackRate(rate);
  };

  // ambient sound volume may be adjusted from 0 (muted) -> 1 (max)
  const masterVolume = (vol) => {
    setMasterVol(vol);
  };

  // play next after song ends - requires a void/while loop or event listener to execute the if statement logic with isPlaying. 
  // could also attempt to set up an event listenr with ambient sound and playNext values to begin testing for isPlaying in order to render next mp3 file.
  const playNext = (file) => {
    if(isPlaying) {
      setNextFile(file);
    }
  };

  // force ambient sound to play new file
  const ambientSound = (file) => {
    // setSFXAuto(false);
    setAuto(true);
    setAmbientFile(file);
    pause();
  };

  // force sfx to paly new sound
  const sfxSound = (file) => {
    setSFXAuto(true); // keeps buttons from triggering upon first click while muted
    setAuto(true);
    
    // if file is different than current sfxfile, unmount current sound
    if(sfxFile!==file) {
      sound.unload(sfxFile)
    }
    // play next sound
    setSfxFile(file, nextOne(file));
  };

  // ambient sound volume may be adjusted from 0 (muted) -> 1 (max)
  const ambientVolume = (vol) => {
    setAmbientVol(vol);
  };

  // volume of sound effects may be adjusted from 0 (muted) -> 1 (max)
  const sfxVolume = (vol) => {
    setSfxVol(vol);
  };

  const nextOne = (file) => {
    playSfx(file);
  };

  return { mute, playbackSpeed, masterVolume, playNext, ambientSound, sfxSound, ambientVolume, sfxVolume, soundEnabled, playbackRate, masterVol, nextFile, ambientFile, sfxFile, ambientVol, sfxVol };
};