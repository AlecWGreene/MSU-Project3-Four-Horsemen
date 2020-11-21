// Game container holds the game screen and buttons/ features for user control.
import React, { useContext, useState } from 'react';
import { useAuth } from "../../components/UserAuth";
import API from "../../../utils/API"
import history from "../../../utils/history";
import Container from 'react-bootstrap/Container';
import Tower_Base from '../../assets/Tower_Base.png';
import Tower_Barrel from '../../assets/Tower_Barrel.png';
import Wall_Connection from '../../assets/Wall_Connection.png';
import Tower_Laser from '../../assets/Tower_Laser4.png';
import Draggable from 'react-draggable';
import { GameStateContext } from '../../pages/GamePage.js'; 
import GameSettingsModal from '../GameSettingsModal/index';
import LogInModal from '../LogInModal/index'

// Button images
import redButton from "../../assets/red-btn.png"

// Import button handlers
import addTower from "../../pages/GameUtils/addTower.js";
import addTowerBase from "../../pages/GameUtils/addTowerBase.js";
import addWall from "../../pages/GameUtils/addWall.js";

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

   const [basePosition, setBasePosition] = useState(null)
    const dispatchHandler = (event,ui,type)=>{dispatch({
        type: type, 
        payload: { 
            x: event.screenX,
            y: event.screenY
        }
    })}

    return <Container fluid className="h-100">
        <div className="row h-100">
            <div className="col-sm-10 h-100 game-dispay">
                {props.children}
            </div>

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
                    <div className="side-bar-container">
                        <div className="row justify-content-center">
                            <div className="col-sm-5">
                                <Draggable position={basePosition} onStop={(event,ui)=>{setBasePosition({x:0,y:0}); dispatchHandler(event,ui,"addTowerBase")}} onStart={(event,ui)=>{setBasePosition(null)}}>
                                    <img src={Tower_Base} width="75" height="75" draggable="false"/> 
                                </Draggable>
                            </div> 
                            <div className="col-sm-5">
                                <Draggable position={basePosition} onStop={(event,ui)=>{setBasePosition({x:0,y:0}); dispatchHandler(event,ui,"addTowerBarrel")}} onStart={()=>{setBasePosition(null)}}>
                                        <img src={Tower_Barrel} width="75" height="75" draggable="false"/>
                                </Draggable>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-sm-5">
                                <Draggable position={basePosition} onStop={(event,ui)=>{setBasePosition({x:0,y:0}); dispatchHandler(event,ui,"addWall")}} onStart={()=>{setBasePosition(null)}}>
                                    <img src={Wall_Connection} width="75" height="75" draggable="false"/> 
                                </Draggable>
                            </div> 
                            <div className="col-sm-5">
                                <Draggable position={basePosition} onStop={(event,ui)=>{setBasePosition({x:0,y:0}); dispatchHandler(event,ui,"addTowerLaser")}} onStart={()=>{setBasePosition(null)}}>
                                    <img src={Tower_Laser} width="75" height="75" draggable="false"/>
                                </Draggable>
                            </div> 
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col">
                        <button>
                        <img className="bg-red-btn" src={redButton} />
                        </button>
                    </div>
                </div>

               

                {/* Play|Pause buttons */}
                <div className="row">
                    <div className="col-sm-4">
                        <button 
                        class="playpause-btn aldrich-font"
                        type="button"
                        >
                        PLAY
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <button 
                        class="playpause-btn aldrich-font"
                        type="button"
                        >
                            PAUSE
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-2 ">
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
        </div> 
    </Container>
}
