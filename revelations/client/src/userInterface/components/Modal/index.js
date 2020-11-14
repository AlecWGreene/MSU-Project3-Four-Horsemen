import React, {render} from "react";
import Button from 'react-bootstrap/Button';
import Settings from './settingsModal';
import './style.css';

function Modal() {

    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <div variant="primary" onClick={() => setModalShow(true)}>
          LOGIN
        </div>
  
        <Settings
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default Modal;
  
//   render(<App />);