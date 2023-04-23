export interface AbilitiesExtension {
  talentName1: string;
  talentValue1: number;
  talentName2: string;
  talentValue2: number;
  skillName1: string;
  skillValue1: number;
  skillName2: string;
  skillValue2: number;
  knowledgeName1: string;
  knowledgeValue1: number;
  knowledgeName2: string;
  knowledgeValue2: number;
}

export type AbilitiesExtensionName = keyof Pick<
  AbilitiesExtension,
  | "talentName1"
  | "talentName2"
  | "skillName1"
  | "skillName2"
  | "knowledgeName1"
  | "knowledgeName2"
>;

export type AbilitiesExtensionValue = keyof Pick<
  AbilitiesExtension,
  | "talentValue1"
  | "talentValue2"
  | "skillValue1"
  | "skillValue2"
  | "knowledgeValue1"
  | "knowledgeValue2"
>;

export interface CommonAbilities {
  alertness: number;
  athletics: number;
  brawl: number;
  empathy: number;
  expression: number;
  intimidation: number;
  leadership: number;
  streetwise: number;
  subterfuge: number;
  awareness: number;
  animalken: number;
  crafts: number;
  drive: number;
  etiquette: number;
  firearms: number;
  melee: number;
  performance: number;
  stealth: number;
  survival: number;
  larceny: number;
  academics: number;
  computer: number;
  finance: number;
  investigation: number;
  law: number;
  medicine: number;
  occult: number;
  politics: number;
  science: number;
  technology: number;
}
