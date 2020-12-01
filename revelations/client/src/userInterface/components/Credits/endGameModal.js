import React, {useContext, useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import "./style.css";
import { GameStateContext } from "../../pages/GamePage.js";

function EndGameModal(props) {

  const [isVisible, setIsVisible] = useState(false)
  const [state, dispatch] = useContext(GameStateContext);
  
  useEffect(() => {
    console.log("Game over changed");
    if(state.runtimeState.isGameOver){
      console.log("Game is over");
    }
  }, [state.runtimeState.isGameOver]);

  return (
    <Modal
      {...props}
      show={isVisible}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <div className="container">
        <div className="row align-items-center d-flex">
          <div id="codaFont" className="text-center col-sm-12">
              <label id="customFont">Credits</label>
          </div>
          <div className="row align-items-center d-flex">
            <div className="row justify-content-center">
              <ul className="aldrich-font">
                <p>Development Team </p>
                <p>Project Lead -------------------------------- Alec Greene</p>
                <p>Front End ----------------------------------- Maria Jimena Alvarez</p>
                <p>Back End/Sound Suite ------------------------ Sebasatian Arrazola</p>
                <p>Input Handler ------------------------------- Ron Pitts</p>
                <p>Game Engine/Renderer ------------------------ Alec Greene</p>
              </ul>
            </div>
          </div>
      </div>

      </div>
      </Modal.Body>
    </Modal>
  );
}

  export default EndGameModal;