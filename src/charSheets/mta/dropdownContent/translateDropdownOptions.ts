import { StateStore } from "../../root/services/store";

import { translateArchetype } from "./resources/archetypes";
import { mta_translateBackground } from "./resources/backgrounds";
import { translateConcept } from "./resources/concepts";
import { translateEssence } from "./resources/essences";
import { translateFaction, translateSect } from "./resources/sects";

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
    "concept",
    translateConcept(profile.concept, prevLanguage, lng),
  );
  setProfileItem(
    "essence",
    translateEssence(profile.essence, prevLanguage, lng),
  );
  setProfileItem(
    "affiliation",
    translateFaction(profile.affiliation, prevLanguage, lng),
  );
  setProfileItem("sect", translateSect(profile.sect, prevLanguage, lng));

  backgrounds.forEach((background, index) => {
    setBackgroundName(
      index,
      mta_translateBackground(background.name, prevLanguage, lng),
    );
  });
  // merits.forEach((merit, index) => {
  //   setMerit(index, c20_translateMeritsAndFlaws(merit, prevLanguage, lng));
  // });
  // flaws.forEach((flaw, index) => {
  //   setFlaw(index, c20_translateMeritsAndFlaws(flaw, prevLanguage, lng));
  // });
}
