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
        <div className="form-group">
          <label id="customFont" htmlFor="password">Rules</label>
          <div id="lipsum">
              <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Nulla nec elit ac orci finibus porta.</li>
                  <li>Pellentesque pellentesque erat id massa ornare, nec sollicitudin felis hendrerit.</li>
                  <li>Vestibulum eget risus vel diam semper egestas sit amet sed felis.</li>
                  <li>Vivamus dictum elit non erat ultricies, blandit tempor urna sodales.</li>
                  <li>Ut dignissim ligula sed leo finibus, a volutpat sapien pellentesque.</li>
              </ul>
          </div>
        </div>
      
        </Modal.Body>
      </Modal>
    );
  }

  export default rulesModal;