import { DependencyContainer } from "tsyringe";
import { HashUtil } from "@spt-aki/utils/HashUtil";
import { Item } from "@spt-aki/models/eft/common/tables/IItem";

import { Weapons } from './Weapons';
import { Armors } from './Armors';


export class ItemCreator {

    protected Weapons: any;
    protected armor: any;
    protected hashUtil: HashUtil;

    constructor(container: DependencyContainer){
        this.Weapons = new Weapons();
        this.armor = new Armors();
        this.hashUtil = container.resolve<HashUtil>("HashUtil");
    }

    // getRandomInt(3) returns 0, 1, or 2
    protected getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    // Returns a random armor from Armors
    public createArmor(which: string): Item{
        let baseArmor: Item[];

        if(which == "common") {
            baseArmor = this.armor.commonArmor;
        } else if (which == "uncommon") {
            baseArmor = this.armor.uncommonArmor;
        } else if (which == "rare") {
            baseArmor = this.armor.rareArmor;
        }

        const randomArmor = this.getRandomInt(baseArmor.length);
        let getBuild = baseArmor[randomArmor].Items;
        
        return this.generateItem(getBuild);
    }

    // Returns a random gun from Weapons
    public createGun(which: string): Item{
        let weaponBuilds: Item[];

        if(which == "base") {
            weaponBuilds = this.Weapons.weaponBaseBuilds;
        } else if (which == "decent") {
            weaponBuilds = this.Weapons.weaponDecentBuilds;
        } else if (which == "meme") {
            weaponBuilds = this.Weapons.weaponMemeBuilds;
        } else if (which == "meta") {
            weaponBuilds = this.Weapons.weaponMetaBuilds;
        }

        const randomBuild = this.getRandomInt(weaponBuilds.length);
        let getBuild = weaponBuilds[randomBuild].Items;

        return this.generateItem(getBuild);
    }

    private generateItem(build: Item[]): Item[] {
        const item: Item[] = [];
        // We map every build[i]._id to a newly generated _id inside of parenIdMap. We HAVE to do this as if we have two duplicate items they would have the same _id which will brick the player inventory.
        const parentIdMap = {};
        const _randomId = this.hashUtil.generate(); // New Item baseId;

        let baseId;
        for(let i = 0; i < build.length; i++){

            if(i == 0) { // item base
                baseId = build[i]._id; // Need the base to reference in attachments
                parentIdMap[baseId] = _randomId; // base id = _randomId
                item.push({
                    _id: _randomId,
                    _tpl: build[i]._tpl
                });
            } else { // Children Attachments  
            
                const newId = this.hashUtil.generate();

                // Every _id is mapped to a newly generated _id, so every item is unique and doesn't _id collide
                if(parentIdMap[build[i]._id] == undefined)  {
                    parentIdMap[build[i]._id] = newId;
                }
                
                if(build[i].parentId != baseId) { // Attachments with parents that are not the base Item
                    item.push({
                        _id: newId,
                        _tpl: build[i]._tpl,
                        parentId: parentIdMap[build[i].parentId],
                        slotId: build[i].slotId
                    });

                } else {
                    item.push({
                        _id: newId,
                        _tpl: build[i]._tpl,
                        parentId: _randomId,
                        slotId: build[i].slotId
                    });
                }
            }
        }
        return item;
    }
}