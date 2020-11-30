import React, { useEffect, useState, useContext } from "react";

// Component imports
import GameButton from "../GameButton";
import { GameStateContext } from "../../pages/GamePage.js";

// Utility method imports
import { convertScreenPointToMapTile } from "../../pages/GamePage.js";
import GameEnums from "../../../engine/GameEnums.js";

// Image imports
import Tower_Base from '../../assets/Tower_Base.png';
import Tower_Barrel from '../../assets/Tower_Barrel.png';
import Wall_Connection from '../../assets/Wall_Connection.png';
import Tower_Laser from '../../assets/Tower_Laser4.png';

function Sidebar(props){
    const [view, setView] = useState(props.view);
    const [state, dispatch] = useContext(GameStateContext);

    const dispatchHandler = (actionType) => {
        return (event, data) => {
            const tile = convertScreenPointToMapTile({ 
                         x: event.screenX, 
                         y: event.screenY
                        }, state.frameSize, state.scaleRatio, state.gameState);
            if(tile === false) return;
            let success = false;
            switch(actionType){
                case "addWall":
                    success = state.manager.placeWall(tile);
                    break;
                case "addBase":
                    success = state.manager.placeBase(tile);
                    break;
                case "addTowerBarrel":
                    success = state.manager.placeTower("Tower_Cannon1", tile);
                    break;
                case "addTowerLaser":
                    success = state.manager.placeTower("Tower_Laser1", tile);
                    break;
            }
            if(success === false) return;
            dispatch({ 
                type: actionType, 
                payload: tile
            });
        }
    }

    // Delays the rendering of the sidebar to match game updates
    useEffect(() => {
        requestAnimationFrame(() => setView(props.view));
    }, [props.view]);

    return <div className="side-bar-container">
        <div className="row justify-content-center">
            <GameButton src={Wall_Connection} height={75} width={75} callback={dispatchHandler("addWall")}/>
        </div>

        <div className="row justify-content-center">
            <GameButton src={Tower_Base} height={75} width={75} callback={dispatchHandler("addBase")}/>
        </div>

        <div className="row justify-content-center">
            <GameButton src={Tower_Barrel} height={75} width={75} callback={dispatchHandler("addTowerBarrel")}/>
        </div>

        <div className="row justify-content-center">
            <GameButton src={Tower_Laser} height={75} width={75} callback={dispatchHandler("addTowerLaser")}/>
        </div>
    </div>
}

export default Sidebar;