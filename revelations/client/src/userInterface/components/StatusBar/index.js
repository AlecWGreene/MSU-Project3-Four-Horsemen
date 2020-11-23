import React, { useContext } from 'react';
import './style.css'

// USER STATUS images
import life from "../../assets/life.png"
import money from "../../assets/money.png"
import { GameStateContext } from '../../pages/GamePage';

function StatusBar() {

    const [state, dispatch] = useContext(GameStateContext);

    return (
        <div className="status-bar-container">
            {/* Health */}
            <div className="row justify-content-center align-items-center">
                <div id="customFont" className="col-sm-2 text-center">
                    <img id="user-status-icons" src={life} />
                </div>
                <div className="col-sm-6 status-font text-center">
                    {/* { health } */} HEALTH REMAINING: {state.gameState.playerLives}
                </div>
            </div>
            
            {/* Wealth */}
            <div className="row justify-content-center align-items-center">
                <div id="customFont" className="col-sm-2 text-center">
                    <img id="user-status-icons" src={money} />
                </div>
                <div className="col-sm-6 status-font text-center">
                    {/* { wealth } */} WEALTH EARNED: ${state.gameState.playerMoney}
                </div>
            </div>  
        </div>
    )
}

export default React.memo(StatusBar)