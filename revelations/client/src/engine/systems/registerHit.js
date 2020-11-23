
function registerHit(projectile, creep){
    creep.data.hitPoints -= projectile.damageData.damage;
}

export default registerHit;