"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLootChanges = void 0;
const BaseClasses_1 = __importDefault(require("../Constants/BaseClasses"));
const utils_1 = require("./utils");
const buildLootChanges = (items, handbook, prices, _, botConfig, types) => {
    const assaultInventory = types.assault.inventory;
    //   const usecInventory = types.usec.inventory;
    //   const bearInventory = types.bear.inventory;
    const handbookMapper = {};
    // Zero out all current items
    for (const key in assaultInventory.items.Backpack) {
        assaultInventory.items.Backpack[key] = 1;
    }
    for (const key in assaultInventory.items.Pockets) {
        assaultInventory.items.Pockets[key] = 1;
    }
    for (const key in assaultInventory.items.TacticalVest) {
        assaultInventory.items.TacticalVest[key] = 1;
    }
    handbook.Items.forEach(({ Id, Price }) => {
        handbookMapper[Id] = Price;
    });
    const getFleaPrice = (itemID) => {
        if (typeof prices[itemID] != "undefined") {
            return prices[itemID];
        }
        else {
            return handbookMapper[itemID];
        }
    };
    const newToAdd = {
        [BaseClasses_1.default.BARTER_ITEM]: 50,
        [BaseClasses_1.default.HOUSEHOLD_GOODS]: 50,
        [BaseClasses_1.default.FOOD_DRINK]: 50,
        [BaseClasses_1.default.ELECTRONICS]: 1,
        [BaseClasses_1.default.JEWELRY]: 2,
        [BaseClasses_1.default.OTHER]: 1,
        [BaseClasses_1.default.TOOL]: 5,
        [BaseClasses_1.default.REPAIR_KITS]: 1,
        [BaseClasses_1.default.MONEY]: 1,
    };
    const itemsToRemove = new Set([
        BaseClasses_1.default.AMMO_BOX,
        BaseClasses_1.default.KEY_MECHANICAL,
        BaseClasses_1.default.GEAR_MOD,
        BaseClasses_1.default.SILENCER,
        BaseClasses_1.default.KNIFE,
        BaseClasses_1.default.ASSAULT_SCOPE,
        BaseClasses_1.default.COLLIMATOR,
        BaseClasses_1.default.SPECIAL_SCOPE,
        BaseClasses_1.default.OPTIC_SCOPE,
        BaseClasses_1.default.FOREGRIP,
        BaseClasses_1.default.ARMOR,
        BaseClasses_1.default.VEST,
        BaseClasses_1.default.TACTICAL_COMBO,
        "62a09d3bcf4a99369e262447", //gingy
        "5783c43d2459774bbe137486", //wallet
        "60b0f6c058e0b0481a09ad11", //walletz
    ]);
    const addList = Object.keys(newToAdd);
    const removeList = [...itemsToRemove];
    //limit keys on scavs
    botConfig.itemSpawnLimits.assault[BaseClasses_1.default.KEY_MECHANICAL] = 1;
    const loot = Object.keys(items).filter((id) => !utils_1.blacklistedItems.has(id) &&
        (0, utils_1.checkParentRecursive)(id, items, addList) &&
        !(0, utils_1.checkParentRecursive)(id, items, [BaseClasses_1.default.MONEY, ...removeList]) &&
        !items[id]?._props?.QuestItem &&
        !!getFleaPrice(id));
    const allLoot = loot
        .map((id) => ({
        id,
        value: Math.round(getFleaPrice(id) / 200) || 1,
        name: items[id]._name,
    }))
        .sort(({ value: b }, { value: a }) => b - a);
    const reverseLoot = [...allLoot].reverse().map(({ value }) => value);
    const finalValues = {};
    [...allLoot].forEach(({ value, id, name }, index) => {
        finalValues[id] = reverseLoot[index] < 100 ? 1 : reverseLoot[index];
    });
    //   saveToFile(finalValues, "allLoot.json");
    assaultInventory.items.Backpack = finalValues;
    assaultInventory.items.Pockets = finalValues;
    assaultInventory.items.TacticalVest = finalValues;
    //   usecInventory.items.Backpack = finalValues;
    //   usecInventory.items.Pockets = finalValues;
    //   usecInventory.items.TacticalVest = finalValues;
    //   bearInventory.items.Backpack = finalValues;
    //   bearInventory.items.Pockets = finalValues;
    //   bearInventory.items.TacticalVest = finalValues;
    botConfig.walletLoot.chancePercent = 0;
    botConfig.walletLoot.walletTplPool = [];
    //   pmcConfig.maxBackpackLootTotalRub *= 2;
    //   pmcConfig.maxPocketLootTotalRub *= 2;
    //   pmcConfig.maxVestLootTotalRub *= 2;
    //   pmcConfig.backpackLoot.whitelist = pmcConfig.backpackLoot.whitelist.filter(
    //     (id) => !itemsToRemove.has(id)
    //   );
    //   pmcConfig.vestLoot.whitelist = pmcConfig.vestLoot.whitelist.filter(
    //     (id) => !itemsToRemove.has(id)
    //   );
    //   const backpackloot = new Set(pmcConfig.backpackLoot.whitelist);
    //   const vestloot = new Set(pmcConfig.vestLoot.whitelist);
    itemsToRemove.forEach((id) => {
        // if (botConfig.itemSpawnLimits.pmc[id])
        //   delete botConfig.itemSpawnLimits.pmc[id];
        if (botConfig.itemSpawnLimits.assault[id])
            delete botConfig.itemSpawnLimits.assault[id];
        if (assaultInventory.items.Backpack[id])
            delete assaultInventory.items.Backpack[id];
        if (assaultInventory.items.TacticalVest[id])
            delete assaultInventory.items.TacticalVest[id];
        if (assaultInventory.items.Pockets[id])
            delete assaultInventory.items.Pockets[id];
    });
    Object.keys(newToAdd).forEach((id) => {
        // if (!backpackloot.has(id)) pmcConfig.backpackLoot.whitelist.push(id);
        // if (!vestloot.has(id)) pmcConfig.vestLoot.whitelist.push(id);
        // pmcConfig.backpackLoot.blacklist = pmcConfig.backpackLoot.blacklist.filter(
        //   (blackId) => id !== blackId
        // );
        // pmcConfig.vestLoot.blacklist = pmcConfig.backpackLoot.blacklist.filter(
        //   (blackId) => id !== blackId
        // );
        // botConfig.itemSpawnLimits.default[id] = newToAdd[id];
        // botConfig.itemSpawnLimits.pmc[id] = newToAdd[id];
        botConfig.itemSpawnLimits.assault[id] = newToAdd[id];
        botConfig.itemSpawnLimits.assaultgroup[id] = newToAdd[id];
    });
    return finalValues;
};
exports.buildLootChanges = buildLootChanges;
//# sourceMappingURL=LootChanges.js.map