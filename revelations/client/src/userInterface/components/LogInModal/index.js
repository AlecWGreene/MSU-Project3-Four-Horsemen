import React from "react";
import LogIn from "../../pages/LogIn";
import { useSfx } from "../../components/SoundSuite/index";
import './style.css';

function Modal() {

  const sfx = useSfx();
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div
        className="homepage-btns" 
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          sfx.sfxSound('Sound_pop_0');
          setModalShow(true)
        }}
      >
        LOGIN
      
      </div>
      <LogIn
        show={modalShow}
        onHide={() => {
          sfx.sfxSound('Sound_pop_0');
          setModalShow(false)
        }}
      />
    </>
  );
};

export default Modal;