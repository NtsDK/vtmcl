import React, { useState, PropsWithChildren, useEffect } from "react";
import * as R from 'ramda';
import { useContext } from "react";
import {
//   GameStorageService,
//   ServerDatabaseStorageService,
//   ServerStorageService,
  ErrorDescriptionService,
  AbilitiesService,
  AttributesService,
  DisciplinesService,
  MeritsNFlawsService,
  NotesService,
  ProfileService,
  SettingsService,
  StateNHealthService,
  BackgroundsService,
  VirtuesService,
  CharSheetStorageService,
  AbilitiesExtensionService,
  PresetService,
  RealmsService,
  ArtsService,
} from "../application/ports";
import {
  Attributes,
  Abilities,
  AbilitiesExtension,
  AbilitiesExtensionName,
  AbilitiesExtensionValue,
  Backgrounds,
  CharSheet,
  CharsheetBackMode,
  Disciplines,
  ErrorDescription,
  Flaws,
  Health,
  Merits,
  Notes,
  Profile,
  Settings,
  State,
  Virtues,
  Realms,
  Arts,
  Preset,
} from "../domain";
// import { ErrorDescription } from "../domain/errorDescription";
// import { Game } from "../domain/game";
// import { Server, ServerStatus } from "../domain/server";
// import { ServerDatabase } from "../domain/serverDatabase";
import { getCharSheetFromLS, saveCharSheetInLS } from "../infrastructure/lsDbService";
import {
  initialAttributes,
  initialAbilities,
  initialAbilitiesExtension,
  initialBackgrounds,
  initialDisciplines,
  initialFlaws,
  initialHealth,
  initialMerits,
  initialNotes,
  initialProfile,
  initialSettings,
  initialState,
  initialVirtues,
  initialArts,
  initialRealms,
  initialPreset
} from "./initialValues";
// import { initialGames, initialServers } from "./initialGames";

import { CURRENT_VERSION } from "../constants";

interface StateStore extends
  PresetService,
  ProfileService,
  AttributesService,
  AbilitiesService,
  AbilitiesExtensionService,
  DisciplinesService,
  BackgroundsService,
  VirtuesService,
  MeritsNFlawsService,
  StateNHealthService,
  NotesService,
  SettingsService,
  CharSheetStorageService,
  ErrorDescriptionService,
  RealmsService,
  ArtsService
{
}

// @ts-ignore
const StoreContext = React.createContext<StateStore>({});
export const useStore = () => useContext(StoreContext);

interface ProviderProps {
}

export const Provider: React.FC<PropsWithChildren<ProviderProps>> = ({ children }) => {

  const [initialized, setInitialized] = useState(false);

  const [preset, setPresetValue] = useState<Preset>(initialPreset);
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [attributes, setAttributes] = useState<Attributes>(initialAttributes);
  const [abilities, setAbilities] = useState<Abilities>(initialAbilities);
  const [abilitiesExtension, setAbilitiesExtension] = useState<AbilitiesExtension>(initialAbilitiesExtension);
  const [disciplines, setDisciplines] = useState<Disciplines>(initialDisciplines);
  const [backgrounds, setBackgrounds] = useState<Backgrounds>(initialBackgrounds);
  const [virtues, setVirtues] = useState<Virtues>(initialVirtues);
  const [merits, setMerits] = useState<Merits>(initialMerits);
  const [flaws, setFlaws] = useState<Flaws>(initialFlaws);
  const [state, setState] = useState<State>(initialState);
  const [health, setHealth] = useState<Health>(initialHealth);
  const [healthChimerical, setHealthChimerical] = useState<Health>(R.clone(initialHealth));
  const [notes, setNotes] = useState<Notes>(initialNotes);

  const [arts, setArts] = useState<Arts>(initialArts);
  const [realms, setRealms] = useState<Realms>(initialRealms);

  const [settings, setSettings] = useState<Settings>(initialSettings);

  useEffect(() => {
    saveCharSheetInLS(R.clone({
      preset,
      profile,
      attributes,
      abilities,
      abilitiesExtension,
      disciplines,
      backgrounds,
      virtues,
      merits,
      flaws,
      state,
      health,
      healthChimerical,
      notes,
      arts,
      realms,
      Settings: settings,
      Version: CURRENT_VERSION
    }))
  }, [
    preset,
    profile,
    attributes,
    abilities,
    abilitiesExtension,
    disciplines,
    backgrounds,
    virtues,
    merits,
    flaws,
    state,
    health,
    healthChimerical,
    notes,
    settings,
    arts,
    realms,
  ]);

  // const [servers, innerSetServers] = useState<Server[]>(initialServers);
  // // const [games, setGames] = useState<Game[]>([]);
  // const [games, innerSetGames] = useState<Game[]>(initialGames);
  const [
    errorDescription,
    setErrorDescription
  ] = useState<ErrorDescription | null>(null);

  function setCharSheet(cs: CharSheet) {
    setPresetValue(cs.preset);
    setProfile(cs.profile);
    setAttributes(cs.attributes);
    setAbilities(cs.abilities);
    setAbilitiesExtension(cs.abilitiesExtension);
    setDisciplines(cs.disciplines);
    setBackgrounds(cs.backgrounds);
    setVirtues(cs.virtues);
    setArts(cs.arts);
    setRealms(cs.realms);
    setMerits(cs.merits);
    setFlaws(cs.flaws);
    setState(cs.state);
    setHealth(cs.health);
    setHealthChimerical(cs.healthChimerical);
    setNotes(cs.notes);

    setSettings(cs.Settings);
  }

  if (!initialized) {
    setInitialized(true);
    const cs = getCharSheetFromLS();
    if (cs !== null) {
      setCharSheet(cs);
    }
  }

  function applyRange(min: number, max: number, value: number) {
    return value < min
      ? min
      : value > max
        ? max
        : value;
  }

  const value: StateStore = {
    preset,
    setPreset(preset2: Preset) {
      setPresetValue(preset2);
    },
    profile,
    setProfileItem(itemName: keyof Profile, value: string) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [itemName]: value
      }));
    },
    attributes,
    setAttribute(attributeName: keyof Attributes, value: number) {
      setAttributes({
        ...attributes,
        [attributeName]: applyRange(0, 5, value)
      });
    },
    abilities,
    setAbility(abilityName: keyof Abilities, value: number) {
      setAbilities({
        ...abilities,
        [abilityName]: applyRange(0, 5, value)
      });
    },
    abilitiesExtension,
    setAbilityExtensionName: function (abilityName: AbilitiesExtensionName, name: string): void {
      setAbilitiesExtension({
        ...abilitiesExtension,
        [abilityName]: name
      });
    },
    setAbilityExtensionValue: function (abilityName: AbilitiesExtensionValue, value: number): void {
      setAbilitiesExtension({
        ...abilitiesExtension,
        [abilityName]: applyRange(0, 5, value)
      });
    },
    virtues,
    setVirtue(virtueName: keyof Virtues, value: number) {
      setVirtues({
        ...virtues,
        [virtueName]: applyRange(1, 5, value)
      });
    },

    realms,
    setRealm(realmName: keyof Realms, value: number) {
      setRealms({
        ...realms,
        [realmName]: applyRange(1, 5, value)
      });
    },


    health,
    state,
    setHealth(healthName: keyof Health, value: number) {
      setHealth({
        ...health,
        [healthName]: applyRange(0, 3, value)
      });
    },
    healthChimerical,
    setHealthChimerical(healthName: keyof Health, value: number) {
      setHealthChimerical({
        ...healthChimerical,
        [healthName]: applyRange(0, 3, value)
      });
    },

    setState<T extends keyof State>(stateName: T, value: State[T]) {
      if (typeof value === 'number') {
        setState(prevState => ({
          ...prevState,
          [stateName]: applyRange(0, stateName === 'bloodpool' ? 20 : 10, value)
        }));
      } else {
        setState(prevState => ({
          ...prevState,
          [stateName]: value
        }));
      }
    },

    notes,
    setNotes: function (notes: Notes): void {
      setNotes(notes);
    },

    merits,
    addMerit() {
      setMerits([...merits, '']);
    },
    removeMerit(index: number) {
      setMerits(merits.filter((el, index2) => index2 !== index));
    },
    setMerit(index: number, name: string) {
      setMerits((prevMerits) => prevMerits.map((el, index2) => {
        if (index2 !== index)
          return el;
        return name;
      }));
    },
    flaws,
    addFlaw() {
      setFlaws([...flaws, '']);
    },
    removeFlaw(index: number) {
      setFlaws(flaws.filter((el, index2) => index2 !== index));
    },
    setFlaw(index: number, name: string) {
      setFlaws((prevFlaws) => prevFlaws.map((el, index2) => {
        if (index2 !== index)
          return el;
        return name;
      }));
    },

    disciplines,
    addDiscipline() {
      setDisciplines([...disciplines, { name: '', value: 0 }]);
    },
    removeDiscipline(index: number) {
      setDisciplines((prevDisciplines) => prevDisciplines.filter((el, index2) => index2 !== index));
    },
    setDisciplineName(index: number, name: string) {
      setDisciplines((prevDisciplines) => prevDisciplines.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      }));
    },
    setDisciplineValue(index: number, value: number) {
      setDisciplines(disciplines.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          value
        };
      }));
    },

    arts,
    addArt() {
      setArts([...arts, { name: '', value: 0 }]);
    },
    removeArt(index: number) {
      setArts((prevArts) => prevArts.filter((el, index2) => index2 !== index));
    },
    setArtName(index: number, name: string) {
      setArts((prevArts) => prevArts.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      }));
    },
    setArtValue(index: number, value: number) {
      setArts(arts.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          value
        };
      }));
    },

    backgrounds,
    addBackground() {
      setBackgrounds([...backgrounds, { name: '', value: 0 }]);
    },
    removeBackground(index: number) {
      setBackgrounds((prevBackgrounds) => prevBackgrounds.filter((el, index2) => index2 !== index));
    },
    setBackgroundName(index: number, name: string) {
      setBackgrounds((prevBackgrounds) => prevBackgrounds.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          name
        };
      }));
    },
    setBackgroundValue(index: number, value: number) {
      setBackgrounds((prevBackgrounds) => prevBackgrounds.map((el, index2) => {
        if (index2 !== index)
          return el;
        return {
          ...el,
          value
        };
      }));
    },

    settings,
    setBackgroundColor(backgroundColor: string) {
      setSettings({ ...settings, backgroundColor });
    },
    setCharsheetBackColor(charsheetBackColor: string) {
      setSettings({ ...settings, charsheetBackColor });
    },
    setCharsheetBackImage(charsheetBackImage_v2: string) {
      setSettings({ ...settings, charsheetBackImage_v2 });
    },
    setCharsheetBackMode(charsheetBackMode: CharsheetBackMode) {
      setSettings({ ...settings, charsheetBackMode });
    },

    getCharSheet() {
      return {
        Version: CURRENT_VERSION,
        Settings: settings,
        preset,
        profile,
        attributes,
        abilities,
        abilitiesExtension,
        disciplines,
        backgrounds,
        virtues,
        merits,
        flaws,
        state,
        health,
        healthChimerical,
        notes,
        arts,
        realms,
      };
    },
    setCharSheet,
    errorDescription,
    setErrorDescription,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
