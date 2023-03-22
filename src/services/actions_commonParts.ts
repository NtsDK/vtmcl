import {
  Abilities,
  AbilitiesExtensionName,
  AbilitiesExtensionValue,
  Attributes,
  CharSheet,
  Health,
  Profile,
  State,
} from "../domain";
import { getLimits } from "../i18nResources/getLimits";
import { applyRange, StringValueNames } from "./typesAndUtils";



export const commonPartActions = {

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

  setHealth(state: CharSheet, [healthName, value]: [keyof Health, number]): CharSheet {
    return {
      ...state,
      health: {
        ...state.health,
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

}
