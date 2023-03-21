import {
  Abilities,
  AbilitiesExtensionName,
  AbilitiesExtensionValue,
  Attributes,
  CharSheet,
  CharsheetBackMode,
  Health,
  Preset,
  Profile,
  Realms,
  State,
  Virtues
} from "../domain";
import { getLimits } from "../i18nResources/getLimits";

type StringValueNames = Extract<keyof CharSheet,
  | 'notes'
  | 'alliesAndContacts'
  | 'possessions'
  | 'appearanceDescription'
  | 'characterImage'
  | 'charHistory'
  | 'goals'
>;

export function applyRange(min: number, max: number, value: number) {
  return value < min
    ? min
    : value > max
      ? max
      : value;
}

export const commonActions = {
  setCharSheet(state: CharSheet, [newState]: [CharSheet]): CharSheet {
    return {
      ...newState,
    };
  },

  setPresetValue(state: CharSheet, [preset]: [Preset]): CharSheet {
    return {
      ...state,
      preset,
    };
  },
  setProfileItem(state: CharSheet, [itemName, value]: [keyof Profile, string]): CharSheet {
    return {
      ...state,
      profile: {
        ...state.profile,
        [itemName]: value
      }
    };
  },
  setAttribute(state: CharSheet, [attributeName, value]: [keyof Attributes, number]): CharSheet {
    const limits = getLimits(state);
    return {
      ...state,
      attributes: {
        ...state.attributes,
        [attributeName]: applyRange(0, limits.parameterLimit, value)
      }
    };
  },
  setAbility(state: CharSheet, [abilityName, value]: [keyof Abilities, number]): CharSheet {
    const limits = getLimits(state);
    return {
      ...state,
      abilities: {
        ...state.abilities,
        [abilityName]: applyRange(0, limits.parameterLimit, value)
      }
    };
  },
  setAbilityExtensionName(state: CharSheet, [abilityName, name]: [AbilitiesExtensionName, string]): CharSheet {
    return {
      ...state,
      abilitiesExtension: {
        ...state.abilitiesExtension,
        [abilityName]: name
      }
    };
  },
  setAbilityExtensionValue(state: CharSheet, [abilityValue, value]: [AbilitiesExtensionValue, number]): CharSheet {
    return {
      ...state,
      abilitiesExtension: {
        ...state.abilitiesExtension,
        [abilityValue]: value
      }
    };
  },
  setVirtue(state: CharSheet, [virtueName, value]: [keyof Virtues, number]): CharSheet {
    return {
      ...state,
      virtues: {
        ...state.virtues,
        [virtueName]: applyRange(1, 5, value)
      }
    };
  },
  setRealm(state: CharSheet, [realmName, value]: [keyof Realms, number]): CharSheet {
    return {
      ...state,
      realms: {
        ...state.realms,
        [realmName]: applyRange(1, 5, value)
      }
    };
  },
  setHealth(state: CharSheet, [healthName, value]: [keyof Health, number]): CharSheet {
    return {
      ...state,
      health: {
        ...state.health,
        [healthName]: applyRange(0, 3, value)
      }
    };
  },
  setHealthChimerical(state: CharSheet, [healthName, value]: [keyof Health, number]): CharSheet {
    return {
      ...state,
      healthChimerical: {
        ...state.healthChimerical,
        [healthName]: applyRange(0, 3, value)
      }
    };
  },
  setState<T extends keyof State>(state: CharSheet, [stateName, value]: [T, State[T]]): CharSheet {
    const limits = getLimits(state);
    if (typeof value === 'number') {
      return {
        ...state,
        state: {
          ...state.state,
          [stateName]: applyRange(0, stateName === 'bloodpool' ? limits.bloodpool : 10, value)
        }
      };
    } else {
      return {
        ...state,
        state: {
          ...state.state,
          [stateName]: value
        }
      };
    }
  },
  setStringItem(state: CharSheet, [itemName, value]: [StringValueNames, string]): CharSheet {
    return {
      ...state,
      [itemName]: value
    };
  },

  addMerit(state: CharSheet): CharSheet {
    return {
      ...state,
      merits: [...state.merits, '']
    };
  },
  removeMerit(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      merits: state.merits.filter((el, index2) => index2 !== index)
    };
  },
  setMerit(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      merits: state.merits.map((el, index2) => {
        if (index2 !== index)
          return el;
        return name;
      })
    };
  },

  addFlaw(state: CharSheet): CharSheet {
    return {
      ...state,
      flaws: [...state.flaws, '']
    };
  },
  removeFlaw(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      flaws: state.flaws.filter((el, index2) => index2 !== index)
    };
  },
  setFlaw(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      flaws: state.flaws.map((el, index2) => {
        if (index2 !== index)
          return el;
        return name;
      })
    };
  },

  addDiscipline(state: CharSheet): CharSheet {
    return {
      ...state,
      disciplines: [...state.disciplines, { name: '', value: 0 }]
    };
  },
  removeDiscipline(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      disciplines: state.disciplines.filter((el, index2) => index2 !== index)
    };
  },
  setDisciplineName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      disciplines: state.disciplines.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      })
    };
  },
  setDisciplineValue(state: CharSheet, [index, value]: [number, number]): CharSheet {
    const limits = getLimits(state);
    return {
      ...state,
      disciplines: state.disciplines.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          value: applyRange(0, limits.parameterLimit, value)
        };
      })
    };
  },

  addDisciplinePath(state: CharSheet): CharSheet {
    return {
      ...state,
      disciplinePaths: [...state.disciplinePaths, { name: '', value: 0 }]
    };
  },
  removeDisciplinePath(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      disciplinePaths: state.disciplinePaths.filter((el, index2) => index2 !== index)
    };
  },
  setDisciplinePathName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      disciplinePaths: state.disciplinePaths.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      })
    };
  },
  setDisciplinePathValue(state: CharSheet, [index, value]: [number, number]): CharSheet {
    const limits = getLimits(state);
    return {
      ...state,
      disciplinePaths: state.disciplinePaths.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          value: applyRange(0, limits.parameterLimit, value)
        };
      })
    };
  },

  addRitual(state: CharSheet): CharSheet {
    return {
      ...state,
      rituals: [...state.rituals, { name: '', level: '' }]
    };
  },
  removeRitual(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      rituals: state.rituals.filter((el, index2) => index2 !== index)
    };
  },
  setRitualName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      rituals: state.rituals.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      })
    };
  },
  setRitualLevel(state: CharSheet, [index, level]: [number, string]): CharSheet {
    return {
      ...state,
      rituals: state.rituals.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          level
        };
      })
    };
  },

  addArt(state: CharSheet): CharSheet {
    return {
      ...state,
      arts: [...state.arts, { name: '', value: 0 }]
    };
  },
  removeArt(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      arts: state.arts.filter((el, index2) => index2 !== index)
    };
  },
  setArtName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      arts: state.arts.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      })
    };
  },
  setArtValue(state: CharSheet, [index, value]: [number, number]): CharSheet {
    const limits = getLimits(state);
    return {
      ...state,
      arts: state.arts.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          value: applyRange(0, limits.parameterLimit, value)
        };
      })
    };
  },

  addBackground(state: CharSheet): CharSheet {
    return {
      ...state,
      backgrounds: [...state.backgrounds, { name: '', value: 0 }]
    };
  },
  removeBackground(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      backgrounds: state.backgrounds.filter((el, index2) => index2 !== index)
    };
  },
  setBackgroundName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      backgrounds: state.backgrounds.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      })
    };
  },
  setBackgroundValue(state: CharSheet, [index, value]: [number, number]): CharSheet {
    const limits = getLimits(state);
    return {
      ...state,
      backgrounds: state.backgrounds.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          value: applyRange(0, limits.parameterLimit, value)
        };
      })
    };
  },

  addOtherTrait(state: CharSheet): CharSheet {
    return {
      ...state,
      otherTraits: [...state.otherTraits, { name: '', value: 0 }]
    };
  },
  removeOtherTrait(state: CharSheet, [index]: [number]): CharSheet {
    return {
      ...state,
      otherTraits: state.otherTraits.filter((el, index2) => index2 !== index)
    };
  },
  setOtherTraitName(state: CharSheet, [index, name]: [number, string]): CharSheet {
    return {
      ...state,
      otherTraits: state.otherTraits.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      })
    };
  },
  setOtherTraitValue(state: CharSheet, [index, value]: [number, number]): CharSheet {
    const limits = getLimits(state);
    return {
      ...state,
      otherTraits: state.otherTraits.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          value: applyRange(0, limits.parameterLimit, value)
        };
      })
    };
  },

  setBackgroundColor(state: CharSheet, [backgroundColor]: [string]): CharSheet {
    return {
      ...state,
      settings: {
        ...state.settings,
        backgroundColor
      }
    };
  },
  setCharsheetBackColor(state: CharSheet, [charsheetBackColor]: [string]): CharSheet {
    return {
      ...state,
      settings: {
        ...state.settings,
        charsheetBackColor
      }
    };
  },
  setCharsheetBackImage(state: CharSheet, [charsheetBackImage_v2]: [string]): CharSheet {
    return {
      ...state,
      settings: {
        ...state.settings,
        charsheetBackImage_v2
      }
    };
  },
  setCharsheetBackMode(state: CharSheet, [charsheetBackMode]: [CharsheetBackMode]): CharSheet {
    return {
      ...state,
      settings: {
        ...state.settings,
        charsheetBackMode
      }
    };
  },

}
