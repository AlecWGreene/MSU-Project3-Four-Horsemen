
function registerHit(projectile, creep){
    creep.data.hitPoints -= projectile.damageData.damage;
    console.log("hit!");
}

export default registerHit;