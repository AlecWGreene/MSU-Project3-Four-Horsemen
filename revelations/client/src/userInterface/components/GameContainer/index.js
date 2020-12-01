// Game container holds the game screen and buttons/ features for user control.
import React, { useContext, useEffect, useState, useRef } from 'react';
import { useAuth } from "../../components/UserAuth";
import { useSfx } from "../../components/SoundSuite/index";
import API from "../../../utils/API"
import history from "../../../utils/history";
import Container from 'react-bootstrap/Container';
import { GameStateContext } from '../../pages/GamePage.js'; 
import GameSettingsModal from '../GameSettingsModal/index';
import LogInModal from '../LogInModal/index'
import GameButton from "../GameButton";
import Sidebar from "../Sidebar";
import StatusBar from "../StatusBar";
import useIndexedDb from "../../../utils/hooks/useIndexedDB";

// Button images
import redButton from "../../assets/red-btn.png"
import "./style.css";

export default function GameContainer(props) {
    //Load hooks
    const { saveGame } = useIndexedDb();
    const sfx = useSfx();
    const [state, dispatch] = useContext(GameStateContext); 

    // Red button handler
    const redButtonHandler = () => {
        sfx.sfxSound('Sound_pop_0');
        sfx.ambientSound('Sound_background_1');
        state.manager.sendWave();
    }
    // Pause handler
    const handlePause = () => {
        if(state.runtimeState.isPaused){
            state.manager.sendWave();
        }
        else{  
            state.manager.pause();
        }
    }

    console.log(state.uiState);
    
    return <Container fluid className="h-100">
        <div className="row h-100">
            {/* Game Frame */}
            <div className="col-lg-10 h-100 game-dispay">
                {props.children}
            </div>
            {/* UI Frame */}
            <div className="col-lg-2 h-100 glow">
                 {/* User Info */}
                {/* <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 text-center">
                            <div className="game-title">
                                A s h e N   
                            </div>
                            <div className="game-title">
                                Void
                            </div>
                        </div>
                    </div>
                </div>                 */}
                <div className="status-bar">
                    <StatusBar />
                </div>
                <div className="side-bar">
                    <Sidebar view={state.uiState?.sidebarView || "Standard"}/>
                </div>
                {/* Play|Pause buttons */}
                <div className="row justify-content-center">
                    <button onClickCapture={redButtonHandler}>
                        <img className="bg-red-btn" src={redButton} />
                    </button>
                </div>
                <div className="row justify-content-center">
                    <button 
                    className="playpause-btn aldrich-font"
                    type="button"
                    onClickCapture={handlePause}
                    >
                        PAUSE
                    </button>
                </div>
                <div className="row justify-content-center">
                    <button 
                    style={{width: '15vw'}}
                    type="button"
                    onClick={() => saveGame(state.manager)}
                    >
                        <GameSettingsModal />
                    </button>
                </div>
            </div>             
        </div> 
    </Container>
}