export interface Abilities {
  "alertness": number;
  "athletics": number;
  "brawl": number;
  "empathy": number;
  "expression": number;
  "intimidation": number;
  "leadership": number;
  "streetwise": number;
  "subterfuge": number;
  "awareness": number;
  "animalken": number;
  "crafts": number;
  "drive": number;
  "etiquette": number;
  "firearms": number;
  "melee": number;
  "performance": number;
  "stealth": number;
  "survival": number;
  "larceny": number;
  "academics": number;
  "computer": number;
  "finance": number;
  "investigation": number;
  "law": number;
  "medicine": number;
  "occult": number;
  "politics": number;
  "science": number;
  "technology": number;
}

export const talentsArr: (keyof Abilities)[] = [
  'alertness',
  'athletics',
  'awareness',
  'brawl',
  'empathy',
  'expression',
  'intimidation',
  'leadership',
  'streetwise',
  'subterfuge',
];
export const skillsArr: (keyof Abilities)[] = [
  'animalken',
  'crafts',
  'drive',
  'etiquette',
  'firearms',
  'larceny',
  'melee',
  'performance',
  'stealth',
  'survival',
];
export const knowledgesArr: (keyof Abilities)[] = [
  'academics',
  'computer',
  'finance',
  'investigation',
  'law',
  'medicine',
  'occult',
  'politics',
  'science',
  'technology',
];