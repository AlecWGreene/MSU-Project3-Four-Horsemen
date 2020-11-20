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

// Button images
import bigButton from "../../assets/big-red-btn.png"

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


    return <Container fluid className="h-100">
            <div className="row h-100">
                <div className="col-sm-10 h-100 game-dispay">
                    {props.children}
                </div>

                <div className="col-sm-2 glow">
                        <div className="side-bar">

                        <div className="row">
                        <div className="col-sm-2 ">
                            <Draggable position={basePosition} onStop={(event,ui)=>{setBasePosition({x:0,y:0})}} onStart={(event,ui)=>{setBasePosition(null)}}>
                            <button >
                                <img src={Tower_Base} width="100" height="100" /> 
                            </button>
                            </Draggable>
                        </div> 
                    </div>
                    

                        <div className="row">
                        <div className="col-sm-2 ">
                        <Draggable position={basePosition} onStop={(event,ui)=>{setBasePosition({x:0,y:0})}} onStart={()=>{setBasePosition(null)}}>
                            <button >
                                <img src={Tower_Barrel} width="100" height="100" />
                            </button>
                            </Draggable>
                        </div> 
                    </div>

                        <div className="row">
                        <div className="col-sm-2 ">
                        <Draggable position={basePosition} onStop={(event,ui)=>{setBasePosition({x:0,y:0})}} onStart={()=>{setBasePosition(null)}}>
                            <button >
                                <img src={Tower_Laser} width="100" height="100" />
                            </button>
                            </Draggable>
                        </div> 
                    </div>
                
                        <div className="row">
                        <div className="col-sm-2 ">
                        <Draggable position={basePosition} onStop={(event,ui)=>{setBasePosition({x:0,y:0})}} onStart={()=>{setBasePosition(null)}}>
                            <button>
                                <img src={Wall_Connection} width="100" height="100" /> 
                            </button>
                            </Draggable>
                        </div> 
                    </div>

                        <div className="row ">
                            <div className="col">
                                <button>
                                <img className="bg-red-btn" src={bigButton} />
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-2 ">
                                <button 
                                className="custom-options-btn aldrich-font"
                                type="button"
                                style={{width: '15vw'}}
                                type="button">
                                    Settings
                                </button>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm-2 ">
                                <button
                                className="custom-options-btn aldrich-font"
                                type="button"
                                style={{width: '15vw'}}
                                onClick={userLogout}
                                >
                                    {auth.user.auth === "user" ? "Quit" : "Abdandon Game" }
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-2">
                                <button
                                className="custom-options-btn aldrich-font"
                                type="button"
                                style={{width: '15vw'}}
                                type="button"
                                >
                                    Save
                                </button> 
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-sm-2 ">
                                <button
                                className="custom-options-btn aldrich-font"
                                type="button"
                                style={{width: '15vw'}}
                                onClick={handleDelete}
                                disabled={isGuest}
                                >
                                    Delete Account
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

                          {/* User Info */}

                        <div className="row">
                            <div id="customFont" className="col-sm-12 username text-center">
                                { username }
                            </div>
                        </div>
                    </div>                  
                </div> 
            </div> 
      </Container>
}
