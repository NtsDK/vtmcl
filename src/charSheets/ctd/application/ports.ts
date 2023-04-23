import { Realms, Arts } from "../domain";

export interface CombinedCtDService extends RealmsService, ArtsService {}

export interface RealmsService {
  realms: Realms;
  setRealm(realmName: keyof Realms, value: number): void;
}
export interface ArtsService {
  arts: Arts;
  addArt(): void;
  setArtName(index: number, name: string): void;
  setArtValue(index: number, value: number): void;
  removeArt(index: number): void;
}
