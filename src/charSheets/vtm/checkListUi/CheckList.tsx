import React from "react";

import {
  AbilitiesCheck,
  AbilitiesDotLimitCheck,
  AttributesCheck,
  BackgroundsCheck,
  VirtuesCheck,
} from "../../generic/checkList";

import { BloodpoolCheck } from "./BloodpoolCheck";
import { DisciplinesCheck } from "./DisciplinesCheck";
import { HumanityCheck } from "./HumanityCheck";
import { WillpowerCheck } from "./WillpowerCheck";
import { EXPECTED_DISCIPLINE_DOTS } from "../checkListLogic";

interface CheckListProps {}

export function CheckList(props: CheckListProps): JSX.Element {
  return (
    <ul className="VampireCheckList">
      <AttributesCheck className="tw-mx-5 tw-my-3" />
      <AbilitiesCheck className="tw-mx-5 tw-my-3" />
      <AbilitiesDotLimitCheck className="tw-mx-5 tw-my-3" />
      <DisciplinesCheck
        className="tw-mx-5 tw-my-3"
        expectedDisciplineDots={EXPECTED_DISCIPLINE_DOTS}
      />
      <BackgroundsCheck className="tw-mx-5 tw-my-3" />
      <VirtuesCheck className="tw-mx-5 tw-my-3" />
      <HumanityCheck className="tw-mx-5 tw-my-3" />
      <WillpowerCheck className="tw-mx-5 tw-my-3" />
      <BloodpoolCheck className="tw-mx-5 tw-my-3" />
    </ul>
  );
}
