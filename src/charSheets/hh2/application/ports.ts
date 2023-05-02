import { NuminaAndOtherTraits } from "../domain";

export interface CombinedHH2Service extends NuminaAndTraitsService {}

export interface NuminaAndTraitsService {
  numinaAndOtherTraits: NuminaAndOtherTraits;
  addNuminaOrTrait(): void;
  setNuminaOrTraitName(index: number, name: string): void;
  setNuminaOrTraitValue(index: number, value: number): void;
  removeNuminaOrTrait(index: number): void;
}
