import { ProfileConfig } from "../../../charSheets/root/domain";

export const profileConfig: ProfileConfig = [
  ["name", "player", "chronicle", "age", "sex"],
  [
    {
      name: "nature",
      optionsName: "archetypeOptions",
    },
    {
      name: "demeanor",
      optionsName: "archetypeOptions",
    },
    {
      name: "concept",
      optionsName: "conceptOptions",
    },
    {
      name: "clan",
      optionsName: "clanOptions",
    },
    {
      name: "generation",
      optionsName: "generationOptions",
    },
    "sire",
  ],
];
