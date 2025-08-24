import * as R from "ramda";

import { migrate } from "../../domainServices";
import { PresetName } from "../../domain";

import { validateCharSheetInJson } from "./validateCharSheetInJson";
import { CharSheetInJson } from "./types";

const presets: Record<PresetName, PresetName> = {
  vampire_v20: "vampire_v20",
  changeling_v20: "changeling_v20",
  hunter_v20: "hunter_v20",
  vampire_da_v20: "vampire_da_v20",
  vampire_v3_revised: "vampire_v3_revised",
  mage_v20: "mage_v20",
};

describe("migrator check", () => {
  it("Char sheet should be valid after migration", () => {
    const charSheet = migrate(charSheetV011);
    if (!validateCharSheetInJson(charSheet)) {
      console.log(
        "migration errors",
        JSON.stringify(validateCharSheetInJson.errors, null, "  "),
      );
    }
    expect(validateCharSheetInJson(charSheet)).toBe(true);
  });

  for (const presetName of Object.keys(presets) as PresetName[]) {
    it(`Char sheet with preset ${presetName} should pass validation`, () => {
      const charSheet = migrate(charSheetV011) as CharSheetInJson;
      charSheet.Charsheet.preset = presetName;
      if (!validateCharSheetInJson(charSheet)) {
        console.log(
          "migration errors",
          JSON.stringify(validateCharSheetInJson.errors, null, "  "),
        );
      }

      expect(validateCharSheetInJson(charSheet)).toBe(true);
    });
  }
});

var charSheetV011 = {
  Meta: {
    name: "",
    date: "",
    preGameDate: "",
    description: "",
    saveTime:
      "Tue Jun 13 2023 01:58:11 GMT+0500 (Екатеринбург, стандартное время)",
  },
  Version: "0.1.1",
  Log: [
    [
      "user",
      "Tue Jun 13 2023 01:58:11 GMT+0500 (Екатеринбург, стандартное время)",
      "getDatabase",
      "[null]",
    ],
  ],
  Charsheet: {
    profile: {
      name: "",
      player: "",
      chronicle: "",
      nature: "",
      age: "",
      sex: "",
      demeanor: "",
      concept: "",
      clan: "",
      generation: "",
      sire: "",
    },
    attributes: {
      strength: 1,
      dexterity: 1,
      stamina: 1,
      charisma: 1,
      manipulation: 1,
      appearance: 1,
      perception: 1,
      intelligence: 1,
      wits: 1,
    },
    abilities: {
      alertness: 0,
      athletics: 0,
      brawl: 0,
      empathy: 0,
      expression: 0,
      intimidation: 0,
      leadership: 0,
      streetwise: 0,
      subterfuge: 0,
      awareness: 0,
      animalken: 0,
      crafts: 0,
      drive: 0,
      etiquette: 0,
      firearms: 0,
      melee: 0,
      performance: 0,
      stealth: 0,
      survival: 0,
      larceny: 0,
      academics: 0,
      computer: 0,
      finance: 0,
      investigation: 0,
      law: 0,
      medicine: 0,
      occult: 0,
      politics: 0,
      science: 0,
      technology: 0,
    },
    disciplines: {},
    backgrounds: {},
    virtues: {
      conscience: 1,
      self_control: 1,
      courage: 1,
    },
    merits: {},
    flaws: {},
    state: {
      humanity: 0,
      willpower: 0,
      bloodpool: 0,
      health: {
        bruised: 0,
        hurt: 0,
        injured: 0,
        wounded: 0,
        mauled: 0,
        crippled: 0,
        incapacitated: 0,
      },
      willpower2: 0,
    },
    notes: "",
  },
  Settings: {
    backgroundColor: "#ababab",
    charsheetBackColor: "#ffffff",
    charsheetBackImage: "../images/back.png",
    charsheetBackMode: "charsheet-image",
  },
};
