import { ProfileConfig } from "../../../charSheets/root/domain";

export const profileConfig: ProfileConfig = [
  ["name", "player", "chronicle", "age", "sex"],
  [
    "nature",
    "demeanor",
    "concept",
    "clan",
    {
      name: "generation",
      optionsName: "generationOptions",
    },
    "sire",
  ],
];
