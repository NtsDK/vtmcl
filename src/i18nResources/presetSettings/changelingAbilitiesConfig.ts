import { Abilities, AbilitiesConfig } from "../../domain";

export const talentsArr: (keyof Abilities)[] = [
  'athletics',
  'alertness',
  'brawl',
  'intimidation',
  'kenning',
  'expression',
  'leadership',
  'streetwise',
  'subterfuge',
  'empathy',
];
export const skillsArr: (keyof Abilities)[] = [
  'drive',
  'larceny',
  'survival',
  'performance',
  'animalken',
  'crafts',
  'stealth',
  'firearms',
  'melee',
  'etiquette',
];
export const knowledgesArr: (keyof Abilities)[] = [
  'gremayre',
  'academics',
  'science',
  'enigmas',
  'law',
  'computer',
  'medicine',
  'politics',
  'investigation',
  'technology',
];

export const changelingAbilitiesConfig: AbilitiesConfig = [{
  header: 'talents',
  items: talentsArr,
  extension: 'talent'
}, {
  header: 'skills',
  items: skillsArr,
  extension: 'skill'
}, {
  header: 'knowledges',
  items: knowledgesArr,
  extension: 'knowledge'
}];
