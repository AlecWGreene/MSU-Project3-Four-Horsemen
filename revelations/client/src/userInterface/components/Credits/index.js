import React, {render} from "react";
import EndGameModal from './endGameModal';
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
        <button
         id="customFont"
        className="custom-options-btn text-center"
        type="button"
        style={{width: '15vw'}}
        
        >
          Credits
        </button>
      </div>

      <EndGameModal
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