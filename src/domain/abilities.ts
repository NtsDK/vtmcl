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
  'athletics',
  'alertness',
  'brawl',
  'intimidation',
  'expression',
  'leadership',
  'streetwise',
  'subterfuge',
  'awareness',
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
  'academics',
  'science',
  'computer',
  'medicine',
  'occult',
  'politics',
  'investigation',
  'finance',
  'technology',
  'law',
];