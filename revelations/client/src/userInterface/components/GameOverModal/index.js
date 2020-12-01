import React, {useContext, useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import "./style.css";
import { useAuth } from "../UserAuth";
import { GameStateContext } from "../../pages/GamePage.js";
import history from "../../../utils/history";

function GameOverModal(props) {

    const auth = useAuth();

    const handleClose = (event) => {
        event.preventDefault();
        auth.logout(() => { history.push("/") })
    };

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Body>
                <div className="container">
                    <div className="row align-items-center d-flex">
                    <div id="codaFont" className="text-center col-sm-12">
                        <label id="customFont">Game Over</label>
                    </div>
                    <div className="row align-items-center d-flex">
                        <div className="row justify-content-center">
                            Thanks For Playing!
                        </div>
                    </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Exit Game
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default GameOverModal;