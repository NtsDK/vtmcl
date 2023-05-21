import { Abilities, AbilitiesConfig } from "../../../charSheets/root/domain";
import { VtDAAbilities } from "../domain";

type AbilitiesT = keyof Abilities & keyof VtDAAbilities;

export const talentsArr: AbilitiesT[] = [
  "athletics",
  "alertness",
  "brawl",
  "intimidation",
  "expression",
  "leadership",
  "legerdemain",
  "subterfuge",
  "awareness",
  "empathy",
];
export const skillsArr: AbilitiesT[] = [
  "archery",
  "commerce",
  "survival",
  "performance",
  "ride",
  "animalken",
  "crafts",
  "stealth",
  "melee",
  "etiquette",
];
export const knowledgesArr: AbilitiesT[] = [
  "academics",
  "law",
  "medicine",
  "occult",
  "politics",
  "investigation",
  "enigmas",
  "hearthWisdom",
  "seneschal",
  "theology",
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
