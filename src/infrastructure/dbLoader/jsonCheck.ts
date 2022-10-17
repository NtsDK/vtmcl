import { CharSheetInJson } from "./types";
import { CURRENT_VERSION } from "../../constants";
import { defaultBackgroundUrl } from "../../services/defaultBackground";

export const m: CharSheetInJson = {
  Version: CURRENT_VERSION,
  Charsheet: {
    preset: 'vampire_v20',
    profile: {
      name: "123",
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

      court: "",
      house: "",
      kith: "",
      primaryLegacy: "",
      secondaryLegacy: "",
      motley: "",
      seeming: "",
    },
    attributes: {
      strength: 3,
      dexterity: 1,
      stamina: 1,
      charisma: 3,
      manipulation: 1,
      appearance: 1,
      perception: 3,
      intelligence: 1,
      wits: 1
    },
    abilities: {
      alertness: 3,
      athletics: 0,
      brawl: 0,
      empathy: 0,
      expression: 0,
      intimidation: 0,
      leadership: 0,
      streetwise: 0,
      subterfuge: 0,
      awareness: 0,
      animalken: 3,
      crafts: 0,
      drive: 0,
      etiquette: 0,
      firearms: 0,
      melee: 0,
      performance: 0,
      stealth: 0,
      survival: 0,
      larceny: 0,
      academics: 3,
      computer: 0,
      finance: 0,
      investigation: 0,
      law: 0,
      medicine: 0,
      occult: 0,
      politics: 0,
      science: 0,
      technology: 0,

      enigmas: 0,
      gremayre: 0,
      kenning: 0,
    },
    abilitiesExtension: {
      talentName1: "",
      talentValue1: 0,
      talentName2: "",
      talentValue2: 0,
      skillName1: "",
      skillValue1: 0,
      skillName2: "",
      skillValue2: 0,
      knowledgeName1: "",
      knowledgeValue1: 0,
      knowledgeName2: "",
      knowledgeValue2: 0,
    },
    disciplines: [
      { name: "123", value: 2 }
    ],
    disciplinePaths: [],
    rituals: [],
    backgrounds: [
      { name: "2342", value: 0 }
    ],
    virtues: {
      conscience: 1,
      self_control: 4,
      courage: 1
    },
    merits: ["324"],
    flaws: ["sdfsdf"],
    state: {
      humanity: 5,
      pathName: "",
      bearingName: "",
      bearingModifier: "",
      willpowerRating: 7,
      willpowerPool: 0,
      bloodpool: 3,
      bloodPerTurn: "",
      weakness: "",
      experience: "",

      // changeling
      antithesis: '',
      thresholds: '',
      birthrightsFrailties: '',
      glamourRating: 0,
      glamourPool: 0,
      banalityRating: 0,
      banalityPool: 0,
      nightmare: 0,
    },
    health: {
      bruised: 0,
      hurt: 2,
      injured: 1,
      wounded: 1,
      mauled: 0,
      crippled: 0,
      incapacitated: 0
    },
    healthChimerical: {
      bruised: 0,
      hurt: 2,
      injured: 1,
      wounded: 1,
      mauled: 0,
      crippled: 0,
      incapacitated: 0
    },
    notes: "notes sdsdsdf",
    charHistory: "charHistory sdsdsdf",
    goals: "goals sdsdsdf",
    arts: [
      { name: "art", value: 1 }
    ],
    realms: {
      actor: 0,
      fae: 0,
      nature: 0,
      prop: 0,
      scene: 0,
      time: 0,
    }
  },
  Settings: {
    backgroundColor: "#ababab",
    charsheetBackColor: "#ffffff",
    charsheetBackImage_v2: defaultBackgroundUrl,
    charsheetBackMode: "charsheet-image"
  }
}
