import { Abilities, AbilitiesConfig } from "../../../charSheets/root/domain";
import { MtAAbilities } from "../domain";

type AbilitiesT = keyof Abilities & keyof MtAAbilities;

export const talentsArr: AbilitiesT[] = [
  "athletics",
  "alertness",
  "brawl",
  "intimidation",
  "expression",
  "leadership",
  "subterfuge",
  "awareness",
  "empathy",
  "art",
  "streetwise",
];
export const skillsArr: AbilitiesT[] = [
  "survival",
  "crafts",
  "stealth",
  "melee",
  "etiquette",
  "drive",
  "firearms",
  "meditation",
  "martialArts",
  "research",
  "technology"
];
export const knowledgesArr: AbilitiesT[] = [
  "academics",
  "law",
  "medicine",
  "occult",
  "politics",
  "investigation",
  "enigmas",
  "computer",
  "cosmology",
  "esoterica",
  "science"
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
