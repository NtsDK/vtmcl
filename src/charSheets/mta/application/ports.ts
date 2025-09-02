import { Spheres } from "../domain";

export interface CombinedMtAService extends SpheresService {}

export interface SpheresService {
  spheres: Spheres;
  setSphere(sphereName: keyof Spheres, value: number): void;
}
