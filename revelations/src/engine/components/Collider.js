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

        this.setVertices();
        this.setAxes()
    }

    setVertices(){
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
    }

    setAxes(){        

        for(let i = 0; i < this.vertices.length; i++){
            // Calculate normal of edge
            const {x: x1, y: y1 } = this.vertices[i];
            const {x: x2, y: y2 } = this.vertices[(i+1)%(this.vertices.length)];
            this.axes[i] = { x: y2-y1, y: x1-x2 };
        }
    }

    /**
     * Moves the collider by adding a vector to each vertex
     * @param {{x:number,y:number}} direction vector representing the direction and distance of translation
     * @returns {void}
     */
    move(direction){
        this.center = { x: this.center.x + direction.x, y: this.center.y + direction.y}

        for(let i = 0; i < this.vertices.length; i++){
            this.vertices[i] = { x: this.vertices[i].x + direction.x, y: this.vertices[i].y + direction.y};
        }
    }

    /**
     * Rotates the shape so that it is offset from it's current position
     * @param {number} angle angle in degrees to rotate to with 0 being the positive x axis
     * @returns {void}
     */
    rotate(angle){
        this.angle += angle;

        this.setVertices();
        this.setAxes();
    }

    /**
     * Rotates the shape so that it is offset from it's original position
     * @param {number} angle angle in degrees to rotate to with 0 being the positive x axis
     * @returns {void}
     */
    rotateTo(angle){
        this.angle = angle;

        this.setVertices();
        this.setAxes();
    }

    /**
     * Projects collider onto a normal vector by returning the interval containing the dot product of the axis with its vertices
     * @param {{x:number,y:number}} axis
     * @returns {number[]}
     */
    projectOnto(axis){
        const endPoints = [];
        for(const vertex of this.vertices){
            const score = vertex.x * axis.x + vertex.y * axis.y;
            if(endPoints.length < 2){
                endPoints.splice(0,0,score, score);
            }
            else{
                if(score < endPoints[0]){
                    endPoints[0] = score;
                }
                else if(score > endPoints[1]){
                    endPoints[1] = score;
                }
            }
        }

        return endPoints;
    }

    /**
     * Iterates through all non-colinear axes of both colliders, and returns true if any of their projections are disjointed
     * @param {Collider} collider object to compare to
     * @returns {boolean}
     */
    isDisjointWith(collider){
        const axes = this.axes.concat(collider.axes);
        const visited = [];

        // Project both colliders on the axis
        for(const axis of axes){
            // Skip axis colinear to previously computed axes
            if(visited.filter(vAxis => vAxis.x * axis.y - vAxis.y * axis.x === 0).length > 0){
                continue;
            }

            // Return true if projections are disjointed
            const [thisStart, thisEnd] = this.projectOnto(axis);
            const [colliderStart, colliderEnd] = collider.projectOnto(axis);
            if(thisEnd < colliderStart || thisStart > colliderEnd){
                return true;
            }

            visited.push(axis);
        }

        return false;
    }
}

module.exports = Collider;