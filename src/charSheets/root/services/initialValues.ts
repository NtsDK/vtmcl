import * as R from "ramda";

import { CURRENT_VERSION } from "../../../constants";
import { Abilities, CharSheet, PresetName, Profile, State } from "../domain";
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
  initialVirtues,
} from "../../generic/services/initialValues";
import {
  initialDisciplinePaths,
  initialDisciplines,
  initialRituals,
  initialVtMAbilities,
  initialVtMProfile,
  initialVtMState,
} from "../../vtm/services/initialValues";
import {
  initialVtDAAbilities,
  initialVtDAState,
} from "../../vtda/services/initialValues";
import { initialSettings } from "../../misc/services/initialValues";
import {
  initialHH2Abilities,
  initialHH2Profile,
  initialHH2State,
  initialNuminaAndOtherTraits,
} from "../../hh2/services/initialValues";
import {
  initialVtM_V3Profile,
  initialVtM_V3Abilities,
  initialVtM_V3State,
} from "../../vtm_v3/services/initialValues";
import { initialMtAAbilities, initialMtAProfile, initialMtAState, initialSpheres } from "../../mta/services/initialValues";

export const initialPreset: PresetName = "vampire_v20";

export const initialProfile: Profile = {
  ...initialVtMProfile,
  ...initialCommonProfile,
  ...initialCtDProfile,
  ...initialHH2Profile,
  ...initialVtM_V3Profile,
  ...initialMtAProfile,
};

export const initialAbilities: Abilities = {
  ...initialVtMAbilities,
  ...initialCtDAbilities,
  ...initialHH2Abilities,
  ...initialVtDAAbilities,
  ...initialVtM_V3Abilities,
  ...initialMtAAbilities,
};

export const initialState: State = {
  ...initialVtMState,
  ...initialCtDState,
  ...initialHH2State,
  ...initialVtDAState,
  ...initialVtM_V3State,
  ...initialMtAState
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
  spheres: initialSpheres,

  arts: initialArts,
  realms: initialRealms,

  numinaAndOtherTraits: initialNuminaAndOtherTraits,
};
