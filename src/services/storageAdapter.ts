import {
  AbilitiesService,
  AttributesService,
  CharSheetStorageService,
  // GameStorageService, 
  // ServerDatabaseStorageService, 
  // ServerStorageService,
  ErrorDescriptionService,
  ProfileService,
  VirtuesService,
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
export function useProfile(): ProfileService {
  return useStore();
}
export function useAttributes(): AttributesService {
  return useStore();
}
export function useAbilities(): AbilitiesService {
  return useStore();
}
export function useVirtues(): VirtuesService {
  return useStore();
}
