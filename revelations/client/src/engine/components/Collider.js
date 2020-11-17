/**
 * @typedef {Object} Vector
 * @property {number} Vector.x X coordinate
 * @property {number} Vector.y Y coordinate
 */

 /**
  * @class
  * 
  * @memberof module:Components
  * 
  * @classdesc Geometry data for collision detection
  * 
  * @property {Array<Vector>} vertices vertices of the collider in world space
  * @property {Array<Vector>} initialVertices vertices of the collider with center at the origin and angle is 0
  * @property {Vector} center world coordinates to the collider pivot point
  * @property {number} circumference sum of line segments formed by the vertices
  * @property {number} angle rotation of the collider in degrees counter-clockwise from the positive x-axis
  * @property {Array<Vector>} axes collection of unit vectors representing the normals to the collider's line segments
  * 
  * @method setAxes Calculate the normals of all collider line segments, use after transform mutations of the parent entity and/or collider 
  * @method calcCircumference Calculate the sum of the collider line segments, and store it in this.circumference
  */
class Collider{
    /**
     * @constructor
     * @param {Array.<Vector>} vertices world coordinates of the collider vertices
     * @param {Vector} center world coordinates to the collider pivot point
     */
    constructor(vertices, center){
        this.vertices = vertices;
        this.initialVertices = Array.from(vertices);
        this.center = center;
        this.angle = 0;
        this.axes = [];

        // Helper variables to set vertices
        const {x: x0, y: y0 } = this.center;
        const radAngle = Math.PI * this.angle / 180;

        // Rotate each vertex and move it towards the collider center
        for(let i = 0; i < this.vertices.length; i++){
            const {x: x1, y: y1 } = this.initialVertices[i];
            this.vertices[i] = {
                x: x0 + (x1*Math.cos(radAngle) - y1*Math.sin(radAngle)),
                y: y0 + (x1*Math.sin(radAngle) + y1*Math.cos(radAngle))
            };
        }

        this.setAxes();
        this.circumference = this.calcCircumference();
    }

    setAxes(){        
        for(let i = 0; i < this.vertices.length; i++){
            // Calculate normal of edge
            const {x: x1, y: y1 } = this.vertices[i];
            const {x: x2, y: y2 } = this.vertices[(i+1)%(this.vertices.length)];
            this.axes[i] = { x: y2-y1, y: x1-x2 };
        }
    }

    calcCircumference(){
        let circ = 0;
        for(let i = 0; i < this.vertices.length; i++){
            // Add side length
            const {x: x1, y: y1 } = this.vertices[i];
            const {x: x2, y: y2 } = this.vertices[(i+1)%(this.vertices.length)];
            circ += Math.sqrt((x1 - x2)**2+(y1 - y2)**2);
        }
        return circ;
    }
}

export default Collider;