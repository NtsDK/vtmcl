import { StateStore } from "../../root/services/store";

import { translateArt } from "./resources/arts";
import { c20_translateBackground } from "./resources/backgrounds";
import { translateCourt } from "./resources/courts";
import { translateHouse } from "./resources/houses";
import { translateKith } from "./resources/kiths";
import { translateLegacy } from "./resources/legacies";
import { c20_translateMeritsAndFlaws } from "./resources/meritsAndFlaws";
import { translateSeeming } from "./resources/seemings";

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
    merits,
    setMerit,
    flaws,
    setFlaw,
    arts,
    setArtName,
  } = store;

  // changeling
  setProfileItem("court", translateCourt(profile.court, prevLanguage, lng));
  setProfileItem(
    "seeming",
    translateSeeming(profile.seeming, prevLanguage, lng)
  );
  setProfileItem("house", translateHouse(profile.house, prevLanguage, lng));
  setProfileItem("kith", translateKith(profile.kith, prevLanguage, lng));
  setProfileItem(
    "primaryLegacy",
    translateLegacy(profile.primaryLegacy, prevLanguage, lng)
  );
  setProfileItem(
    "secondaryLegacy",
    translateLegacy(profile.secondaryLegacy, prevLanguage, lng)
  );

  backgrounds.forEach((background, index) => {
    setBackgroundName(
      index,
      c20_translateBackground(background.name, prevLanguage, lng)
    );
  });
  merits.forEach((merit, index) => {
    setMerit(index, c20_translateMeritsAndFlaws(merit, prevLanguage, lng));
  });
  flaws.forEach((flaw, index) => {
    setFlaw(index, c20_translateMeritsAndFlaws(flaw, prevLanguage, lng));
  });

  // changeling
  arts.forEach((art, index) => {
    setArtName(index, translateArt(art.name, prevLanguage, lng));
  });
}
