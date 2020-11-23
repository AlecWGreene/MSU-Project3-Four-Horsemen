import React from 'react';
import Settings from "../../pages/Settings"
import Gear from "../../assets/metal-gear.png"

export default function Modal() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div
      style={{marginBottom:'7px'}}
      onClick={() => setModalShow(true)}>
        <img className="settings-gear" src={Gear} />
      </div>
      <Settings
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}