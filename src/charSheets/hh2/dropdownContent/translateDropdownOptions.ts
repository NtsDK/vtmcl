import { StateStore } from "../../root/services/store";
import { translateArchetype } from "../../vtm/dropdownContent/resources/archetypes";

import { translateConcept } from "./resources/concepts";
import { translateBackground } from "./resources/backgrounds";
import { translateNumina } from "./resources/numinas";
import { translateMeritsAndFlaws } from "./resources/meritsAndFlaws";

export function translateDropdownOptions(
  store: StateStore,
  prevLanguage: string,
  lng: string
): void {
  const {
    profile,
    setProfileItem,
    backgrounds,
    setBackgroundName,
    numinaAndOtherTraits,
    setNuminaOrTraitName,
    merits,
    setMerit,
    flaws,
    setFlaw,
  } = store;

  setProfileItem(
    "nature",
    translateArchetype(profile.nature, prevLanguage, lng)
  );
  setProfileItem(
    "demeanor",
    translateArchetype(profile.demeanor, prevLanguage, lng)
  );
  setProfileItem(
    "concept",
    translateConcept(profile.concept, prevLanguage, lng)
  );

  backgrounds.forEach((background, index) => {
    setBackgroundName(
      index,
      translateBackground(background.name, prevLanguage, lng)
    );
  });
  numinaAndOtherTraits.forEach((numinaOrTrait, index) => {
    setNuminaOrTraitName(
      index,
      translateNumina(numinaOrTrait.name, prevLanguage, lng)
    );
  });
  merits.forEach((merit, index) => {
    setMerit(index, translateMeritsAndFlaws(merit, prevLanguage, lng));
  });
  flaws.forEach((flaw, index) => {
    setFlaw(index, translateMeritsAndFlaws(flaw, prevLanguage, lng));
  });
}
