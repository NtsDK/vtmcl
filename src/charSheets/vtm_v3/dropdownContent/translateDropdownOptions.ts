import { StateStore } from "../../root/services/store";

import { translateBackground } from "./resources/backgrounds";
import { v20_translateMeritsAndFlaws } from "./resources/meritsAndFlaws";
import { translateArchetype } from "./resources/archetypes";
import { translateGeneration } from "./resources/generations";
import { translateClan } from "./resources/clans";
import { translateDiscipline } from "./resources/disciplines";
import { translateDisciplinePath } from "./resources/disciplinePaths";
import { translateRitual } from "./resources/rituals";
import { translatePath } from "./resources/paths";
import { translateConcept } from "./resources/concepts";

export function translateDropdownOptions(
  store: StateStore,
  prevLanguage: string,
  lng: string,
): void {
  const {
    profile,
    setProfileItem,
    backgrounds,
    setBackgroundName,
    disciplines,
    setDisciplineName,
    disciplinePaths,
    setDisciplinePathName,
    rituals,
    setRitualName,
    state,
    setState,
    merits,
    setMerit,
    flaws,
    setFlaw,
  } = store;

  setProfileItem(
    "nature",
    translateArchetype(profile.nature, prevLanguage, lng),
  );
  setProfileItem(
    "demeanor",
    translateArchetype(profile.demeanor, prevLanguage, lng),
  );
  setProfileItem(
    "generation",
    translateGeneration(profile.generation, prevLanguage, lng),
  );
  setProfileItem("clan", translateClan(profile.clan, prevLanguage, lng));
  setProfileItem(
    "concept",
    translateConcept(profile.concept, prevLanguage, lng),
  );

  // vampire
  backgrounds.forEach((background, index) => {
    setBackgroundName(
      index,
      translateBackground(background.name, prevLanguage, lng),
    );
  });
  disciplines.forEach((discipline, index) => {
    setDisciplineName(
      index,
      translateDiscipline(discipline.name, prevLanguage, lng),
    );
  });
  disciplinePaths.forEach((disciplinePath, index) => {
    setDisciplinePathName(
      index,
      translateDisciplinePath(disciplinePath.name, prevLanguage, lng),
    );
  });
  rituals.forEach((ritual, index) => {
    setRitualName(index, translateRitual(ritual.name, prevLanguage, lng));
  });
  setState("pathName", translatePath(state.pathName, prevLanguage, lng));
  merits.forEach((merit, index) => {
    setMerit(index, v20_translateMeritsAndFlaws(merit, prevLanguage, lng));
  });
  flaws.forEach((flaw, index) => {
    setFlaw(index, v20_translateMeritsAndFlaws(flaw, prevLanguage, lng));
  });
}
