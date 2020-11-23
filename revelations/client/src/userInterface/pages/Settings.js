import React, { useContext} from 'react';
import { useAuth } from "../components/UserAuth";
import { GameStateContext } from './GamePage.js';
import API from "../../utils/API"
import history from "../../utils/history"; 
import Modal from 'react-bootstrap/Modal';
import SfxButton from "../components/SfxButton";
import StatusBar from "../components/StatusBar";
import useIndexedDb from "../../utils/hooks/useIndexedDB";
import convertGameToJSON from '../../engine/systems/convertGameToJSON';

export default function Settings(props) {
    // Component data setup
    const { loadGame } = useIndexedDb();
    let auth = useAuth();
    const [state, dispatch] = useContext(GameStateContext); 
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
           <div>
               <div className="row justify-content-center">
                    <div id="customFont" className="col-sm-12 username text-center">
                        { username }
                    </div>
               </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
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
                <div className="row justify-content-center">
                    <div className="col-lg-6">
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
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
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
                <div className="row justify-content-center">
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-4">
                    </div>
                </div>
            </div> 
        </Modal.Body> 
        <SfxButton />
        <div className="status-bar">
            <StatusBar />
        </div>
       </Modal>   
    )
}