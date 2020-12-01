import React from "react";
import { useAuth } from "../components/UserAuth";
import history from "../../utils/history";
import Modal from 'react-bootstrap/Modal';
 
function Rules(props) {

  let auth = useAuth()

  const userAuthState = () => {
      auth.signinGuest(() => { history.push("/game") })
  };
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Body>
        <div className="custom-border-lg">
          <div  className="container">
            <div className="Row justify-content-center d-flex">
              <div className="col-md-6"> 
                <div className="form-group">
                  <label id="customFont" htmlFor="rules">Rules</label>
                    <div id="lipsum" className="text-center">
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
        </div>
      </Modal.Body>
    </Modal>
    );
  }

export default Rules