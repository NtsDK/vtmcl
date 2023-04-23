import { Settings } from "../domain";

import { defaultBackgroundUrl } from "./defaultBackground";

export { defaultBackgroundUrl } from "./defaultBackground";

// no character data
export const initialSettings: Settings = {
  backgroundColor: "#ababab",
  charsheetBackColor: "#ffffff",
  // charsheetBackImage: "../images/back.png",
  charsheetBackImage_v2: defaultBackgroundUrl,
  charsheetBackMode: "charsheet-image",
};
