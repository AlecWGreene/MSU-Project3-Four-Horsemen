export default class Collider{
    /**
     * @param {{x:number,y:number}[]} vertices world coordinates of the collider vertices
     * @param {{x:number,y:number}} center world coordinates to the collider pivot point
     */
    constructor(vertices, center){
        /** @type {{x:number,y:number}[]} world coordinates of the collider vertices */
        this.vertices = vertices;
        /** @type {{x:number,y:number}[]}  vertices of the collider with center at the origin and angle is 0 */
        this.initialVertices = Array.from(vertices);
        /** @type {{x:number,y:number}} world coordinates to the collider pivot point */
        this.center = center;
        /** @type {number} angle in degrees from the x axis */
        this.angle = 0;
        /** @type {{x:number,y:number}[]} normal vectors of each side */
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
        /** @type {number}  */
        this.circumference = this.calcCircumference();
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

    /**
     * @function
     * Calculates the circumference of the collider for rotation calculation purposes
     * @returns {number}
     */
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