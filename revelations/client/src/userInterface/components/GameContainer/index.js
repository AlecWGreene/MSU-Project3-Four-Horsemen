// Game container holds the game screen and buttons/ features for user control.
import React from 'react';
import { useAuth } from "../../components/UserAuth";
import API from "../../../utils/API"
import history from "../../../utils/history";
import Container from 'react-bootstrap/Container';
import logo from '../../assets/Tower_Base.png';

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

    return <main {...props}> 
      <Container fluid>
        <div className="row">
            <div className="col-sm-10 border-temp1">
                <div>
                    {props.children}
                </div>
            </div>
            <div className="col-sm-2 border-temp2">
                <div>
                    <img src={logo} width="100" height="100" />
                </div>
                <div>
                    <button type="" className="button">Settings</button>
                    <div className="display-4 mb-1">
                        Game Page: { username }
                    </div>

                    <button
                        className="btn btn-info btn-block"
                        type="button"
                        onClick={userLogout}
                    >
                        {auth.user.auth === "user" ? "Exit" : "Exit without Save" }
                    </button>

                    <button
                        className="btn btn-info btn-block"
                        type="button"
                    >
                        Save
                    </button>

                    <button
                        className="btn btn-info btn-block"
                        type="button"
                        onClick={handleDelete}
                        disabled={isGuest}
                    >
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
      </Container>
        
    </main> 
   
    ;
}