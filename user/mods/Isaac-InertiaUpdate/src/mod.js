"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
class Mod {
    database;
    jsonUtil;
    config;
    postDBLoad(container) {
        this.database = container.resolve("DatabaseServer").getTables();
        this.jsonUtil = container.resolve("JsonUtil");
        const configPath = path.resolve(__dirname, "../config/config.json");
        this.config = this.jsonUtil.deserialize(fs.readFileSync(configPath, "utf-8"), "config.json");
        this.backportMovementChanges();
    }
    // 0.14.6.0.29862 (2024-05-12) changes (These will be implemented in 3.9.0)
    backportMovementChanges() {
        const inertia = this.database.globals.config.Inertia;
        const stamina = this.database.globals.config.Stamina;
        if (this.config.ChangeInertia) {
            inertia.InertiaLimits.y = 73;
            inertia.MoveTimeRange.x = 0.07;
            inertia.MoveTimeRange.y = 0.25;
            inertia.WalkInertia.x = 0.005;
            inertia.WalkInertia.y = 0.335;
        }
        if (this.config.ChangeOverweight) {
            stamina.BaseOverweightLimits.y = 77;
            stamina.SprintOverweightLimits.y = 72;
            stamina.WalkOverweightLimits.y = 86;
            stamina.WalkSpeedOverweightLimits.y = 80;
        }
        if (this.config.ChangeStamina) {
            stamina.Capacity = 115;
            stamina.HandsCapacity = 80;
        }
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map