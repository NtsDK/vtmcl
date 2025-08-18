import { CharSheet, Limits } from "../domain";

type LimitArgs = Pick<CharSheet, "preset" | "profile">;

export const defaultLimits: Limits = {
  parameterLimit: 5,
  bloodpool: 10,
  bloodPerTurnLimit: 1,
};
export const maxDefaultLimits: Limits = {
  parameterLimit: 10,
  bloodpool: 50,
  bloodPerTurnLimit: 10,
};

export function getLimits(limitArgs: LimitArgs): Limits {
  if (
    limitArgs.preset === "vampire_v20" ||
    limitArgs.preset === "vampire_da_v20" ||
    limitArgs.preset === "vampire_v3_revised"
  ) {
    const { generation } = limitArgs.profile;
    const str = generation.replace(/\D/g, "");
    if (str !== "") {
      const generationNumber = Number(str);
      if (generationToLimits[generationNumber] !== undefined) {
        return generationToLimits[generationNumber];
      }
      return generationNumber < 4 ? maxDefaultLimits : defaultLimits;
    }
  }
  // default
  return defaultLimits;
}

// taken from p.270 of En rulebook
// also exists in p.289 of Ru rulebook
const generationToLimits: Record<number, Limits> = {
  4: {
    parameterLimit: 9,
    bloodpool: 50,
    bloodPerTurnLimit: 10,
  },
  5: {
    parameterLimit: 8,
    bloodpool: 40,
    bloodPerTurnLimit: 8,
  },
  6: {
    parameterLimit: 7,
    bloodpool: 30,
    bloodPerTurnLimit: 6,
  },
  7: {
    parameterLimit: 6,
    bloodpool: 20,
    bloodPerTurnLimit: 4,
  },
  8: {
    parameterLimit: 5,
    bloodpool: 15,
    bloodPerTurnLimit: 3,
  },
  9: {
    parameterLimit: 5,
    bloodpool: 14,
    bloodPerTurnLimit: 2,
  },
  10: {
    parameterLimit: 5,
    bloodpool: 13,
    bloodPerTurnLimit: 1,
  },
  11: {
    parameterLimit: 5,
    bloodpool: 12,
    bloodPerTurnLimit: 1,
  },
  12: {
    parameterLimit: 5,
    bloodpool: 11,
    bloodPerTurnLimit: 1,
  },
};
