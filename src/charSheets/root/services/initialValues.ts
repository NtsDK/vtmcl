import * as R from "ramda";

import { CURRENT_VERSION } from "../../../constants";
import { Abilities, CharSheet, Preset, Profile, State } from "../domain";
import {
  initialArts,
  initialCtDAbilities,
  initialCtDProfile,
  initialCtDState,
  initialRealms,
} from "../../ctd/services/initialValues";
import {
  initialAbilitiesExtension,
  initialAlliesAndContacts,
  initialAppearanceDescription,
  initialAttributes,
  initialBackgrounds,
  initialCharacterImage,
  initialCharHistory,
  initialCommonProfile,
  initialFlaws,
  initialGoals,
  initialHealth,
  initialMerits,
  initialNotes,
  initialOtherTraits,
  initialPossessions,
} from "../../generic/services/initialValues";
import {
  initialDisciplinePaths,
  initialDisciplines,
  initialRituals,
  initialVirtues,
  initialVtMAbilities,
  initialVtMProfile,
  initialVtMState,
} from "../../vtm/services/initialValues";
import { initialSettings } from "../../misc/services/initialValues";

export const initialPreset: Preset = "vampire_v20";

export const initialProfile: Profile = {
  ...initialVtMProfile,
  ...initialCommonProfile,
  ...initialCtDProfile,
};

export const initialAbilities: Abilities = {
  ...initialVtMAbilities,
  ...initialCtDAbilities,
};

export const initialState: State = {
  ...initialVtMState,
  ...initialCtDState,
};

export const initialCharSheet: CharSheet = {
  Version: CURRENT_VERSION,
  settings: initialSettings,

  preset: initialPreset,
  profile: initialProfile,
  attributes: initialAttributes,
  abilities: initialAbilities,
  abilitiesExtension: initialAbilitiesExtension,
  disciplines: initialDisciplines,
  disciplinePaths: initialDisciplinePaths,
  rituals: initialRituals,
  backgrounds: initialBackgrounds,
  virtues: initialVirtues,
  merits: initialMerits,
  flaws: initialFlaws,
  state: initialState,
  health: initialHealth,
  healthChimerical: R.clone(initialHealth),
  notes: initialNotes,
  charHistory: initialCharHistory,
  goals: initialGoals,
  otherTraits: initialOtherTraits,
  appearanceDescription: initialAppearanceDescription,
  characterImage: initialCharacterImage,
  alliesAndContacts: initialAlliesAndContacts,
  possessions: initialPossessions,

  arts: initialArts,
  realms: initialRealms,
};
