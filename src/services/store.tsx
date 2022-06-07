import React, { useState, PropsWithChildren } from "react";
import { useContext } from "react";
// import { 
//   GameStorageService, 
//   ServerDatabaseStorageService, 
//   ServerStorageService,
//   ErrorDescriptionService,
// } from "../application/ports";
// import { ErrorDescription } from "../domain/errorDescription";
// import { Game } from "../domain/game";
// import { Server, ServerStatus } from "../domain/server";
// import { ServerDatabase } from "../domain/serverDatabase";
import { getCharSheetFromLS, saveCharSheetInLS } from "../infrastructure/lsDbService";
// import { initialGames, initialServers } from "./initialGames";

// interface StateStore extends 
//   GameStorageService, 
//   ServerStorageService,
//   ServerDatabaseStorageService,
//   ErrorDescriptionService
// {
// }
interface StateStore {
}

// const initialGames: Game[] = [];
// const initialServers: Server[] = [];

// @ts-ignore
const StoreContext = React.createContext<StateStore>({});
export const useStore = () => useContext(StoreContext);

interface ProviderProps {
}

export const Provider: React.FC<PropsWithChildren<ProviderProps>> = ({ children }) => {

  const [initialized, setInitialized] = useState(false);
  // const [servers, innerSetServers] = useState<Server[]>(initialServers);
  // // const [games, setGames] = useState<Game[]>([]);
  // const [games, innerSetGames] = useState<Game[]>(initialGames);
  // const [
  //   errorDescription, 
  //   setErrorDescription
  // ] = useState<ErrorDescription | null>(null);

  if (!initialized) {
    setInitialized(true);
    const cs = getCharSheetFromLS();
    if (cs !== null) {
    //   innerSetServers(db.serverData);
    //   innerSetGames(db.gameData);
    }
  }

  const value: StateStore = {
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
    // getServerDatabase() {
    //   return {
    //     serverData: servers,
    //     gameData: games
    //   }
    // },
    // setServerDatabase(serverDatabase: ServerDatabase) {
    //   innerSetServers(serverDatabase.serverData.map(el => ({...el, status: ServerStatus.unknown})));
    //   innerSetGames(serverDatabase.gameData);
    // },
    // errorDescription, 
    // setErrorDescription
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
