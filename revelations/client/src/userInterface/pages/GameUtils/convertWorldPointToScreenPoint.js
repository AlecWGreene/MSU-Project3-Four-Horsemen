import GameEnums from "../../../engine/GameEnums.js"

export default function convertWorldPointToScreenPoint(point, scale, origin){
    return {
        x: point.x * scale + origin.x,
        y: point.y * scale + origin.y
    }
}