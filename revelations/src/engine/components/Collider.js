/**
 * @default
 * @class
 * @property {{x:number,y:number}[]} vertices
 * @property {x:number,y:number} center
 * @method move moves collider along a translation vector
 * @method rotate rotates collider
 * @method rotateto rotates collider to a specific offset from it's initial state
 * @method isDisjointWith returns a boolean representing if the colliders do not intersect (true = no intersection, false = intersection)
 */
class Collider{
    /**
     * @param {{x:number,y:number}[]} vertices
     * @param {{x:number,y:number}} center
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

        this.setAxes()
    }

    /** 
     * @function
     * Calculates the normals of the collider, call this method after any update
    */
    setAxes(){        

        for(let i = 0; i < this.vertices.length; i++){
            // Calculate normal of edge
            const {x: x1, y: y1 } = this.vertices[i];
            const {x: x2, y: y2 } = this.vertices[(i+1)%(this.vertices.length)];
            this.axes[i] = { x: y2-y1, y: x1-x2 };
        }
    }
}

module.exports = Collider;