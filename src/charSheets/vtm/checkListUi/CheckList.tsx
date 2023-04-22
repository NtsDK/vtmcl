import React from "react";

import {
  AbilitiesCheck,
  AbilitiesDotLimitCheck,
  AttributesCheck,
  BackgroundsCheck,
} from "../../generic/checkList";

import { BloodpoolCheck } from "./BloodpoolCheck";
import { DisciplinesCheck } from "./DisciplinesCheck";
import { HumanityCheck } from "./HumanityCheck";
import { VirtuesCheck } from "./VirtuesCheck";
import { WillpowerCheck } from "./WillpowerCheck";

interface CheckListProps {}

export function CheckList(props: CheckListProps): JSX.Element {
  return (
    <ul className="VampireCheckList">
      <AttributesCheck className="tw-mx-5 tw-my-3" />
      <AbilitiesCheck className="tw-mx-5 tw-my-3" />
      <AbilitiesDotLimitCheck className="tw-mx-5 tw-my-3" />
      <DisciplinesCheck className="tw-mx-5 tw-my-3" />
      <BackgroundsCheck className="tw-mx-5 tw-my-3" />
      <VirtuesCheck className="tw-mx-5 tw-my-3" />
      <HumanityCheck className="tw-mx-5 tw-my-3" />
      <WillpowerCheck className="tw-mx-5 tw-my-3" />
      <BloodpoolCheck className="tw-mx-5 tw-my-3" />
    </ul>
  );
}
