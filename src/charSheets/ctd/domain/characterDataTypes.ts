export interface CtDProfile {
  court: string;
  primaryLegacy: string;
  secondaryLegacy: string;
  house: string;
  seeming: string;
  kith: string;
  motley: string;
}

// Changeling
export type Arts = {
  name: string;
  value: number;
}[];

export interface Realms {
  actor: number;
  fae: number;
  nature: number;
  prop: number;
  scene: number;
  time: number;
}

export interface CtDState {
  antithesis: string;
  thresholds: string;
  birthrightsFrailties: string;
  glamourRating: number;
  glamourPool: number;
  banalityRating: number;
  banalityPool: number;
  nightmare: number;
}
