import { DependencyContainer } from "tsyringe";
import { CustomItemService } from "@spt-aki/services/mod/CustomItemService";
import { NewItemDetails } from "@spt-aki/models/spt/mod/NewItemDetails";

import { VFS } from "@spt-aki/utils/VFS";
import { jsonc } from "jsonc";
import path from "path";

export class ItemCreateHelper {

    public config: any;

    // Create customs Items and store them in the database
    public createItems(container: DependencyContainer) {
        const vfs = container.resolve<VFS>("VFS")
        this.config = jsonc.parse(vfs.readFile(path.resolve(__dirname, "../config/config.jsonc")))

        // Resolve the CustomItemService container
        const customItem = container.resolve<CustomItemService>("CustomItemService");

        const walletGamble: NewItemDetails = {
            newItem: {
                _id: "a_gambling_wallet",
                _name: "gambling_container_wallet",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Wallet",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery Wallet",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/barter/item_barter_walletwz/item_barter_walletwz.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Wallet",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 110000,
            handbookPriceRoubles: 110000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Wallet",
                    shortName: "Mystery Wallet",
                    description: `Wager your Roubles to win more, or lose it all!\n==============================\n0 Roubles - 60.0%\n100k Roubles - ${this.config.wallet_common}%\n300k Roubles - ${this.config.wallet_uncommon}%\n500k Roubles - ${this.config.wallet_kinda_rare}%\n1 Million Roubles - ${this.config.wallet_rare}%\n2 Million Roubles - ${this.config.wallet_extremely_rare}%`
                }
            } 
        }
        const keyGamble: NewItemDetails = {
            newItem: {
                _id: "a_key_gamble",
                _name: "gambling_container_key",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Key",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery Key",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/spec/keys/item_key_14.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Key",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 60000,
            handbookPriceRoubles: 60000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Key",
                    shortName: "Mystery Key",
                    description: `So you want a brand new key to your favorite looting spot? Try your luck!\n==============================\nCommon Key - ${this.config.key_common}%\nUncommon Key - ${this.config.key_uncommon}%\nRare Key - ${this.config.key_rare}%\nExtremely Rare Key - ${this.config.key_extremely_rare}%`
                }
            } 
        }
        const stimGamble: NewItemDetails = {
            newItem: {
                _id: "a_stim_gamble",
                _name: "gambling_container_stim",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Stimulant",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Mystery Stimulant",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/barter/item_container_injectorcase/item_container_injectorcase.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Stimulant",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 40000,
            handbookPriceRoubles: 40000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Stimulant",
                    shortName: "Mystery Stimulant",
                    description: `Looking for your next pick me up? We have all the drugs you could ask for!\n==============================\nCommon Stimulant - ${this.config.stim_common}%\nUncommon Stimulant - ${this.config.stim_uncommon}%\nRare Stimulant - ${this.config.stim_rare}%`
                }
            } 
        }
        
        const keycardGamble: NewItemDetails = {
            newItem: {
                _id: "a_keycard_gamble",
                _name: "gambling_container_keycard",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Keycard",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 1,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Gambling Wallet",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/barter/item_container_cardholder/item_container_cardholder.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Keycard",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 450000,
            handbookPriceRoubles: 450000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Keycard",
                    shortName: "Mystery Keycard",
                    description: `So you want to get into labs? Try your luck. Maybe you get, maybe you don't!\n==============================\nNothing - 25.0%\nAccess Keycard - ${this.config.keycard_access}%\n21WS Keycard - ${this.config.keycard_21WS}%\n11SR Keycard - ${this.config.keycard_11SR}%\nKeycard with a blue marking - ${this.config.keycard_blue_marking}%\nYellow Keycard - ${this.config.keycard_yellow}%\nBlack Keycard - ${this.config.keycard_black}%\nViolet Keycard - ${this.config.keycard_violet}%\nBlue Keycard - ${this.config.keycard_blue}%\nGreen Keycard - ${this.config.keycard_green}%\nRed Keycard - ${this.config.keycard_red}%`
                }
            }                
        }

        const fiftyFiftyGamble: NewItemDetails = {
            newItem: {
                _id: "z_50/50_gamble",
                _name: "gambling_container_50/50",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "50/50 Case",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 4,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "50/50 Case",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/containers/item_container_money/item_container_money.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "50/50 Case",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 5,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 6500000,
            handbookPriceRoubles: 6500000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "50/50 Case",
                    shortName: "50/50 Case",
                    description: "The true all in, ALL OR NOTHING!\n==============================\nDelicious can of beef stew - 50.0%\n5 Million Roubles - 50.0%"
                }
            }                
        }


        const meleeWeaponGamble: NewItemDetails = {
            newItem: {
                _id: "a_melee_weapon_gamble",
                _name: "gambling_container_melee",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Mystery Melee",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 3,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Gambling Wallet",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/weapons/taiga/weapon_usvr_taiga_container.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Mystery Melee",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 1,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
                     
            },
            fleaPriceRoubles: 75000,
            handbookPriceRoubles: 75000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Mystery Melee",
                    shortName: "Mystery Melee",
                    description: `Looking for a shiny new melee weapon? Well do we have you covered!\n==============================\nCommon Melee - ${this.config.melee_common}%\nUncommon Melee - ${this.config.melee_uncommon}%\nRare Melee - ${this.config.melee_rare}%\nExtremely Rare Melee - ${this.config.melee_extremely_rare}%`
                }
            }                
        }


        const weaponGamble = {
            newItem: {
                _id: "w_weapon_gamble",
                _name: "gambling_container_weapon",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Weapon Mystery Box",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 4,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Weapon Mystery Box",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/spec/item_spec_weaprepair/item_spec_weaprepair.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Weapon Mystery Box",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 4,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 88000,
            handbookPriceRoubles: 88000,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Weapon Mystery Box",
                    shortName: "Weapon Mystery Box",
                    description: `Weapon Mystery Box, contains over 180 different guns ranging from Meta Chad weapons, early wipe weapons, and cursed weapons \n==============================\nFully Modded Weapon - ${this.config.gun_rare}%\nMeme Weapon - ${this.config.gun_meme}%\nSemi-modded Weapon - ${this.config.gun_uncommon}%\nDefault Weapon - ${this.config.gun_common}%`
                }
            }
        };
        
        const premiumWeaponGamble = {
            newItem: {
                _id: "wa_premium_weapon_gamble",
                _name: "gambling_container_premium_weapon",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Premium Weapon Mystery Box",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 4,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Armor Mystery Box",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/spec/item_spec_weaprepair/item_spec_weaprepair.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Premium Weapon Mystery Box",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 4,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 79750,
            handbookPriceRoubles: 79750,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Premium Weapon Mystery Box",
                    shortName: "Premium Weapon Mystery Box",
                    description: `ThePremium Weapon Mystery Box contains a guaranteed heavily modded weappon\n==============================\nRare Weapon - ${this.config.premium_armor_rare}%`
                }
            }
        };
  

        const armorGamble = {
            newItem: {
                _id: "w_armor_gamble",
                _name: "gambling_container_armor",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Armor Mystery Box",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 4,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Armor Mystery Box",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/spec/item_spec_armorrepair/item_spec_armorrepair.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Armor Mystery Box",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 4,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 79750,
            handbookPriceRoubles: 79750,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Armor Mystery Box",
                    shortName: "Armor Mystery Box",
                    description: `Armor Mystery Box contains most armors that can appear in throughout Tarkov\n==============================\nCommon Armor - ${this.config.armor_common}%\nUncommon Armor - ${this.config.armor_uncommon}%\nRare Armor - ${this.config.armor_rare}%`
                }
            }
        };
        const premiumArmorGamble = {
            newItem: {
                _id: "w_premium_armor_gamble",
                _name: "gambling_container_premium_armor",
                _parent: "62f109593b54472778797866",
                _props: {
                    "AnimationVariantsNumber": 0,
                    "BackgroundColor": "orange",
                    "BlocksArmorVest": false,
                    "CanPutIntoDuringTheRaid": true,
                    "CanRequireOnRagfair": false,
                    "CanSellOnRagfair": false,
                    "CantRemoveFromSlotsDuringRaid": [],
                    "ConflictingItems": [],
                    "Description": "Premium Armor Mystery Box",
                    "DiscardLimit": -1,
                    "DiscardingBlock": false,
                    "DropSoundType": "None",
                    "ExamineExperience": 100,
                    "ExamineTime": 1,
                    "ExaminedByDefault": true,
                    "ExtraSizeDown": 0,
                    "ExtraSizeForceAdd": false,
                    "ExtraSizeLeft": 0,
                    "ExtraSizeRight": 0,
                    "ExtraSizeUp": 0,
                    "Grids": [
                        {
                            "_id": "6489c03c8bc5233fdc78e789",
                            "_name": "main",
                            "_parent": "6489c03c8bc5233fdc78e788",
                            "_props": {
                                "cellsH": 1,
                                "cellsV": 1,
                                "filters": [
                                    {
                                        "ExcludedFilter": [
                                            "54009119af1c881c07000029"
                                        ],
                                        "Filter": []
                                    }
                                ],
                                "isSortingTable": false,
                                "maxCount": 99,
                                "maxWeight": 0,
                                "minCount": 1
                            },
                            "_proto": "55d329c24bdc2d892f8b4567"
                        }
                    ],
                    "Height": 4,
                    "HideEntrails": true,
                    "InsuranceDisabled": false,
                    "IsAlwaysAvailableForInsurance": false,
                    "IsLockedafterEquip": false,
                    "IsSpecialSlotOnly": false,
                    "IsUnbuyable": false,
                    "IsUndiscardable": false,
                    "IsUngivable": false,
                    "IsUnremovable": false,
                    "IsUnsaleable": false,
                    "ItemSound": "container_plastic",
                    "LootExperience": 20,
                    "MergesWithChildren": false,
                    "Name": "Armor Mystery Box",
                    "NotShownInSlot": false,
                    "Prefab": {
                        "path": "assets/content/items/spec/item_spec_armorrepair/item_spec_armorrepair.bundle",
                        "rcid": ""
                    },
                    "QuestItem": false,
                    "QuestStashMaxCount": 0,
                    "RagFairCommissionModifier": 1,
                    "RepairCost": 0,
                    "RepairSpeed": 0,
                    "SearchSound": "drawer_metal_looting",
                    "ShortName": "Premium Armor Mystery Box",
                    "Slots": [],
                    "StackMaxSize": 1,
                    "StackObjectsCount": 1,
                    "Unlootable": false,
                    "UnlootableFromSide": [],
                    "UnlootableFromSlot": "FirstPrimaryWeapon",
                    "UsePrefab": {
                        "path": "",
                        "rcid": ""
                    },
                    "Weight": 2,
                    "Width": 4,
                    "ReverbVolume": 0
                },
                _proto: "",
                _type: "Item"
            },
            fleaPriceRoubles: 79750,
            handbookPriceRoubles: 79750,
            handbookParentId: "5b5f6fa186f77409407a7eb7",
            locales: {
                "en": {
                    name: "Premium Armor Mystery Box",
                    shortName: "Premium Armor Mystery Box",
                    description: `The Premium Armor Mystery Box contains one of the best armors in Tarkov\n==============================\nRare Armor - ${this.config.premium_armor_rare}%`
                }
            }
        };

        customItem.createItem(walletGamble);
        customItem.createItem(keyGamble);
        customItem.createItem(stimGamble);
        customItem.createItem(keycardGamble);
        customItem.createItem(fiftyFiftyGamble);
        customItem.createItem(meleeWeaponGamble);
        customItem.createItem(weaponGamble);
        customItem.createItem(armorGamble); // This is gonna take some time...
        customItem.createItem(premiumArmorGamble);
        customItem.createItem(premiumWeaponGamble);
        
    }
}