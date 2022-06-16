import {
  CharSheetStorageService,
  // GameStorageService, 
  // ServerDatabaseStorageService, 
  // ServerStorageService,
  ErrorDescriptionService,
} from "../application/ports";
import { useStore } from "./store";

// export function useGameStorage(): GameStorageService {
//   return useStore();
// }
// export function useServerStorage(): ServerStorageService {
//   return useStore();
// }
// export function useServerDatabaseStorage(): ServerDatabaseStorageService {
//   return useStore();
// }
export function useErrorDescription(): ErrorDescriptionService {
  return useStore();
}
export function useCharSheetStorage(): CharSheetStorageService {
  return useStore();
}
