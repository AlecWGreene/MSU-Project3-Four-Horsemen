import React, {render} from "react";
import Rules from './rulesModal';
import './style.css';

function Modal() {

    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <div 
        className="homepage-btns"
        onClick={() => setModalShow(true)}>
          RULES
        </div>
  
        <Rules
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default Modal;
  