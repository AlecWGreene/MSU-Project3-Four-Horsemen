import React from "react";
import LogIn from "../../pages/LogIn";
import './style.css';

function Modal() {

    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <div
        className="homepage-btns" 
        onClick={() => setModalShow(true)}>
          LOGIN
        
        </div>
        <LogIn
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }


  export default Modal;
  