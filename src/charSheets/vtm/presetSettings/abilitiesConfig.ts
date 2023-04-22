import { Abilities, AbilitiesConfig } from "../../../charSheets/root/domain";
import { VtMAbilities } from "../domain";

type AbilitiesT = keyof Abilities & keyof VtMAbilities;

export const talentsArr: AbilitiesT[] = [
  "athletics",
  "alertness",
  "brawl",
  "intimidation",
  "expression",
  "leadership",
  "streetwise",
  "subterfuge",
  "awareness",
  "empathy",
];
export const skillsArr: AbilitiesT[] = [
  "drive",
  "larceny",
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
  "medicine",
  "occult",
  "politics",
  "investigation",
  "finance",
  "technology",
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
