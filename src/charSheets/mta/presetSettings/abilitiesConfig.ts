import { Abilities, AbilitiesConfig } from "../../../charSheets/root/domain";
import { MtAAbilities } from "../domain";

type AbilitiesT = keyof Abilities & keyof MtAAbilities;

export const talentsArr: AbilitiesT[] = [
  "athletics",
  "alertness",
  "brawl",
  "intimidation",
  "art",
  "expression",
  "leadership",
  "streetwise",
  "subterfuge",
  "awareness",
  "empathy",
];
export const skillsArr: AbilitiesT[] = [
  "martialArts",
  "drive",
  "survival",
  "research",
  "meditation",
  "crafts",
  "stealth",
  "firearms",
  "melee",
  "technology",
  "etiquette",
];
export const knowledgesArr: AbilitiesT[] = [
  "academics",
  "science",
  "enigmas_mta",
  "law",
  "computer",
  "cosmology",
  "medicine",
  "occult",
  "politics",
  "investigation",
  "esoterica",
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
