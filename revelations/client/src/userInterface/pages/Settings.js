import React, { useContext, useEffect, useState} from 'react';
import { useAuth } from "../components/UserAuth";
import { GameStateContext } from './GamePage.js';
import API from "../../utils/API"
import history from "../../utils/history"; 
import Modal from 'react-bootstrap/Modal';
import SfxButton from "../components/SfxButton";
import StatusBar from "../components/StatusBar";
import useIndexedDb from "../../utils/hooks/useIndexedDB";
import convertGameToJSON from '../../engine/systems/convertGameToJSON';
// import Credits from "../components/Credits/index"


export default function Settings(props) {
    // Component data setup
    const { loadGame } = useIndexedDb();
    let auth = useAuth();
    const [state, dispatch] = useContext(GameStateContext); 
    const [gamePaused, setGamePaused] = useState(null);
    const username = auth.user.data === null ? auth.user.auth : auth.user.data.username;
    const isGuest = auth.user.data === null ? true : false;

    // Event handlers
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
            });
    };
    const handleSave = (event) => {
        loadGame().then(resp => {
            const id = auth.user.data?._id ;
            if(id){
                const data = convertGameToJSON(resp);
                API.saveData(id, data)
                    .then((res)=>{
                        console.log("Save successful!");
                        console.log(res)
                    })
                    .catch((error)=>{ console.log("Save failed");console.log(error)});
            };
        }).catch(() => {})
    }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Body> 
           <div className="container">
               <div className="row justify-content-center">
                    <div id="customFont" className="col-lg-12 username text-center">
                        { username }
                    </div>
               </div>
                <div className="row justify-content-center">
                    <button
                    className="custom-options-btn aldrich-font"
                    type="button"
                    style={{width: '15vw'}}
                    onClick={userLogout}
                    >
                        {auth.user.auth === "user" ? "Quit" : "Abdandon Game" }
                    </button>
                </div>
                <div className="row justify-content-center">
                    <button
                    className="custom-options-btn aldrich-font"
                    type="button"
                    style={{width: '15vw'}}
                    type="button"
                    onClick={handleSave}
                    >
                        Save
                    </button> 
                </div>
                <div className="row justify-content-center">
                    <button
                    className="custom-options-btn aldrich-font text-center"
                    type="button"
                    style={{width: '15vw'}}
                    onClick={handleDelete}
                    disabled={isGuest}
                    >
                        Delete Account
                    </button>
                </div>
            </div>
           
           {/* Credits & Report Issue */}
           <div className="row justify-content-center">
            <div className="col-1">
                    <a href="https://github.com/AlecWGreene/MSU-Project3-Four-Horsemen" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        <span class="visually-hidden"></span>
                    </a>
                </div>
                <div className="col-1">
                    <a href="https://github.com/AlecWGreene/MSU-Project3-Four-Horsemen/issues" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bug" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6H4a3.99 3.99 0 0 1 1.333-2.982A3.983 3.983 0 0 1 8 2c1.025 0 1.959.385 2.666 1.018A3.989 3.989 0 0 1 12 6z"/>
                        </svg>
                    </a>  
                </div>
           </div>
           
            
  

        </Modal.Body> 

        {/* Sound Settings */}
        <SfxButton />

       </Modal>   
    )
}