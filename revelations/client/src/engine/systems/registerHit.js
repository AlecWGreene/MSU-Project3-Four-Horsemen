import removeCreep from "./removeCreep";

function registerHit(projectile, creep){
    // Mutate entity data components
    creep.data.hitPoints -= projectile.damageData.damage;
    projectile.data.targetsHit++;

    // If creep is destroyed
    if(creep.data.hitPoints <= 0){
        return true;
    }
    else{
        return false;
    }
}

export default registerHit;