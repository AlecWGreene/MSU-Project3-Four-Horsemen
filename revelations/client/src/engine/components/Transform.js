/**
 * @typedef Vector
 * @type {Object}
 * @property {number} x x coordinate
 * @property {number} y y coordinate
 */

/**
 * @class
 * @memberof module:Components
 * 
 * @property {Vector} position World position of the transform
 * @property {number} rotation Angle in radians counter-clockwise from the positive x-axis
 * @property {Vector} momentum Vector representing the current velocity of the transform, @todo use for motion dampening
 */
class Transform{
    constructor(xCoordinate, yCoordinate, rotation){
        this.position = {
            x: xCoordinate,
            y: yCoordinate
        }
        this.rotation = rotation;
        this.momentum = {
            x: 0,
            y: 0
        }
    }
}

export default Transform;