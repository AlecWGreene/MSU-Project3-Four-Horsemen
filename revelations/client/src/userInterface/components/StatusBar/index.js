import React from 'react';
import './style.css'

// USER STATUS images
import life from "../../assets/life.png"
import money from "../../assets/money.png"

export default function StatusBar() {
    return (
        <div className="status-bar-container">
            {/* Health */}
            <div className="row justify-content-center align-items-center">
                <div id="customFont" className="col-sm-2 text-center">
                    <img id="user-status-icons" src={life} />
                </div>
                <div className="col-sm-6 status-font text-center">
                    {/* { health } */} HEALTH REMAINING: 3
                </div>
            </div>
            
            {/* Wealth */}
            <div className="row justify-content-center align-items-center">
                <div id="customFont" className="col-sm-2 text-center">
                    <img id="user-status-icons" src={money} />
                </div>
                <div className="col-sm-6 status-font text-center">
                    {/* { wealth } */} WEALTH EARNED: $500
                </div>
            </div>  
        </div>
    )
}
