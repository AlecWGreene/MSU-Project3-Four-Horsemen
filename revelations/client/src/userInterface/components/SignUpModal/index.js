import React, {render} from "react";
import SignUp from "../../pages/SignUp";
import './style.css';

function Modal() {

    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <div
        className="homepage-btns"
        onClick={() => setModalShow(true)}>
          SIGN UP
        
        </div>
        <SignUp
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }




  export default Modal;
  
//   render(<App />);