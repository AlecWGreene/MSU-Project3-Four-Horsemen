import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSfx } from "../SoundSuite/index";

function SfxOptions() {
    const sfx = useSfx();

    // modal states and event handelers
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // volume adjustmnt event handelers
    const handleVolume = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const id = event.target.id;
        const val = parseFloat(event.target.value);
        if(id==='ambient') {
            sfx.ambientVolume(val);
        }else if(id==='sfx') {
            sfx.sfxVolume(val);
        }else if(id==='master'){
            sfx.masterVolume(val);
        };
    }

    const setDefault = (event) => {
        event.preventDefault();
        event.stopPropagation();
        sfx.ambientVolume(0.5);
        sfx.sfxVolume(0.5);
        sfx.masterVolume(1);
    };

    const muteAll = (event) => {
        event.preventDefault();
        event.stopPropagation();
        sfx.masterVolume(0);
    };

    const SoundOption = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const select = event.target.value;
        sfx.ambientSound(select);
    };

    return (
      <>
        <button variant="primary" onClick={handleShow}>
        ⚙️
        </button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sound Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label> Master: { sfx.masterVol === 0 ? 'muted' : (Math.round(sfx.masterVol*100)+'%') } </Form.Label>
                        <Form.Control type="range" id='master' min="0" max="1" step="0.01" onChange={handleVolume} value={sfx.masterVol} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Ambient: { sfx.ambientVol === 0 ? 'muted' : (Math.round(sfx.ambientVol*100)+'%') } </Form.Label>
                        <Form.Control type="range" id='ambient' min="0" max="1" step="0.01" onChange={handleVolume} value={sfx.ambientVol} disabled={ sfx.masterVol === 0 ? true : false } />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>SFX: { sfx.sfxVol === 0 ? 'muted' : (Math.round(sfx.sfxVol*100)+'%') } </Form.Label>
                        <Form.Control type="range" id='sfx'  min="0" max="1" step="0.01" onChange={handleVolume} value={sfx.sfxVol} disabled={ sfx.masterVol === 0 ? true : false } />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Select Ambient *Dev Only*</Form.Label>
                        <Form.Control as="select" onInput={SoundOption}>
                            <option>Sound_background_0</option>
                            <option>Sound_background_1</option>
                            <option>Sound_background_2</option>
                            <option>Sound_background_3</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" onClick={setDefault}>
                    Default
                </button>
                <button variant="primary" onClick={muteAll}>
                    Mute All
                </button>
            </Modal.Footer>
        </Modal>
      </>
    );
}
  
export default SfxOptions;