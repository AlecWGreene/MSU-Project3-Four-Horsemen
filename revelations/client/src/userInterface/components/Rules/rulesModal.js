import React from "react";
import Modal from 'react-bootstrap/Modal';
import "./style.css";

function rulesModal(props) {
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
                <label id="customFont" htmlFor="password">Rules</label>
            </div>
            <div className="row align-items-center d-flex">
              <div className="form-group col-sm-12">
                <div id="lipsum">
                    <ul>
                      <li>Ashen Void is an online tower defense game without a preset path or placement restrictions.</li>
                      <li>The player loads into the cold emptiness of space with nothing but a planet to defend and waves of enemy spaceships looking to wreak havoc.</li>
                      <li>Place walls to corrale the spaceships into strategic locations and then destroy them by building towers.</li>
                      <li>Towers require Tower bases to be built, but can be bought, sold, and upgraded without removing the base itself.</li>
                      <li>Each base must be placed on a wall segment.</li>
                      <li>Each round a new set of enemies will spawn, and as they are destroyed the player can use the cash to build or upgrade their defenses. </li>
                      <li>However, the walls must be placed in between rounds in order to guarantee that the creeps have a way through.</li>
                      <li>Got to give them a fighting chance!</li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </Modal.Body>
      </Modal>
    );
  }

  export default rulesModal;