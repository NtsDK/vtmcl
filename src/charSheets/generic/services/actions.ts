import * as R from "ramda";

import { applyRange, capitalize, mutateObj } from "../../../lib/miscUtils";
import { CombinedGenericService } from "../application/ports";
import {
  Abilities,
  Attributes,
  CharSheet,
  Profile,
  State,
} from "../../root/domain";
import {
  AbilitiesExtensionName,
  AbilitiesExtensionValue,
  Health,
  Virtues,
} from "../domain";
import { getLimits, ServiceToActions } from "../../root/services/public";

const stringValues = [
  "notes",
  "alliesAndContacts",
  "possessions",
  "appearanceDescription",
  "characterImage",
  "charHistory",
  "goals",
] as const;

function generateStringMutators<T extends readonly any[]>(
  arr: T
): {
  [key in T[number] as `set${Capitalize<key>}`]: (
    state: CharSheet,
    [value]: [string]
  ) => CharSheet;
} {
  return arr.reduce((acc, itemName) => {
    acc[`set${capitalize(itemName)}`] = (
      state: CharSheet,
      [value]: [string]
    ): CharSheet => {
      return mutateObj(state, itemName, value);
    };
    return acc;
  }, {});
}

const res = generateStringMutators(stringValues);

// setStringItem(
//   state: CharSheet,
//   [itemName, value]: [StringValueNames, string]
// ): CharSheet {
//   return mutateObj(state, itemName, value);
// },

export const genericActions: ServiceToActions<CombinedGenericService> = {
  ...res,
  setProfileItem(
    state: CharSheet,
    [itemName, value]: [keyof Profile, string]
  ): CharSheet {
    return mutateObj(
      state,
      "profile",
      mutateObj(state.profile, itemName, value)
    );
  },
  setAttribute(
    state: CharSheet,
    [attributeName, value]: [keyof Attributes, number]
  ): CharSheet {
    const limits = getLimits(state);
    return mutateObj(
      state,
      "attributes",
      mutateObj(
        state.attributes,
        attributeName,
        applyRange(0, limits.parameterLimit, value)
      )
    );
  },
  setAbility(
    state: CharSheet,
    [abilityName, value]: [keyof Abilities, number]
  ): CharSheet {
    const limits = getLimits(state);
    return mutateObj(
      state,
      "abilities",
      mutateObj(
        state.abilities,
        abilityName,
        applyRange(0, limits.parameterLimit, value)
      )
    );
  },
  setAbilityExtensionName(
    state: CharSheet,
    [abilityName, name]: [AbilitiesExtensionName, string]
  ): CharSheet {
    return mutateObj(
      state,
      "abilitiesExtension",
      mutateObj(state.abilitiesExtension, abilityName, name)
    );
  },
  setAbilityExtensionValue(
    state: CharSheet,
    [abilityValue, value]: [AbilitiesExtensionValue, number]
  ): CharSheet {
    return mutateObj(
      state,
      "abilitiesExtension",
      mutateObj(state.abilitiesExtension, abilityValue, value)
    );
  },

  setHealth(
    state: CharSheet,
    [healthName, value]: [keyof Health, number]
  ): CharSheet {
    return mutateObj(
      state,
      "health",
      mutateObj(state.health, healthName, applyRange(0, 3, value))
    );
  },
  setHealthChimerical(
    state: CharSheet,
    [healthName, value]: [keyof Health, number]
  ): CharSheet {
    return mutateObj(
      state,
      "healthChimerical",
      mutateObj(state.healthChimerical, healthName, applyRange(0, 3, value))
    );
  },

  setState<T extends keyof State>(
    state: CharSheet,
    [stateName, value]: [T, State[T]]
  ): CharSheet {
    const limits = getLimits(state);
    if (typeof value === "number") {
      let max = 10;
      if (stateName === "bloodpool") {
        max = limits.bloodpool;
      }
      if (stateName === "paradox" || stateName === "quintessence") {
        max = 20;
      }
      return mutateObj(state, "state", {
        ...state.state,
        [stateName]: applyRange(
          0,
          max,
          value
        ),
      });
    } else {
      return mutateObj(
        state,
        "state",
        mutateObj(state.state, stateName, value)
      );
    }
  },

  addMerit(state: CharSheet): CharSheet {
    return mutateObj(state, "merits", R.append("", state.merits));
  },
  removeMerit(state: CharSheet, [index]: [number]): CharSheet {
    return mutateObj(state, "merits", R.remove(index, 1, state.merits));
  },
  setMerit(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return mutateObj(state, "merits", R.update(index, name, state.merits));
  },

  addFlaw(state: CharSheet): CharSheet {
    return mutateObj(state, "flaws", R.append("", state.flaws));
  },
  removeFlaw(state: CharSheet, [index]: [number]): CharSheet {
    return mutateObj(state, "flaws", R.remove(index, 1, state.flaws));
  },
  setFlaw(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return mutateObj(state, "flaws", R.update(index, name, state.flaws));
  },

  addBackground(state: CharSheet): CharSheet {
    return mutateObj(
      state,
      "backgrounds",
      R.append({ name: "", value: 0 }, state.backgrounds)
    );
  },
  removeBackground(state: CharSheet, [index]: [number]): CharSheet {
    return mutateObj(
      state,
      "backgrounds",
      R.remove(index, 1, state.backgrounds)
    );
  },
  setBackgroundName(
    state: CharSheet,
    [index, name]: [number, string]
  ): CharSheet {
    return mutateObj(
      state,
      "backgrounds",
      R.update(
        index,
        {
          ...state.backgrounds[index],
          name,
        },
        state.backgrounds
      )
    );
  },
  setBackgroundValue(
    state: CharSheet,
    [index, value]: [number, number]
  ): CharSheet {
    const limits = getLimits(state);
    return mutateObj(
      state,
      "backgrounds",
      R.update(
        index,
        {
          ...state.backgrounds[index],
          value: applyRange(0, limits.parameterLimit, value),
        },
        state.backgrounds
      )
    );
  },

  addOtherTrait(state: CharSheet): CharSheet {
    return mutateObj(
      state,
      "otherTraits",
      R.append({ name: "", value: 0 }, state.otherTraits)
    );
  },
  removeOtherTrait(state: CharSheet, [index]: [number]): CharSheet {
    return mutateObj(
      state,
      "otherTraits",
      R.remove(index, 1, state.otherTraits)
    );
  },
  setOtherTraitName(
    state: CharSheet,
    [index, name]: [number, string]
  ): CharSheet {
    return mutateObj(
      state,
      "otherTraits",
      R.update(
        index,
        {
          ...state.otherTraits[index],
          name,
        },
        state.otherTraits
      )
    );
  },
  setOtherTraitValue(
    state: CharSheet,
    [index, value]: [number, number]
  ): CharSheet {
    const limits = getLimits(state);
    return mutateObj(
      state,
      "otherTraits",
      R.update(
        index,
        {
          ...state.otherTraits[index],
          value: applyRange(0, limits.parameterLimit, value),
        },
        state.otherTraits
      )
    );
  },
  setVirtue(
    state: CharSheet,
    [virtueName, value]: [keyof Virtues, number]
  ): CharSheet {
    return mutateObj(
      state,
      "virtues",
      mutateObj(state.virtues, virtueName, applyRange(1, 5, value))
    );
  },
};
