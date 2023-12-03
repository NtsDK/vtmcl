import { Abilities, AbilitiesConfig } from "../../../charSheets/root/domain";
import { VtM_V3Abilities } from "../domain";

type AbilitiesT = keyof Abilities & keyof VtM_V3Abilities;

export const talentsArr: AbilitiesT[] = [
  "athletics",
  "alertness",
  "brawl",
  "intimidation",
  "expression",
  "leadership",
  "dodge",
  "streetwise",
  "subterfuge",
  "empathy",
];
export const skillsArr: AbilitiesT[] = [
  "security",
  "drive",
  "survival",
  "performance",
  "animalken",
  "crafts",
  "stealth",
  "firearms",
  "melee",
  "etiquette",
];
export const knowledgesArr: AbilitiesT[] = [
  "academics",
  "science",
  "law",
  "computer",
  "linguistics",
  "medicine",
  "occult",
  "politics",
  "investigation",
  "finance",
];

export const abilitiesConfig: AbilitiesConfig = [
  {
    header: "talents",
    items: talentsArr,
    extension: "talent",
  },
  {
    header: "skills",
    items: skillsArr,
    extension: "skill",
  },
  {
    header: "knowledges",
    items: knowledgesArr,
    extension: "knowledge",
  },
];
