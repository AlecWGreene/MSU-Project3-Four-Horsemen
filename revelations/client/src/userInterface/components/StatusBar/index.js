import React, { useContext } from 'react';
import './style.css'

// USER STATUS images
import life from "../../assets/life.png";
import money from "../../assets/money.png";
import waves from "../../assets/wave.png";
import { GameStateContext } from '../../pages/GamePage';

function StatusBar() {

    const [state, dispatch] = useContext(GameStateContext);

    return (
        <div className="status-bar-container">
            {/* Health */}
            <div className="row justify-content-center align-items-center">
                <div id="customFont" className="col-sm-3 text-center">
                    <img id="user-status-icons" src={life} />
                </div>
                <div className="col-sm-5 status-font text-center">
                    HEALTH REMAINING: {state.gameState.playerLives}
                </div>
            </div>
            
            {/* Wealth */}
            <div className="row justify-content-center align-items-center">
                <div id="customFont" className="col-sm-3 text-center">
                    <img id="user-status-icons" src={money} />
                </div>
                <div className="col-sm-5 status-font text-center">
                     WEALTH EARNED: ${state.gameState.playerMoney}
                </div>
            </div>  

            {/* Waves */}
            <div className="row justify-content-center align-items-center">
                <div id="customFont" className="col-sm-3 text-center">
                    <img id="user-status-icons" src={waves} />
                </div>
                <div className="col-sm-5 status-font text-center">
                     WAVES COUNTER: #
                </div>
            </div> 
        </div>
    )
}

export default React.memo(StatusBar)