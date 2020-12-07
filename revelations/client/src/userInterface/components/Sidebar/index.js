import React, { useEffect, useState, useContext } from "react";
import ReactTooltip from "react-tooltip";

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
import Tower_Laser3 from '../../assets/Tower_Laser2.png';
import Tower_Laser2 from '../../assets/Tower_Laser3.png';
import Tower_Laser4 from '../../assets/Tower_Laser4.png';
import ButtonText from "../ButtonText";


function Sidebar(props){
    const [state, dispatch] = useContext(GameStateContext);
    const [currentUpgrade, setCurrentUpgrade] = useState(-1);

    useEffect(() => {
        if(state.uiState?.selection){
            setCurrentUpgrade(state.gameState.towerDirectory[parseInt(state.uiState.selection)].upgrades.currentUpgrade);
        }
    }, [props.view]);

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

    // Upgrade the selected tower
    const upgradeHandler = (archtype, index) => {
        return () => {
            if(state.manager.upgradeTower(state.uiState.selection, archtype)){
                setCurrentUpgrade(index);
            }
        };
    }

    return <div className="side-bar-container">
        {
            props.view === "Standard" ? 
            // Standard View
            (
                <>
                    <div 
                    className="row align-items-center justify-content-center game-sprite"
                    data-for="buttonDescription"
                    data-tip="Place these in between waves <br /> to redirect the enemy ships"
                    data-delay-show={"500"}
                    data-iscapture="true">
                        <GameButton src={Wall_Connection} height={75} width={75} callback={dispatchHandler("addWall")}/>
                        <ButtonText 
                            name={"Fortified Wall"}
                            cost={GameEnums.GAME_CONFIG.wallCost}
                        />
                    </div>

                    <div 
                    className="row align-items-center justify-content-center game-sprite"
                    data-for="buttonDescription"
                    data-tip="Place these in between waves to redirect <br /> the enemy ships and mount towers"
                    data-delay-show={"500"}
                    data-iscapture="true">
                        <GameButton src={Tower_Base} height={75} width={75} callback={dispatchHandler("addBase")}/>
                        <ButtonText 
                            name={"Tower Battlement"}
                            cost={GameEnums.GAME_CONFIG.baseCost}
                        />
                    </div>

                    <div 
                    className="row align-items-center justify-content-center game-sprite"
                    data-for="buttonDescription"
                    data-tip="Fires high temperature tracer rounds"
                    data-delay-show={"500"}
                    data-iscapture="true">
                        <GameButton src={Tower_Barrel} height={100} width={100} callback={dispatchHandler("addTowerBarrel")}/>
                        <ButtonText 
                            name={"Gauss Cannon"}
                            cost={GameEnums.TOWER_PREFABS["Tower_Cannon1"].stats.cost}
                        />
                    </div>

                    <div 
                    className="row align-items-center justify-content-center game-sprite"
                    data-for="buttonDescription"
                    data-tip="Fires energized plasama which can <br /> pierce through multiple ships"
                    data-delay-show={"500"}
                    data-iscapture="true">
                        <GameButton src={Tower_Laser} height={100} width={100} callback={dispatchHandler("addTowerLaser")}/>
                        <ButtonText 
                            name={"Plasma Cannon"}
                            cost={GameEnums.TOWER_PREFABS["Tower_Laser1"].stats.cost}
                        />
                    </div>
                </>
            ) : (
                props.view === "TowerCannon" ? 
                //
                (
                    <>
                        <div 
                            className="row align-items-center justify-content-center game-sprite"
                            data-for="buttonDescription"
                            data-tip="Adds another barrel for twice the damage"
                            data-delay-show={"500"}
                            data-iscapture="true">
                            <UpgradeButton 
                                active={currentUpgrade >= 0 ? false : true} 
                                src={Tower_2Barrel} 
                                height={100} 
                                width={100} 
                                callback={upgradeHandler("Tower_Cannon2", 0)}/>
                            <ButtonText 
                                active={currentUpgrade >= 0 ? false : true}
                                name={"Double Barrel"}
                                cost={GameEnums.TOWER_PREFABS["Tower_Cannon2"].stats.cost}
                            />
                        </div>

                        <div 
                            className="row align-items-center justify-content-center game-sprite"
                            data-for="buttonDescription"
                            data-tip="Uses a strontium coating on its shells to <br /> wreak havoc on its targets"
                            data-delay-show={"500"}
                            data-iscapture="true">
                            <UpgradeButton 
                                active={currentUpgrade >= 1 ? false : true} 
                                src={Tower2_Barre2} 
                                height={100} 
                                width={100} 
                                callback={upgradeHandler("Tower_Cannon3", 1)}/>
                            <ButtonText 
                                active={currentUpgrade >= 1 ? false : true}
                                name={"Infernal Cannon"}
                                cost={ (currentUpgrade < 0 ? GameEnums.TOWER_PREFABS["Tower_Cannon2"].stats.cost : 0) + GameEnums.TOWER_PREFABS["Tower_Cannon3"].stats.cost}
                            />
                        </div>

                        <div 
                            className="row align-items-center justify-content-center game-sprite"
                            data-for="buttonDescription"
                            data-tip="Using a modified turret from a galactic battlecruiser <br /> a third barrel will help take down the toughest foes"
                            data-delay-show={"500"}
                            data-iscapture="true">
                            <UpgradeButton 
                                active={currentUpgrade >= 2 ? false : true}
                                src={Tower_3Barrel} 
                                height={100} 
                                width={100} 
                                callback={upgradeHandler("Tower_Cannon4", 2)}/>
                            <ButtonText 
                                active={currentUpgrade >= 2 ? false : true}
                                name={"Cruiser Artileery"}
                                cost={(currentUpgrade < 0 ? GameEnums.TOWER_PREFABS["Tower_Cannon2"].stats.cost : 0) + (currentUpgrade < 1 ? GameEnums.TOWER_PREFABS["Tower_Cannon3"].stats.cost : 0) + GameEnums.TOWER_PREFABS["Tower_Cannon4"].stats.cost}
                            />
                        </div>
                    </>
                ) : (
                    props.view === "TowerLaser" ? (
                        <>
                            <div 
                                className="row align-items-center justify-content-center game-sprite"
                                data-for="buttonDescription"
                                data-tip="Extra bracing allows the cannon to charge stronger blasts"
                                data-delay-show={"500"}
                                data-iscapture="true">
                                <UpgradeButton 
                                    active={currentUpgrade >= 0 ? false : true}
                                    src={Tower_Laser2} 
                                    height={100} 
                                    width={100} 
                                    callback={upgradeHandler("Tower_Laser2", 0)}/>
                                <ButtonText 
                                    active={currentUpgrade >= 0 ? false : true}
                                    name={"HE Laser Turret"}
                                    cost={GameEnums.TOWER_PREFABS["Tower_Laser2"].stats.cost}
                                />
                            </div>

                            <div 
                                className="row align-items-center justify-content-center game-sprite"
                                data-for="buttonDescription"
                                data-tip="Liquid nitrogen cooled super conductors allows the tower <br /> to punch through more ships with one blast"
                                data-delay-show={"500"}
                                data-iscapture="true">
                                <UpgradeButton 
                                    active={currentUpgrade >= 1 ? false : true}
                                    src={Tower_Laser3} 
                                    height={100} 
                                    width={100} 
                                    callback={upgradeHandler("Tower_Laser3", 1)}/>
                                <ButtonText 
                                    active={currentUpgrade >= 1 ? false : true}
                                    name={"SuperCooled Laser"}
                                    cost={(currentUpgrade < 0 ? GameEnums.TOWER_PREFABS["Tower_Laser2"].stats.cost : 0) + GameEnums.TOWER_PREFABS["Tower_Laser3"].stats.cost}
                                />
                            </div>

                            <div 
                                className="row align-items-center justify-content-center game-sprite"
                                data-for="buttonDescription"
                                data-tip="A highly modified mining laser, this turret can <br /> punch through even the highest grade military armor"
                                data-delay-show={"500"}
                                data-iscapture="true">
                                <UpgradeButton 
                                    active={currentUpgrade >= 2 ? false : true}
                                    src={Tower_Laser4} 
                                    height={100} 
                                    width={100} 
                                    callback={upgradeHandler("Tower_Laser4", 2)}/>
                                <ButtonText 
                                    active={currentUpgrade >= 2 ? false : true}
                                    name={"Industrial Laser Punch"}
                                    cost={(currentUpgrade < 0 ? GameEnums.TOWER_PREFABS["Tower_Laser2"].stats.cost : 0) + (currentUpgrade < 1 ? GameEnums.TOWER_PREFABS["Tower_Laser3"].stats.cost : 0) + GameEnums.TOWER_PREFABS["Tower_Laser4"].stats.cost}
                                />
                            </div>
                        </>
                    ) : ( 
                        undefined
                    )
                )
            )  
        }
        <ReactTooltip 
            id="buttonDescription"
            className={"Button-Tooltip"}
            place={"left"}
            type={"error"}
            effect={"float"}
            multiline={"true"}
        />
    </div>
}

export default Sidebar;