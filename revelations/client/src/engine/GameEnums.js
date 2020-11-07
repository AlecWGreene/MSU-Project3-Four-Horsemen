// Use this to store prefabs for Creeps, Towers, and Projectiles

export default {
    GAME_CONFIG: {
        startLives: 100,
        startMoney: 999,
        tickLength: 100
    },
    /**
     * @type {{name: string, archtype: {data: TowerData, stats: TowerStats, damageType: DamageData}}}
     */
    TOWER_PREFABS: {},
    /**
     * @type {{name: string, archtype: {data: ProjectileData, stats: ProjectileStats, damageType: DamageData}}}
     */
    PROJECTILE_PREFABS: {},
    /**
     * @type {{name: string, archtype:{data: CreepData, stats: CreepStats, damageType: DamageData, collider: Collider}}}
     */
    CREEP_PREFABS: {}
};