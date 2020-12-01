import React, { useEffect, useState, useContext } from "react";

// Component imports
import GameButton from "../GameButton";
import { GameStateContext } from "../../pages/GamePage.js";
import UpgradeButton from "../UpgradeButton";

// Utility method imports
import { convertScreenPointToMapTile } from "../../pages/GamePage.js";
import GameEnums from "../../../engine/GameEnums.js";

// Image imports
import Tower_Base from '../../assets/Tower_Base.png';
import Tower_Barrel from '../../assets/Tower_Barrel.png';
import Tower_2Barrel from '../../assets/Tower_2Barrel.png';
import Tower2_Barre2 from '../../assets/Tower_2Barrel2.png';
import Tower_3Barrel from '../../assets/Tower_3Barrel.png';
import Wall_Connection from '../../assets/Wall_Connection.png';
import Tower_Laser from '../../assets/Tower_Laser1.png';
import Tower_Laser2 from '../../assets/Tower_Laser2.png';
import Tower_Laser3 from '../../assets/Tower_Laser3.png';
import Tower_Laser4 from '../../assets/Tower_Laser4.png';


function Sidebar(props){
    const [view, setView] = useState(props.view);
    const [state, dispatch] = useContext(GameStateContext);

    const dispatchHandler = (actionType) => {
        return (event, data) => {
            const tile = convertScreenPointToMapTile({ 
                        x: event.screenX - state.frameSize.rect.left, 
                        y: event.screenY - state.frameSize.rect.top
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

    // Upgrade the selected tower0
    const upgradeHandler = (archtype) => {
        return () => {
            state.manager.upgradeTower(state.uiState.selection, archtype);
        };
    }

    return <div className="side-bar-container">
        {
            props.view === "Standard" ? 
            // Standard View
            (
                <>
                    <div className="row justify-content-center game-sprite">
                        <GameButton src={Wall_Connection} height={75} width={75} callback={dispatchHandler("addWall")}/>
                    </div>

                    <div className="row justify-content-center game-sprite">
                        <GameButton src={Tower_Base} height={75} width={75} callback={dispatchHandler("addBase")}/>
                    </div>

                    <div className="row justify-content-center game-sprite">
                        <GameButton src={Tower_Barrel} height={100} width={100} callback={dispatchHandler("addTowerBarrel")}/>
                    </div>

                    <div className="row justify-content-center game-sprite">
                        <GameButton src={Tower_Laser} height={100} width={100} callback={dispatchHandler("addTowerLaser")}/>
                    </div>
                </>
            ) : (
                props.view === "TowerCannon" ? 
                //
                (
                    <>
                        <div className="row justify-content-center">
                            <UpgradeButton src={Tower_2Barrel} height={100} width={100} callback={upgradeHandler("Tower_Cannon2")}/>
                        </div>

                        <div className="row justify-content-center">
                            <UpgradeButton src={Tower2_Barre2} height={100} width={100} callback={upgradeHandler("Tower_Cannon3")}/>
                        </div>

                        <div className="row justify-content-center">
                            <UpgradeButton src={Tower_3Barrel} height={100} width={100} callback={upgradeHandler("Tower_Cannon4")}/>
                        </div>
                    </>
                ) : (
                    props.view === "TowerLaser" ? (
                        <>
                            <div className="row justify-content-center">
                                <UpgradeButton src={Tower_Laser2} height={100} width={100} callback={upgradeHandler("Tower_Laser2")}/>
                            </div>

                            <div className="row justify-content-center">
                                <UpgradeButton src={Tower_Laser3} height={100} width={100} callback={upgradeHandler("Tower_Laser3")}/>
                            </div>

                            <div className="row justify-content-center">
                                <UpgradeButton src={Tower_Laser4} height={100} width={100} callback={upgradeHandler("Tower_Laser4")}/>
                            </div>
                        </>
                    ) : ( 
                        undefined
                    )
                )
            )  

        }
    </div>
}

export default Sidebar;