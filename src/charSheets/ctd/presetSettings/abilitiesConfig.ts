import { Abilities, AbilitiesConfig } from "../../root/domain";
import { CtDAbilities } from "../domain";

type AbilitiesT = keyof Abilities & keyof CtDAbilities;

export const talentsArr: AbilitiesT[] = [
  "athletics",
  "alertness",
  "brawl",
  "intimidation",
  "kenning",
  "expression",
  "leadership",
  "streetwise",
  "subterfuge",
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
  "gremayre",
  "academics",
  "science",
  "enigmas",
  "law",
  "computer",
  "medicine",
  "politics",
  "investigation",
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
