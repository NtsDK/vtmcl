import { CharSheetInJson } from "./types";
import { CURRENT_VERSION } from "../../constants";

export const m: CharSheetInJson = {
  "Meta": {
    "name": "",
    "date": "",
    "preGameDate": "",
    "description": "",
    "saveTime": "Mon Jun 06 2022 14:15:24 GMT+0200 (Центральная Европа, летнее время)"
  },
  "Version": CURRENT_VERSION,
  "Log": [
    [
      "user",
      "Mon Jun 06 2022 14:14:47 GMT+0200 (Центральная Европа, летнее время)",
      "setProfileItem",
      "[\"name\",\"123\",null]"
    ]
  ],
  "Charsheet": {
    "profile": {
      "name": "123",
      "player": "",
      "chronicle": "",
      "nature": "",
      "age": "",
      "sex": "",
      "demeanor": "",
      "concept": "",
      "clan": "",
      "generation": "",
      "sire": ""
    },
    "attributes": {
      "strength": 3,
      "dexterity": 1,
      "stamina": 1,
      "charisma": 3,
      "manipulation": 1,
      "appearance": 1,
      "perception": 3,
      "intelligence": 1,
      "wits": 1
    },
    "abilities": {
      "alertness": 3,
      "athletics": 0,
      "brawl": 0,
      "empathy": 0,
      "expression": 0,
      "intimidation": 0,
      "leadership": 0,
      "streetwise": 0,
      "subterfuge": 0,
      "awareness": 0,
      "animalken": 3,
      "crafts": 0,
      "drive": 0,
      "etiquette": 0,
      "firearms": 0,
      "melee": 0,
      "performance": 0,
      "stealth": 0,
      "survival": 0,
      "larceny": 0,
      "academics": 3,
      "computer": 0,
      "finance": 0,
      "investigation": 0,
      "law": 0,
      "medicine": 0,
      "occult": 0,
      "politics": 0,
      "science": 0,
      "technology": 0
    },
    "disciplines": [
      { name: "123", value: 2 }
    ],
    "backgrounds": [
      { name: "2342", value: 0 }
    ],
    "virtues": {
      "conscience": 1,
      "self_control": 4,
      "courage": 1
    },
    "merits": ["324"],
    "flaws": ["sdfsdf"],
    "state": {
      "humanity": 5,
      "willpower": 7,
      "bloodpool": 3,
      "health": {
        "bruised": 0,
        "hurt": 2,
        "injured": 1,
        "wounded": 1,
        "mauled": 0,
        "crippled": 0,
        "incapacitated": 0
      },
      "willpower2": 0
    },
    "notes": "sdsdsdf"
  },
  "Settings": {
    "backgroundColor": "#ababab",
    "charsheetBackColor": "#ffffff",
    "charsheetBackImage": "../images/back.png",
    "charsheetBackMode": "charsheet-image"
  }
}