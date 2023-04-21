import React, {
  useState,
  PropsWithChildren,
  useEffect,
  useReducer,
  useMemo,
} from "react";
import * as R from "ramda";
import { useContext } from "react";
import {
  ErrorDescriptionService,
  AbilitiesService,
  AttributesService,
  DisciplinesService,
  MeritsNFlawsService,
  NotesService,
  ProfileService,
  SettingsService,
  HealthService,
  StatusService,
  BackgroundsService,
  VirtuesService,
  CharSheetStorageService,
  AbilitiesExtensionService,
  PresetService,
  RealmsService,
  ArtsService,
  LimitService,
  HistoryService,
  DisciplinePathsService,
  RitualsService,
  AlliesAndContactsService,
  PossessionsService,
  AppearanceService,
  OtherTraitsService,
} from "../application/ports";
import {
  Attributes,
  Abilities,
  AbilitiesExtensionName,
  AbilitiesExtensionValue,
  CharSheet,
  CharsheetBackMode,
  ErrorDescription,
  Health,
  Notes,
  Profile,
  State,
  Virtues,
  Realms,
  Preset,
  CharHistory,
  Goals,
  AlliesAndContacts,
  AppearanceDescription,
  CharacterImage,
  Possessions,
} from "../domain";
import {
  getCharSheetFromLS,
  saveCharSheetInLS,
} from "../infrastructure/lsDbService";
import { initialCharSheet } from "./initialValues";

import { getLimits } from "../i18nResources/getLimits";
import { charSheetMetaActions } from "./actions_charSheetMeta";
import { commonPartActions } from "./actions_commonParts";
import { vtmPartActions } from "./actions_vtmParts";
import { ctdPartActions } from "./actions_ctdParts";
import { CompositeReducer } from "./CompositeReducer";

export interface StateStore
  extends PresetService,
    ProfileService,
    AttributesService,
    AbilitiesService,
    AbilitiesExtensionService,
    DisciplinesService,
    DisciplinePathsService,
    RitualsService,
    BackgroundsService,
    VirtuesService,
    MeritsNFlawsService,
    HealthService,
    StatusService,
    NotesService,
    SettingsService,
    CharSheetStorageService,
    ErrorDescriptionService,
    RealmsService,
    ArtsService,
    LimitService,
    HistoryService,
    AlliesAndContactsService,
    PossessionsService,
    AppearanceService,
    OtherTraitsService {}

// @ts-ignore
const StoreContext = React.createContext<StateStore>({});
export const useStore = () => useContext(StoreContext);

interface ProviderProps {}

const reducer = new CompositeReducer<CharSheet>()
  .assign(charSheetMetaActions)
  .assign(commonPartActions)
  .assign(vtmPartActions)
  .assign(ctdPartActions);
export const Provider: React.FC<PropsWithChildren<ProviderProps>> = ({
  children,
}) => {
  const [initialized, setInitialized] = useState(false);

  const [charSheet, dispatch] = useReducer(reducer.reduce, initialCharSheet);

  const limits = useMemo(() => {
    return getLimits(charSheet);
  }, [charSheet.preset, charSheet.profile.generation]);

  useEffect(() => {
    dispatch({
      type: "setState",
      props: ["bloodPerTurn", String(limits.bloodPerTurnLimit)],
    });
  }, [limits.bloodPerTurnLimit]);

  useEffect(() => {
    saveCharSheetInLS(charSheet);
  }, [charSheet]);

  const [errorDescription, setErrorDescription] =
    useState<ErrorDescription | null>(null);

  const functions = useMemo(() => {
    return {
      setCharSheet(cs: CharSheet) {
        dispatch({ type: "setCharSheet", props: [cs] });
      },
      setPreset(preset2: Preset) {
        dispatch({ type: "setPresetValue", props: [preset2] });
      },
      setProfileItem(itemName: keyof Profile, value: string) {
        dispatch({ type: "setProfileItem", props: [itemName, value] });
      },
      setAttribute(attributeName: keyof Attributes, value: number) {
        dispatch({ type: "setAttribute", props: [attributeName, value] });
      },
      setAbility(abilityName: keyof Abilities, value: number) {
        dispatch({ type: "setAbility", props: [abilityName, value] });
      },
      setAbilityExtensionName: function (
        abilityName: AbilitiesExtensionName,
        name: string
      ): void {
        dispatch({
          type: "setAbilityExtensionName",
          props: [abilityName, name],
        });
      },
      setAbilityExtensionValue: function (
        abilityName: AbilitiesExtensionValue,
        value: number
      ): void {
        dispatch({
          type: "setAbilityExtensionValue",
          props: [abilityName, value],
        });
      },
      setVirtue(virtueName: keyof Virtues, value: number) {
        dispatch({ type: "setVirtue", props: [virtueName, value] });
      },

      setRealm(realmName: keyof Realms, value: number) {
        dispatch({ type: "setRealm", props: [realmName, value] });
      },

      setHealth(healthName: keyof Health, value: number) {
        dispatch({ type: "setHealth", props: [healthName, value] });
      },
      setHealthChimerical(healthName: keyof Health, value: number) {
        dispatch({ type: "setHealthChimerical", props: [healthName, value] });
      },

      setState<T extends keyof State>(stateName: T, value: State[T]) {
        dispatch({ type: "setState", props: [stateName, value] });
      },

      setNotes: function (notes: Notes): void {
        dispatch({ type: "setStringItem", props: ["notes", notes] });
      },
      setAlliesAndContacts(alliesAndContacts: AlliesAndContacts): void {
        dispatch({
          type: "setStringItem",
          props: ["alliesAndContacts", alliesAndContacts],
        });
      },
      setPossessions(possessions: Possessions): void {
        dispatch({
          type: "setStringItem",
          props: ["possessions", possessions],
        });
      },
      setAppearanceDescription(
        appearanceDescription: AppearanceDescription
      ): void {
        dispatch({
          type: "setStringItem",
          props: ["appearanceDescription", appearanceDescription],
        });
      },
      setCharacterImage(characterImage: CharacterImage): void {
        dispatch({
          type: "setStringItem",
          props: ["characterImage", characterImage],
        });
      },
      setCharHistory: function (charHistory: CharHistory): void {
        dispatch({
          type: "setStringItem",
          props: ["charHistory", charHistory],
        });
      },
      setGoals: function (goals: Goals): void {
        dispatch({ type: "setStringItem", props: ["goals", goals] });
      },

      addMerit() {
        dispatch({ type: "addMerit", props: [] });
      },
      removeMerit(index: number) {
        dispatch({ type: "removeMerit", props: [index] });
      },
      setMerit(index: number, name: string) {
        dispatch({ type: "setMerit", props: [index, name] });
      },
      addFlaw() {
        dispatch({ type: "addFlaw", props: [] });
      },
      removeFlaw(index: number) {
        dispatch({ type: "removeFlaw", props: [index] });
      },
      setFlaw(index: number, name: string) {
        dispatch({ type: "setFlaw", props: [index, name] });
      },

      addDiscipline() {
        dispatch({ type: "addDiscipline", props: [] });
      },
      removeDiscipline(index: number) {
        dispatch({ type: "removeDiscipline", props: [index] });
      },
      setDisciplineName(index: number, name: string) {
        dispatch({ type: "setDisciplineName", props: [index, name] });
      },
      setDisciplineValue(index: number, value: number) {
        dispatch({ type: "setDisciplineValue", props: [index, value] });
      },
      addDisciplinePath() {
        dispatch({ type: "addDisciplinePath", props: [] });
      },
      removeDisciplinePath(index: number) {
        dispatch({ type: "removeDisciplinePath", props: [index] });
      },
      setDisciplinePathName(index: number, name: string) {
        dispatch({ type: "setDisciplinePathName", props: [index, name] });
      },
      setDisciplinePathValue(index: number, value: number) {
        dispatch({ type: "setDisciplinePathValue", props: [index, value] });
      },
      addRitual() {
        dispatch({ type: "addRitual", props: [] });
      },
      removeRitual(index: number) {
        dispatch({ type: "removeRitual", props: [index] });
      },
      setRitualName(index: number, name: string) {
        dispatch({ type: "setRitualName", props: [index, name] });
      },
      setRitualLevel(index: number, level: string) {
        dispatch({ type: "setRitualLevel", props: [index, level] });
      },

      addArt() {
        dispatch({ type: "addArt", props: [] });
      },
      removeArt(index: number) {
        dispatch({ type: "removeArt", props: [index] });
      },
      setArtName(index: number, name: string) {
        dispatch({ type: "setArtName", props: [index, name] });
      },
      setArtValue(index: number, value: number) {
        dispatch({ type: "setArtValue", props: [index, value] });
      },

      addBackground() {
        dispatch({ type: "addBackground", props: [] });
      },
      removeBackground(index: number) {
        dispatch({ type: "removeBackground", props: [index] });
      },
      setBackgroundName(index: number, name: string) {
        dispatch({ type: "setBackgroundName", props: [index, name] });
      },
      setBackgroundValue(index: number, value: number) {
        dispatch({ type: "setBackgroundValue", props: [index, value] });
      },

      addOtherTrait() {
        dispatch({ type: "addOtherTrait", props: [] });
      },
      removeOtherTrait(index: number) {
        dispatch({ type: "removeOtherTrait", props: [index] });
      },
      setOtherTraitName(index: number, name: string) {
        dispatch({ type: "setOtherTraitName", props: [index, name] });
      },
      setOtherTraitValue(index: number, value: number) {
        dispatch({ type: "setOtherTraitValue", props: [index, value] });
      },

      setBackgroundColor(backgroundColor: string) {
        dispatch({ type: "setBackgroundColor", props: [backgroundColor] });
      },
      setCharsheetBackColor(charsheetBackColor: string) {
        dispatch({
          type: "setCharsheetBackColor",
          props: [charsheetBackColor],
        });
      },
      setCharsheetBackImage(charsheetBackImage_v2: string) {
        dispatch({
          type: "setCharsheetBackImage",
          props: [charsheetBackImage_v2],
        });
      },
      setCharsheetBackMode(charsheetBackMode: CharsheetBackMode) {
        dispatch({ type: "setCharsheetBackMode", props: [charsheetBackMode] });
      },
    };
  }, [dispatch]);

  if (!initialized) {
    setInitialized(true);
    const cs = getCharSheetFromLS();
    if (cs !== null) {
      functions.setCharSheet(cs);
    }
  }

  const value: StateStore = {
    ...charSheet,
    ...functions,
    getPresetDisplayName() {
      return charSheet.preset === "vampire_v20" ? "VtM V20" : "CtD V20";
    },

    limits,

    getCharSheet(): CharSheet {
      return R.clone(charSheet);
    },
    errorDescription,
    setErrorDescription,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
