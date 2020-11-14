import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Accordion from '../Accordion/index';
import UserForm from '../Form/index'
import "./style.css";


function loginModalTest(props) {
    return (
      <Modal
        {...props}
        //MAY NEED TO ADJUST size="sm"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          hello
          <UserForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default loginModalTest;