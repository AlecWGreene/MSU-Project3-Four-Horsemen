import React from "react";
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Accordion from '../Accordion/index';
import UserForm from '../Form/index';
import "./style.css";

function settingsModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="custom-padding">
            <UserForm />
          </div>
      
        </Modal.Body>
      </Modal>
    );
  }

  export default settingsModal;