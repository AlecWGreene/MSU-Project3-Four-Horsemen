// Game container holds the game screen and buttons/ features for user control.

import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/Tower_Base.png';

import "./style.css";

export default function GameContainer(props) {
    return <main {...props}> 
      <Container fluid>
        <div className="row">
            <div className="col-sm-10 border-temp1">
                <div>
                    
                </div>
            </div>
            <div className="col-sm-2 border-temp2">
                <div>
                    <img src={logo} width="100" height="100" />
                </div>
                <div>
                    <button type="" className="button">Settings</button>
                </div>
            </div>
        </div>
      </Container>
        
    </main> 
   
    ;
}