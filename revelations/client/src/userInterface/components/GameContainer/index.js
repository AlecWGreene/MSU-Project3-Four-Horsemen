// Game container holds the game screen and buttons/ features for user control.

import React from 'react';
import Container from 'react-bootstrap/Container';
import Tower_Base from '../../assets/Tower_Base.png';
import Tower_Barrel from '../../assets/Tower_Barrel.png';
import Wall_Connection from '../../assets/Wall_Connection.png';
import Tower_Laser from '../../assets/Tower_Laser4.png';

// Import button handlers
import addTower from "../../pages/GameUtils/addTower.js";
import addTowerBase from "../../pages/GameUtils/addTowerBase.js";
import addWall from "../../pages/GameUtils/addWall.js";

import "./style.css";

export default function GameContainer(props) {
    return <main {...props}> 
      <Container fluid>
        <div className="row">
            <div className="col-sm-10 test-gameDiv">
                {props.children}
            </div>

            <div className="redscreen">
               <div className="row">
                   <div class="col-sm-2 ">
                       <button onMouseDownCapture={()=>{}} onMouseUpCapture={addTowerBase}>
                           <img src={Tower_Base} width="100" height="100" />
                       </button>
                    </div> 
                </div>
                <div className="row">
                   <div class="col-sm-2 ">
                       <button onMouseDownCapture={()=>{}} onMouseUpCapture={addTower}>
                           <img src={Tower_Barrel} width="100" height="100" />
                       </button>
                        
                    </div> 
                </div>
                <div className="row">
                   <div class="col-sm-2 ">
                       <button onMouseDownCapture={()=>{}} onMouseUpCapture={addTower}>
                           <img src={Tower_Laser} width="100" height="100" />
                       </button>
                    </div> 
                </div>
                <div className="row">
                   <div class="col-sm-2 ">
                       <button onMouseDownCapture={()=>{}} onMouseUpCapture={addWall}>
                          <img src={Wall_Connection} width="100" height="100" /> 
                       </button>
                    </div> 
                </div>
                <div>
                    <button type="button" className="button">
                    Settings
                    </button>
                </div> 
            </div>
        </div>        
      </Container>
        
    </main> 
   
    ;
}