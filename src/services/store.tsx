import React, { useState, PropsWithChildren } from "react";
import { useContext } from "react";
import { 
//   GameStorageService, 
//   ServerDatabaseStorageService, 
//   ServerStorageService,
  ErrorDescriptionService,
  AbilitiesService,
  AttributesService,
  DisciplinesService,
  LogService,
  MeritsNFlawsService,
  MetaService,
  NotesService,
  ProfileService,
  SettingsService,
  StateNHealthService,
  BackgroundsService,
  VirtuesService,
  CharSheetStorageService,
} from "../application/ports";
import { 
  Abilities,
  Attributes,
  Backgrounds,
  CharSheet,
  Disciplines,
  ErrorDescription,
  Flaws,
  Health, 
  Log, 
  Merits, 
  Meta, 
  Notes, 
  Profile, 
  Settings, 
  State,
  Virtues,
} from "../domain";
// import { ErrorDescription } from "../domain/errorDescription";
// import { Game } from "../domain/game";
// import { Server, ServerStatus } from "../domain/server";
// import { ServerDatabase } from "../domain/serverDatabase";
import { getCharSheetFromLS, saveCharSheetInLS } from "../infrastructure/lsDbService";
import { 
  initialAbilities, 
  initialAttributes, 
  initialBackgrounds, 
  initialDisciplines, 
  initialFlaws, 
  initialHealth, 
  initialLog, 
  initialMerits, 
  initialMeta, 
  initialNotes, 
  initialProfile, 
  initialSettings, 
  initialState, 
  initialVirtues 
} from "./initialValues";
// import { initialGames, initialServers } from "./initialGames";

import { CURRENT_VERSION } from "../constants";

interface StateStore extends 
  ProfileService,
  AttributesService,
  AbilitiesService,
  DisciplinesService,
  BackgroundsService,
  VirtuesService,
  MeritsNFlawsService,
  StateNHealthService,
  NotesService,
  LogService,
  MetaService,
  SettingsService,
  CharSheetStorageService,
  ErrorDescriptionService
{
}

// @ts-ignore
const StoreContext = React.createContext<StateStore>({});
export const useStore = () => useContext(StoreContext);

interface ProviderProps {
}

export const Provider: React.FC<PropsWithChildren<ProviderProps>> = ({ children }) => {

  const [initialized, setInitialized] = useState(false);

  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [attributes, setAttributes] = useState<Attributes>(initialAttributes);
  const [abilities, setAbilities] = useState<Abilities>(initialAbilities);
  const [disciplines, setDisciplines] = useState<Disciplines>(initialDisciplines);
  const [backgrounds, setBackgrounds] = useState<Backgrounds>(initialBackgrounds);
  const [virtues, setVirtues] = useState<Virtues>(initialVirtues);
  const [merits, setMerits] = useState<Merits>(initialMerits);
  const [flaws, setFlaws] = useState<Flaws>(initialFlaws);
  const [state, setState] = useState<State>(initialState);
  const [health, setHealth] = useState<Health>(initialHealth);
  const [notes, setNotes] = useState<Notes>(initialNotes);
  
  const [settings, setSettings] = useState<Settings>(initialSettings);
  const [meta, setMeta] = useState<Meta>(initialMeta);
  const [log, setLog] = useState<Log>(initialLog);

  // const [servers, innerSetServers] = useState<Server[]>(initialServers);
  // // const [games, setGames] = useState<Game[]>([]);
  // const [games, innerSetGames] = useState<Game[]>(initialGames);
  const [
    errorDescription, 
    setErrorDescription
  ] = useState<ErrorDescription | null>(null);

  function setCharSheet(cs: CharSheet) {
    setProfile(cs.profile);
    setAttributes(cs.attributes);
    setAbilities(cs.abilities);
    setDisciplines(cs.disciplines);
    setBackgrounds(cs.backgrounds);
    setVirtues(cs.virtues);
    setMerits(cs.merits);
    setFlaws(cs.flaws);
    setState(cs.state);
    setHealth(cs.health);
    setNotes(cs.notes);

    setSettings(cs.Settings);
    setLog(cs.Log);
    setMeta(cs.Meta);
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
    profile,
    setProfileItem(itemName: keyof Profile, value: string) {
      setProfile({
        ...profile,
        [itemName]: value
      })
    },
    attributes,
    setAttribute(attributeName: keyof Attributes, value: number) {
      setAttributes({
        ...attributes,
        [attributeName]: applyRange(1, 5, value)
      })
    },
    abilities,
    setAbility(abilityName: keyof Abilities, value: number) {
      setAbilities({
        ...abilities,
        [abilityName]: applyRange(0, 5, value)
      })
    },
    virtues,
    setVirtue(virtueName: keyof Virtues, value: number) {
      setVirtues({
        ...virtues,
        [virtueName]: applyRange(1, 5, value)
      })
    },
    
    
    health,
    state,
    setHealth(healthName: keyof Health, value: number) {
      setHealth({
        ...health,
        [healthName]: applyRange(0, 2, value)
      })
    },
    setState(stateName: keyof State, value: number) {
      setState({
        ...state,
        [stateName]: applyRange(0, stateName === 'bloodpool' ? 20 : 10, value)
      })
    },

    settings,
    
    notes,
    meta,
    merits,
    flaws,
    log,
    disciplines,
    backgrounds,

    // servers,
    // // setServers: innerSetServers,
    // setServers: function(servers: Server[]): void {
    //   innerSetServers(servers);
    //   saveDbInLS({
    //     serverData: servers,
    //     gameData: games
    //   });
    // },
    // findServer: (id: UniqueId): Server | undefined => {
    //   return servers.find(el => el.id === id);
    // },
    // games,
    // // setGames: innerSetGames,
    // setGames: function(games: Game[]): void {
    //   innerSetGames(games);
    //   saveDbInLS({
    //     serverData: servers,
    //     gameData: games
    //   });
    // },
    // findGameByServerId(id: UniqueId): Game | undefined {
    //   return games.find(el => el.serverId === id);
    // },
    getCharSheet() {
      return {
        Meta: meta,
        Version: CURRENT_VERSION,
        Log: log,
        Settings: settings, 
        profile, 
        attributes, 
        abilities,
        disciplines, 
        backgrounds, 
        virtues, 
        merits,
        flaws, 
        state, 
        health, 
        notes
      }
    },
    setCharSheet,
    // setServerDatabase(serverDatabase: ServerDatabase) {
    //   innerSetServers(serverDatabase.serverData.map(el => ({...el, status: ServerStatus.unknown})));
    //   innerSetGames(serverDatabase.gameData);
    // },
    errorDescription, 
    setErrorDescription
    // // user,
    // // cart,
    // // // cookies,
    // // orders,
    // // updateUser: setUser,
    // // updateCart: setCart,
    // // updateOrders: setOrders,
    // // emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
