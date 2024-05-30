"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const LogBackgroundColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogBackgroundColor");
const https_1 = require("https");
class Mod {
    async postDBLoadAsync(container) {
        const logger = container.resolve("WinstonLogger");
        const db = container.resolve("DatabaseServer");
        const tables = db.getTables();
        const handbook = tables.templates.handbook;
        const therapist_coef = (100 - tables.traders["54cb57776803fa99248b456e"].base.loyaltyLevels[0].buy_price_coef) / 100;
        const bitcoin = handbook.Items.find(x => x.Id == "59faff1d86f7746c51718c9c");
        return this.getPrice().then((price) => {
            const inRub = price / therapist_coef;
            bitcoin.Price = inRub;
            logger.logWithColor(`Updated bitcoin to ${inRub}`, LogTextColor_1.LogTextColor.MAGENTA, LogBackgroundColor_1.LogBackgroundColor.WHITE);
        });
    }
    async getPrice() {
        return new Promise((resolve, reject) => {
            const req = (0, https_1.request)("https://api.tarkov.dev/graphql", {
                method: "POST"
            }, (res) => {
                res.setEncoding("utf8");
                let rawData = "";
                res.on("data", (chunk) => { rawData += chunk; });
                res.on("end", () => {
                    try {
                        const parsedData = JSON.parse(rawData);
                        const price = parsedData.data.item.sellFor.find((x) => x.vendor.name === "Therapist").priceRUB;
                        resolve(price);
                    }
                    catch (e) {
                        console.error(e.message);
                    }
                });
            });
            req.on('error', (e) => {
                console.error(e.message);
                reject(e);
            });
            req.write(JSON.stringify({
                query: `{
                    item(id: "59faff1d86f7746c51718c9c")
                    {
                      sellFor {
                        priceRUB
                        vendor {
                          name
                        }
                      }
                    }
                  }`
            }));
            req.end();
        });
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map