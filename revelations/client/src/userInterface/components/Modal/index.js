import React, {render} from "react";
import Button from 'react-bootstrap/Button';
import Settings from './settingsModal';
import './style.css';

function Modal() {

    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <Settings
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default Modal;
  
//   render(<App />);