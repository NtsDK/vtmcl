import { ProfileConfig } from "../../domain";

export const vampireProfileConfig: ProfileConfig = [
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
    "concept",
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
