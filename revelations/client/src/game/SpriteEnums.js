const wallScale = 1.01;
const towerBaseScale = 1.01;
const towerBarrelScale = 1.5;
const towerLaserScale = 1.5;
const creepScale = 1;
const svgSize = 128;
const laserBoltScale = 0.6;
const explosionScale = 0.8;

/**
 * @description 
 * Holds the image information used to render sprites
 * 
 * @enum {{src: string, height: number, width: number, rotation: number, scale: number, offset: number}}
 */
const SPRITE_ENUM = {
    wallScale: wallScale,
    towerBaseScale: towerBaseScale,
    towerBarrelScale: towerBarrelScale,
    towerLaserScale: towerLaserScale,
    creepScale: creepScale,
    svgSize: svgSize,

    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    //
    //                                                                       WALL SPRITES (Wall_Connection_)
    //
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    /* #region Wall Sprites  */
    // ====================================================================================================================================================================================
    // WALLS WITH 4, 1 OR 0 CONNECTIONS
    // ====================================================================================================================================================================================
    //#region 
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_NESW_Island.png"
    */
    "Wall_Island": {
        src: "./Assets/Buildings/Walls/Wall_Connection_NESW_Island.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_NESW.png"
    */
    "Wall_Connection_NESW": {
        src: "./Assets/Buildings/Walls/Wall_Connection_NESW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Penisula_S.png"
    */
    "Wall_Connection_N": {
        src: "./Assets/Buildings/Walls/Wall_Penisula_S.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Penisula_W.png"
    */
    "Wall_Connection_E": {
        src: "./Assets/Buildings/Walls/Wall_Penisula_W.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Penisula_N.png"
    */
    "Wall_Connection_S": {
        src: "./Assets/Buildings/Walls/Wall_Penisula_N.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Penisula_E.png"
    */
    "Wall_Connection_W": {
        src: "./Assets/Buildings/Walls/Wall_Penisula_E.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    //#endregion

    // ====================================================================================================================================================================================
    // WALLS WITH 2 CONNECTIONS
    // ====================================================================================================================================================================================
    /* #region   */

    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_NS.png"
    */
    "Wall_Connection_NS": {
        src: "./Assets/Buildings/Walls/Wall_Connection_NS.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_EW.png"
    */
    "Wall_Connection_EW": {
        src: "./Assets/Buildings/Walls/Wall_Connection_EW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_NE.png"
    */
    "Wall_Connection_NE": {
        src: "./Assets/Buildings/Walls/Wall_Connection_NE.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_ES.png"
    */
    "Wall_Connection_ES": {
        src: "./Assets/Buildings/Walls/Wall_Connection_ES.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_SW.png"
    */
    "Wall_Connection_SW": {
        src: "./Assets/Buildings/Walls/Wall_Connection_SW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_NW.png"
    */
    "Wall_Connection_NW": {
        src: "./Assets/Buildings/Walls/Wall_Connection_NW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /* #endregion */

    // ====================================================================================================================================================================================
    // WALLS WITH 3 CONNECTIONS
    // ====================================================================================================================================================================================
    /* #region   */
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_NES.png"
    */
    "Wall_Connection_NES": {
        src: "./Assets/Buildings/Walls/Wall_Connection_NES.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_ESW.png"
    */
    "Wall_Connection_ESW": {
        src: "./Assets/Buildings/Walls/Wall_Connection_ESW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_NSW.png"
    */
    "Wall_Connection_NSW": {
        src: "./Assets/Buildings/Walls/Wall_Connection_NSW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Walls/Wall_Connection_NEW.png"
    */
    "Wall_Connection_NEW": {
        src: "./Assets/Buildings/Walls/Wall_Connection_NEW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: wallScale
    },
    /* #endregion */

    /* #endregion */

    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    //
    //                                                                       TOWER BASE SPRITES (Tower_Base_Connection_)
    //
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    //#region Tower Base Sprites
    // ====================================================================================================================================================================================
    // TOWER BASES WITH 4,1, OR 0 CONNECTIONS
    // ====================================================================================================================================================================================
    /* #region  4,1,0 connections */
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base.png"
     */
    "Tower_Base_": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_NESW.png"
     */
    "Tower_Base_NESW": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_NESW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_N.png"
     */
    "Tower_Base_N": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_N.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_E.png"
     */
    "Tower_Base_E": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_E.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_S.png"
     */
    "Tower_Base_S": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_S.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_W.png"
     */
    "Tower_Base_W": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_W.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /* #endregion */

    // ====================================================================================================================================================================================
    // TOWER BASES WITH 2 CONNECTIONS
    // ====================================================================================================================================================================================
    /* #region  2 connections */
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_NE.png"
     */
    "Tower_Base_NE": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_NE.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_ES.png"
     */
    "Tower_Base_ES": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_ES.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_SW.png"
     */
    "Tower_Base_SW": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_SW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_NW.png"
     */
    "Tower_Base_NW": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_NW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_NS.png"
     */
    "Tower_Base_NS": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_NS.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_EW.png"
     */
    "Tower_Base_EW": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_EW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /* #endregion */

    // ====================================================================================================================================================================================
    // TOWER BASES WITH 3 CONNECTIONS
    // ====================================================================================================================================================================================
    /* #region  3 connections */
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_NES.png"
     */
    "Tower_Base_NES": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_NES.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_ESW.png"
     */
    "Tower_Base_ESW": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_ESW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_NSW.png"
     */
    "Tower_Base_NSW": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_NSW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Buildings/Tower_Base/Tower_Base_Connection_NEW.png"
     */
    "Tower_Base_NEW": {
        src: "./Assets/Buildings/Tower_Base/Tower_Base_Connection_NEW.png",
        height: 128,
        width: 128,
        numFrames: 1,
        scale: towerBaseScale
    },
    /* #endregion */

    //#endregion 


    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    //
    //                                                                       TOWER SPRITESHEETS (Tower_)
    //
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    /* #region Tower Spritesheets */
    // ====================================================================================================================================================================================
    // BARREL TOWERS (Tower_(n)Barrel)
    // ====================================================================================================================================================================================
    /* #region Barrel Towers */
    /**
     * @description HOVER ME => "../../public/Assets/Towers/Tower_1Barrel.png"
     */
    "Tower_1Barrel": {
        src: "./Assets/Towers/Tower_1Barrel.png",
        height: 128,
        width: 1024,
        numFrames: 8,
        scale: towerBarrelScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Towers/Tower_2Barrel.png"
     */
    "Tower_2Barrel": {
        src: "./Assets/Towers/Tower_2Barrel.png",
        height: 128,
        width: 1024,
        numFrames: 8,
        scale: towerBarrelScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Towers/Tower_3Barrel.png"
     */
    "Tower_3Barrel": {
        src: "./Assets/Towers/Tower_3Barrel.png",
        height: 128,
        width: 1024,
        numFrames: 8,
        scale: towerBarrelScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Towers/Tower_2Barrel2.png"
     */
    "Tower_2Barrel2": {
        src: "./Assets/Towers/Tower_2Barrel2.png",
        height: 128,
        width: 1024,
        numFrames: 8,
        scale: towerBarrelScale
    },
    /* #endregion */

    // ====================================================================================================================================================================================
    // LASER TOWERS (Tower_Laser)
    // ====================================================================================================================================================================================
    /* #region Laser Towers */
    /**
     * @description HOVER ME => "../../public/Assets/Towers/Tower_Laser1.png"
     */
    "Tower_Laser1": {
        src: "./Assets/Towers/Tower_Laser1.png",
        height: 128,
        width: 1408,
        numFrames: 11,
        scale: towerLaserScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Towers/Tower_Laser2.png"
     */
    "Tower_Laser2": {
        src: "./Assets/Towers/Tower_Laser2.png",
        height: 128,
        width: 1408,
        numFrames: 11,
        scale: towerLaserScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Towers/Tower_Laser3.png"
     */
    "Tower_Laser3": {
        src: "./Assets/Towers/Tower_Laser3.png",
        height: 128,
        width: 1408,
        numFrames: 11,
        scale: towerLaserScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Towers/Tower_Laser4.png"
     */
    "Tower_Laser4": {
        src: "./Assets/Towers/Tower_Laser4.png",
        height: 128,
        width: 1408,
        numFrames: 11,
        scale: towerLaserScale
    },
    /* #endregion */

    /* #endregion */

    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    //
    //                                                                       CREEP SPRITES (Spaceship_(0n)_(color).svg)
    //
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    /* #region CREEP SPRITES  */

    // ====================================================================================================================================================================================
    // RED CREEPS
    // ====================================================================================================================================================================================
    /* #region Red Creeps */
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/01/Spaceship_01_RED.svg"
     */
    "Creep_1_RED": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_01_RED.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/02/Spaceship_02_RED.svg"
     */
    "Creep_2_RED": {
        src: "./Assets/Creeps/Spaceships/02/Spaceship_02_RED.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/03/Spaceship_03_RED.svg"
     */
    "Creep_3_RED": {
        src: "./Assets/Creeps/Spaceships/03/Spaceship_03_RED.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/04/Spaceship_04_RED.svg"
     */
    "Creep_4_RED": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_04_RED.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/05/Spaceship_05_RED.svg"
     */
    "Creep_5_RED": {
        src: "./Assets/Creeps/Spaceships/05/Spaceship_05_RED.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/06/Spaceship_06_RED.svg"
     */
    "Creep_6_RED": {
        src: "./Assets/Creeps/Spaceships/06/Spaceship_06_RED.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /* #endregion */

    // ====================================================================================================================================================================================
    // BLUE CREEPS
    // ====================================================================================================================================================================================
    /* #region Blue Creeps */
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/01/Spaceship_01_BLUE.svg"
     */
    "Creep_1_BLUE": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_01_BLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/02/Spaceship_02_BLUE.svg"
     */
    "Creep_2_BLUE": {
        src: "./Assets/Creeps/Spaceships/02/Spaceship_02_BLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/03/Spaceship_03_BLUE.svg"
     */
    "Creep_3_BLUE": {
        src: "./Assets/Creeps/Spaceships/03/Spaceship_03_BLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/04/Spaceship_04_BLUE.svg"
     */
    "Creep_4_BLUE": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_04_BLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/05/Spaceship_05_BLUE.svg"
     */
    "Creep_5_BLUE": {
        src: "./Assets/Creeps/Spaceships/05/Spaceship_05_BLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/06/Spaceship_06_BLUE.svg"
     */
    "Creep_6_BLUE": {
        src: "./Assets/Creeps/Spaceships/06/Spaceship_06_BLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /* #endregion */

    // ====================================================================================================================================================================================
    // GREEN CREEPS
    // ====================================================================================================================================================================================
    /* #region Green Creeps */
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/01/Spaceship_01_GREEN.svg"
     */
    "Creep_1_GREEN": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_01_GREEN.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/02/Spaceship_02_GREEN.svg"
     */
    "Creep_2_GREEN": {
        src: "./Assets/Creeps/Spaceships/02/Spaceship_02_GREEN.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/03/Spaceship_03_GREEN.svg"
     */
    "Creep_3_GREEN": {
        src: "./Assets/Creeps/Spaceships/03/Spaceship_03_GREEN.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/04/Spaceship_04_GREEN.svg"
     */
    "Creep_4_GREEN": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_04_GREEN.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/05/Spaceship_05_GREEN.svg"
     */
    "Creep_5_GREEN": {
        src: "./Assets/Creeps/Spaceships/05/Spaceship_05_GREEN.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/06/Spaceship_06_GREEN.svg"
     */
    "Creep_6_GREEN": {
        src: "./Assets/Creeps/Spaceships/06/Spaceship_06_GREEN.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /* #endregion */

    // ====================================================================================================================================================================================
    // ORANGE CREEPS
    // ====================================================================================================================================================================================
    /* #region Orange Creeps */
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/01/Spaceship_01_ORANGE.svg"
     */
    "Creep_1_ORANGE": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_01_ORANGE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/02/Spaceship_02_ORANGE.svg"
     */
    "Creep_2_ORANGE": {
        src: "./Assets/Creeps/Spaceships/02/Spaceship_02_ORANGE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/03/Spaceship_03_ORANGE.svg"
     */
    "Creep_3_ORANGE": {
        src: "./Assets/Creeps/Spaceships/03/Spaceship_03_ORANGE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/04/Spaceship_04_ORANGE.svg"
     */
    "Creep_4_ORANGE": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_04_ORANGE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/05/Spaceship_05_ORANGE.svg"
     */
    "Creep_5_ORANGE": {
        src: "./Assets/Creeps/Spaceships/05/Spaceship_05_ORANGE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/06/Spaceship_06_ORANGE.svg"
     */
    "Creep_6_ORANGE": {
        src: "./Assets/Creeps/Spaceships/06/Spaceship_06_ORANGE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /* #endregion */

    // ====================================================================================================================================================================================
    // PLANET SPRITE
    // ====================================================================================================================================================================================
    /* #region Planet Sprite */
    /**
     * @description HOVER ME => "../../public/Assets/earth.png"
     */
    "Planet_Sprite": {
        src: "./Assets/earth.png",
        height: 68,
        width: 95,
        numFrames: 1,
        scale: wallScale
    },

    /* #endregion */

    // ====================================================================================================================================================================================
    // PURPLE CREEPS
    // ====================================================================================================================================================================================
    /* #region Purple Creeps */
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/01/Spaceship_01_PURPLE.svg"
     */
    "Creep_1_PURPLE": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_01_PURPLE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/02/Spaceship_02_PURPLE.svg"
     */
    "Creep_2_PURPLE": {
        src: "./Assets/Creeps/Spaceships/02/Spaceship_02_PURPLE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/03/Spaceship_03_PURPLE.svg"
     */
    "Creep_3_PURPLE": {
        src: "./Assets/Creeps/Spaceships/03/Spaceship_03_PURPLE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/04/Spaceship_04_PURPLE.svg"
     */
    "Creep_4_PURPLE": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_04_PURPLE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/05/Spaceship_05_PURPLE.svg"
     */
    "Creep_5_PURPLE": {
        src: "./Assets/Creeps/Spaceships/05/Spaceship_05_PURPLE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/06/Spaceship_06_PURPLE.svg"
     */
    "Creep_6_PURPLE": {
        src: "./Assets/Creeps/Spaceships/06/Spaceship_06_PURPLE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /* #endregion */

    // ====================================================================================================================================================================================
    // YELLOW CREEPS
    // ====================================================================================================================================================================================
    /* #region Yellow Creeps */
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/01/Spaceship_01_YELLOW.svg"
     */
    "Creep_1_YELLOW": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_01_YELLOW.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/02/Spaceship_02_YELLOW.svg"
     */
    "Creep_2_YELLOW": {
        src: "./Assets/Creeps/Spaceships/02/Spaceship_02_YELLOW.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/03/Spaceship_03_YELLOW.svg"
     */
    "Creep_3_YELLOW": {
        src: "./Assets/Creeps/Spaceships/03/Spaceship_03_YELLOW.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/04/Spaceship_04_YELLOW.svg"
     */
    "Creep_4_YELLOW": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_04_YELLOW.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/05/Spaceship_05_YELLOW.svg"
     */
    "Creep_5_YELLOW": {
        src: "./Assets/Creeps/Spaceships/05/Spaceship_05_YELLOW.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/06/Spaceship_06_YELLOW.svg"
     */
    "Creep_6_YELLOW": {
        src: "./Assets/Creeps/Spaceships/06/Spaceship_06_YELLOW.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /* #endregion */

    // ====================================================================================================================================================================================
    // NAVY BLUE CREEPS
    // ====================================================================================================================================================================================
    /* #region Navy Blue Creeps */
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/01/Spaceship_01_NAVYBLUE.svg"
     */
    "Creep_1_NAVYBLUE": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_01_NAVYBLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/02/Spaceship_02_NAVYBLUE.svg"
     */
    "Creep_2_NAVYBLUE": {
        src: "./Assets/Creeps/Spaceships/02/Spaceship_02_NAVYBLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/03/Spaceship_03_NAVYBLUE.svg"
     */
    "Creep_3_NAVYBLUE": {
        src: "./Assets/Creeps/Spaceships/03/Spaceship_03_NAVYBLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/04/Spaceship_04_NAVYBLUE.svg"
     */
    "Creep_4_NAVYBLUE": {
        src: "./Assets/Creeps/Spaceships/01/Spaceship_04_NAVYBLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/05/Spaceship_05_NAVYBLUE.svg"
     */
    "Creep_5_NAVYBLUE": {
        src: "./Assets/Creeps/Spaceships/05/Spaceship_05_NAVYBLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Creeps/Spaceships/06/Spaceship_06_NAVYBLUE.svg"
     */
    "Creep_6_NAVYBLUE": {
        src: "./Assets/Creeps/Spaceships/06/Spaceship_06_NAVYBLUE.svg",
        height: svgSize,
        width: svgSize,
        numFrames: 1,
        scale: creepScale
    },
    /* #endregion */

    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    //
    //                                                                       PROJECTILE SPRITES (Projectile_(type)_(color))
    //
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    /* #region  */

    // ====================================================================================================================================================================================
    // LASER BOLTS
    // ====================================================================================================================================================================================
    /* #region */

    /**
     * @description HOVER ME => "../../public/Assets/Projectiles/Laser_Yellow.png"
     */
    "Projectile_Laser_Yellow": {
        src: "./Assets/Projectiles/Laser_Yellow.png",
        height: 68,
        width: 95,
        numFrames: 1,
        scale: laserBoltScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Projectiles/Laser_Red.png"
     */
    "Projectile_Laser_Red": {
        src: "./Assets/Projectiles/Laser_Red.png",
        height: 68,
        width: 95,
        numFrames: 1,
        scale: laserBoltScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Projectiles/Laser_Orange.png"
     */
    "Projectile_Laser_Orange": {
        src: "./Assets/Projectiles/Laser_Orange.png",
        height: 68,
        width: 95,
        numFrames: 1,
        scale: laserBoltScale
    },
    /**
     * @description HOVER ME => "../../public/Assets/Projectiles/Laser_Blue.png"
     */
    "Projectile_Laser_Blue": {
        src: "./Assets/Projectiles/Laser_Blue.png",
        height: 68,
        width: 95,
        numFrames: 1,
        scale: laserBoltScale
    },
    /* #endregion */

    /* #endregion */


    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    //
    //                                                                       GAME AUDIO SPRITES (Sound_(type)_(enum))
    //
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    /* #region  */

    // ====================================================================================================================================================================================
    // Sound Effects
    // ====================================================================================================================================================================================
    /* #region */

    /**
     * @description HOVER ME => "../../public/Assets/sounds/372182__supersound23__pop_short.mp3"
     */
    "Sound_pop_0": {
        src: "./Assets/sounds/372182__supersound23__pop_short.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/416417__superphat__automatic-assault-rifle_shot_1.mp3"
     */
    "Sound_shot_0": {
        src: "./Assets/sounds/416417__superphat__automatic-assault-rifle_shot_1.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/194312__soundmatch24__laser-gun-cannon-shot-short-w-fade.mp3"
     */
    "Sound_lazer_0": {
        src: "./Assets/sounds/194312__soundmatch24__laser-gun-cannon-shot-short-w-fade.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/194312__soundmatch24__laser-gun-cannon-shot-short-w-fade-1.mp3"
     */
    "Sound_lazer_1": {
        src: "./Assets/sounds/194312__soundmatch24__laser-gun-cannon-shot-short-w-fade-1.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/194312__soundmatch24__laser-gun-cannon-shot-short-w-fade-2.mp3"
     */
    "Sound_lazer_2": {
        src: "./Assets/sounds/194312__soundmatch24__laser-gun-cannon-shot-short-w-fade-2.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/232817__lezaarth__lasergun-short.mp3"
     */
    "Sound_lazer_3": {
        src: "./Assets/sounds/232817__lezaarth__lasergun-short.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/334240__liamg-sfx__laser-shot-1-short.mp3"
     */
    "Sound_lazer_4": {
        src: "./Assets/sounds/334240__liamg-sfx__laser-shot-1-short.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/404795__owlstorm__retro-video-game-sfx-laser-2.mp3"
     */
    "Sound_lazer_5": {
        src: "./Assets/sounds/404795__owlstorm__retro-video-game-sfx-laser-2.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/440147__dpren__scifi-gun-mega-charge-cannon-fast-burst.mp3"
     */
    "Sound_lazer_6": {
        src: "./Assets/sounds/440147__dpren__scifi-gun-mega-charge-cannon-fast-burst.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/440147__dpren__scifi-gun-mega-charge-cannon-fast-w-fade.mp3"
     */
    "Sound_lazer_8": {
        src: "./Assets/sounds/440147__dpren__scifi-gun-mega-charge-cannon-fast-w-fade.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/470933__julien-matthey__jm-noiz-laser-06-short-w-fade-out.mp3"
     */
    "Sound_lazer_9": {
        src: "./Assets/sounds/470933__julien-matthey__jm-noiz-laser-06-short-w-fade-out.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/495054__tannersound__scifi-laser-gun-firing-fast-triple.mp3"
     */
    "Sound_lazer_10": {
        src: "./Assets/sounds/495054__tannersound__scifi-laser-gun-firing-fast-triple.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/495054__tannersound__scifi-laser-gun-firing-fast-w-fade.mp3"
     */
    "Sound_lazer_11": {
        src: "./Assets/sounds/495054__tannersound__scifi-laser-gun-firing-fast-w-fade.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/495054__tannersound__scifi-laser-gun-firing-fast-w-fade-1.mp3"
     */
    "Sound_lazer_12": {
        src: "./Assets/sounds/495054__tannersound__scifi-laser-gun-firing-fast-w-fade-1.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/495054__tannersound__scifi-laser-gun-firing-fast-w-fade-2.mp3"
     */
    "Sound_lazer_13": {
        src: "./Assets/sounds/495054__tannersound__scifi-laser-gun-firing-fast-w-fade-2.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/423351__lowpolygon__charge-up-and-explode-short.mp3"
     */
    "Sound_cannon_0": {
        src: "./Assets/sounds/423351__lowpolygon__charge-up-and-explode-short.mp3",
    },
    /**
    * @description HOVER ME => "../../public/Assets/sounds/440147__dpren__scifi-gun-mega-charge-cannon-short-w-fade.mp3"
    */
    "Sound_cannon_1": {
        src: "./Assets/sounds/440147__dpren__scifi-gun-mega-charge-cannon-short-w-fade.mp3",
    },
    /**
    * @description HOVER ME => "../../public/Assets/sounds/529239__mozfoo__mortar.mp3"
    */
    "Sound_cannon_2": {
        src: "./Assets/sounds/529239__mozfoo__mortar.mp3",
    },
    /**
    * @description HOVER ME => "../../public/Assets/sounds/Single_and_Multi_Explosion_short_w_fade.mp3"
    */
    "Sound_cannon_3": {
        src: "./Assets/sounds/Single_and_Multi_Explosion_short_w_fade.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/253408__tfodor__space-laser-space-sound-tower-placement-1.mp3"
     */
    "Sound_explosion_0": {
        src: "./Assets/sounds/253408__tfodor__space-laser-space-sound-tower-placement-1.mp3",
    },

    // ====================================================================================================================================================================================
    // Ambient Music Loops
    // ====================================================================================================================================================================================
    /* #region */

    /**
     * @description HOVER ME => "../../public/Assets/sounds/522706__fran-ky__075-fm-ellberge-part-2.mp3"
     */
    "Sound_background_0": {
        src: "./Assets/sounds/522706__fran-ky__075-fm-ellberge-part-2.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/395487__frankum__tecno-pop-base-and-guitar-2.mp3"
     */
    "Sound_background_1": {
        src: "./Assets/sounds/395487__frankum__tecno-pop-base-and-guitar-2.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/404452__furbyguy__synthwave-loop.mp3"
     */
    "Sound_background_2": {
        src: "./Assets/sounds/404452__furbyguy__synthwave-loop.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/525290__disquantic__cyberpunk-beat.mp3"
     */
    "Sound_background_3": {
        src: "./Assets/sounds/525290__disquantic__cyberpunk-beat.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/457886__doctor-dreamchip__2018-08-03-loop.mp3"
     */
    "Sound_background_4": {
        src: "./Assets/sounds/457886__doctor-dreamchip__2018-08-03-loop.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/514960__deleted-user-11009121__synthwave-loop-100bpm-loop.mp3"
     */
    "Sound_background_5": {
        src: "./Assets/sounds/514960__deleted-user-11009121__synthwave-loop-100bpm-loop.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/489042__michael-db__synthontherun-loop.mp3"
     */
    "Sound_background_6": {
        src: "./Assets/sounds/489042__michael-db__synthontherun-loop.mp3",
    },
    /**
     * @description HOVER ME => "../../public/Assets/sounds/202077__djgriffin__beet-loop.mp3"
     */
    "Sound_background_7": {
        src: "./Assets/sounds/202077__djgriffin__beet-loop.mp3",
    },

    /* #endregion */

    /* #endregion */

    /* #endregion */
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    //
    //                                                                       GAME VFX SPRITES (Sound_(type)_(enum))
    //
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    /* #region   */
    /**
     * @description HOVER ME => "../../public/Assets/VFX/Ship_Explosion.png"
     */
    "VFX_Explosion": {
        src: "./Assets/VFX/Ship_Explosion.png",
        height: 128,
        width: 2688,
        numFrames: 21,
        scale: explosionScale
    }

    /* #endregion */
    /* #endregion */

}

export default SPRITE_ENUM;