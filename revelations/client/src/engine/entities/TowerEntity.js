import TowerData from "../components/TowerData.js";
import TowerStats from "../components/TowerStats.js";
import DamageData from "../components/DamageData.js";
import Transform from "../components/Transform.js";
import UpgradeTree from "../components/UpgradeTree.js";

/**
 * @class
 * @memberof module:Entities
 * 
 * @property {TowerData} data Instance data of the tower
 * @property {TowerStats} stats Archtype data of the tower
 * @property {DamageData} damageData Damage information for when tower hits a creep
 * @property {Transform} transform World transform of the tower
 * @property {UpgradeTree} upgrades Object holding the potential and current upgrade information of the tower
 */
class TowerEntity{
    constructor(data, stats, damageData, transform, upgrades){
        this.data = data;
        this.stats = stats;
        this.damageData = damageData;
        this.transform = transform;
        this.upgrades = upgrades;
    }
}

export default TowerEntity;