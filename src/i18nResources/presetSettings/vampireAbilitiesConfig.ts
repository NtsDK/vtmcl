import { Abilities, AbilitiesConfig } from "../../domain";

export const talentsArr: (keyof Abilities)[] = [
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
export const skillsArr: (keyof Abilities)[] = [
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
export const knowledgesArr: (keyof Abilities)[] = [
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

export const vampireAbilitiesConfig: AbilitiesConfig = [
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
