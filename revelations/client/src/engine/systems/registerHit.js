import removeCreep from "./removeCreep";

function registerHit(projectile, creep){
    // Mutate entity data components
    const damageToDeal = projectile.damageData.damage - creep.stats.armor;
    if(damageToDeal > 0){
        creep.data.hitPoints -= damageToDeal;
        projectile.data.targetsHit++;
    }
    else{
         projectile.data.targetsHit = projectile.stats.maxTargets;
         return false;
    }

    // If creep is destroyed
    if(creep.data.hitPoints <= 0){
        return true;
    }
    else{
        return false;
    }
}

export default registerHit;