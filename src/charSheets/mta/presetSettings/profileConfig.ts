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
      name: "essence",
      optionsName: "essenceOptions",
    },
    {
      name: "affiliation",
      optionsName: "factionOptions",
    },
    {
      name: "sect",
      optionsName: "sectOptions",
    },
  ],
];
