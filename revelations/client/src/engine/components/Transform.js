export default class Transform{
    constructor(xCoordinate, yCoordinate, rotation){
        /** @type {{x:number,y:number}} x and y world coordinates of the transform */
        this.position = {
            x: xCoordinate,
            y: yCoordinate
        }

        /** @type {number} rotation in degrees counter-clockwise from the x-axis*/
        this.rotation = rotation;

        /** @type {{x:number,y:number}} the current momentum of the transform */
        this.momentum = {
            x: 0,
            y: 0
        }
    }
}