// Game container holds the game screen and buttons/ features for user control.
import React from 'react';
import { useAuth } from "../../components/UserAuth";
import API from "../../../utils/API"
import history from "../../../utils/history";
import Container from 'react-bootstrap/Container';
import Tower_Base from '../../assets/Tower_Base.png';
import Tower_Barrel from '../../assets/Tower_Barrel.png';
import Wall_Connection from '../../assets/Wall_Connection.png';
import Tower_Laser from '../../assets/Tower_Laser4.png';

// Import button handlers
import addTower from "../../pages/GameUtils/addTower.js";
import addTowerBase from "../../pages/GameUtils/addTowerBase.js";
import addWall from "../../pages/GameUtils/addWall.js";

import "./style.css";

export default function GameContainer(props) {

    let auth = useAuth()

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

    return <Container fluid className="h-100">
            <div className="row h-100">
                <div className="col-sm-10 h-100 test-gameDiv">
                    {props.children}
                </div>

                <div className="col-sm-2 redscreen">

                    <div className="row">
                        <div className="col-sm-2 ">
                            <button onMouseDownCapture={()=>{}} onMouseUpCapture={addTowerBase}>
                                <img src={Tower_Base} width="100" height="100" />
                            </button>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col-sm-2 ">
                            <button onMouseDownCapture={()=>{}} onMouseUpCapture={addTower}>
                                <img src={Tower_Barrel} width="100" height="100" />
                            </button>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col-sm-2 ">
                            <button onMouseDownCapture={()=>{}} onMouseUpCapture={addTower}>
                                <img src={Tower_Laser} width="100" height="100" />
                            </button>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col-sm-2 ">
                            <button onMouseDownCapture={()=>{}} onMouseUpCapture={addWall}>
                                <img src={Wall_Connection} width="100" height="100" /> 
                            </button>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col-sm-2 ">
                            <button type="button" className="button">
                                Settings
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-2 ">
                            <button
                            className="button"
                            type="button"
                            onClick={userLogout}
                            >
                                {auth.user.auth === "user" ? "Exit" : "Exit without Save" }
                            </button>
                        </div>
                    
                    </div> 
                    
                    <div className="row">
                        <div className="col-sm-2 ">
                            <button
                            className="button"
                            type="button"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-2 ">
                            <button
                                className="button"
                                type="button"
                                onClick={handleDelete}
                                disabled={isGuest}
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>
                    

                    <div className="mb-1">
                        Game Page: { username }
                    </div>

                </div>
                <div>
                    <button type="button" className="button">
                    Settings
                    </button>
                </div> 
            </div>      
      </Container>;
}
