import React, { useState, useContext, createContext } from 'react';
import useSound from 'use-sound';
import soundEnums from '../../../game/SpriteEnums.js';
import SfxOptions from '../SfxOptions/index';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './style.css'
import SfxButton from '../SfxButton/index.js';

function SoundSuite({ children }) {
  const sfx = useProvideSfx();
    
  return (
    <>
      <sfxContext.Provider value={sfx}>
        
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
  const [masterVol, setMasterVol] = useState(0.5);
  const [nextFile, setNextFile] = useState('');
  const [ambientFile, setAmbientFile] = useState('Sound_background_0');
  const [sfxFile, setSfxFile] = useState('Sound_pop_0');
  const [ambientVol, setAmbientVol] = useState(0.5);
  const [sfxVol, setSfxVol] = useState(0.5);
  const [auto, setAuto] = useState(false);
  const [sfxAuto, setSFXAuto] = useState(false);

  const [play, { pause, stop, isPlaying } ] = useSound(
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

  const [playSfx, { sound }] = useSound(
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
      play(ambientFile);
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
    
    if(ambientFile!==file) {
      setAmbientFile(file);
      if(!soundEnabled){
        return;
      }
      setAuto(true);
      pause();
    }else{
      if(!soundEnabled){
        return;
      }
      setAuto(true);
      setAmbientFile(file);
      stop();
      play();
    }
  };

  // force sfx to paly new sound
  const sfxSound = (file) => {
    if(!soundEnabled){
      return;
    }

    setSFXAuto(true); // keeps buttons from triggering upon first click while muted when set to false
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