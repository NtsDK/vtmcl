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
    "concept",
    "residence",
  ],
];
