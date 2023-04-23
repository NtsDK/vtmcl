import { Disciplines, DisciplinePaths, Rituals, Virtues } from "../domain";

export interface CombinedVtMService
  extends DisciplinesService,
    DisciplinePathsService,
    RitualsService,
    VirtuesService {}

export interface DisciplinesService {
  disciplines: Disciplines;
  addDiscipline(): void;
  setDisciplineName(index: number, name: string): void;
  setDisciplineValue(index: number, value: number): void;
  removeDiscipline(index: number): void;
}

export interface DisciplinePathsService {
  disciplinePaths: DisciplinePaths;
  addDisciplinePath(): void;
  setDisciplinePathName(index: number, name: string): void;
  setDisciplinePathValue(index: number, value: number): void;
  removeDisciplinePath(index: number): void;
}

export interface RitualsService {
  rituals: Rituals;
  addRitual(): void;
  setRitualName(index: number, name: string): void;
  setRitualLevel(index: number, level: string): void;
  removeRitual(index: number): void;
}

export interface VirtuesService {
  virtues: Virtues;
  setVirtue(virtueName: keyof Virtues, value: number): void;
}
