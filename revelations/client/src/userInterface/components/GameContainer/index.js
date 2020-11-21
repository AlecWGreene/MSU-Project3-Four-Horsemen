// Game container holds the game screen and buttons/ features for user control.
import React, { useContext, useEffect, useState, useRef } from 'react';
import { useAuth } from "../../components/UserAuth";
import API from "../../../utils/API"
import history from "../../../utils/history";
import Container from 'react-bootstrap/Container';
import { GameStateContext } from '../../pages/GamePage.js'; 
import GameSettingsModal from '../GameSettingsModal/index';
import LogInModal from '../LogInModal/index'
import GameButton from "../GameButton";
import Sidebar from "../Sidebar";

// Button images
import redButton from "../../assets/red-btn.png"

import "./style.css";

export default function GameContainer(props) {

    let auth = useAuth()
    const [state, dispatch] = useContext(GameStateContext); 

    const username = auth.user.data === null ? auth.user.auth : auth.user.data.username;
    const isGuest = auth.user.data === null ? true : false;
    
    const userLogout = (event) => {
        event.preventDefault();
        auth.logout(() => { history.push("/") })
    };

    const handleDelete = (event) => {
        event.preventDefault();
        const id = auth.user.data._id;
        API.deleteUser(id)
            .then((res) => {
              console.log(res.data)
              auth.logout(() => { history.push("/") })
            })
    };

    const dispatchHandler = useRef(null);

    useEffect(() => {
        dispatchHandler.current = (event,ui,type)=>{
            event.stopPropagation();
            event.cancelBubbles = true;
            dispatch({
                type: type, 
                payload: { 
                    x: event.screenX,
                    y: event.screenY,
                    data: {
                        event: event,
                        instance: this,
                        ui: ui,
                        args: arguments
                    }
                }
            })
        }
    }, []);
    
    return <Container fluid className="h-100">
        <div className="row h-100">
            {/* Game Frame */}
            <div className="col-sm-10 h-100 game-dispay">
                {props.children}
            </div>

            {/* UI Frame */}
            <div className="col-sm-2 glow">

                 {/* User Info */}
                 <div className="container">
                   <div className="row">
                    <div id="customFont" className="col-sm-12 username text-center">
                        { username }
                    </div>
                    <div id="customFont" className="col-sm-12 username text-center">
                        {/* { lives } */}
                    </div>
                    <div id="customFont" className="col-sm-12 username text-center">
                        {/* { money } */}
                    </div>
                </div> 
                </div>

                <div className="side-bar">
                    <Sidebar view={"Standard"}/>
                </div>
               

                {/* Play|Pause buttons */}
                <div className="row justify-content-center">
                    <button>
                        <img className="bg-red-btn" src={redButton} />
                    </button>
                </div>
                <div className="row justify-content-center">
                    <button 
                    className="playpause-btn aldrich-font"
                    type="button"
                    >
                        PAUSE
                    </button>
                </div>

                <div className="row justify-content-center">
                    <button 
                    // className="custom-options-btn aldrich-font"
                    type="button"
                    style={{width: '15vw'}}
                    type="button">
                        <GameSettingsModal />
                    </button>
                </div>
            </div>             
        </div> 
    </Container>
}
