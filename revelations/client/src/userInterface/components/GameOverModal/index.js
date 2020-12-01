import React, {useContext, useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
//import "./style.css";
import { GameStateContext } from "../../pages/GamePage.js";

function GameOverModal(props) {

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
    </Modal>
  );
}

export default GameOverModal;