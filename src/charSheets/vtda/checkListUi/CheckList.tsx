import React from "react";

import {
  AbilitiesCheck,
  AbilitiesDotLimitCheck,
  AttributesCheck,
  BackgroundsCheck,
  VirtuesCheck,
} from "../../generic/checkList";
import { DisciplinesCheck } from "../../vtm/checkListUi/DisciplinesCheck";
import { EXPECTED_DISCIPLINE_DOTS } from "../checkListLogic";
import { WillpowerCheck } from "../../vtm/checkListUi/WillpowerCheck";
import { BloodpoolCheck } from "../../vtm/checkListUi/BloodpoolCheck";
import { RoadCheck } from "./RoadCheck";

interface CheckListProps {}

export function CheckList(props: CheckListProps): JSX.Element {
  return (
    <ul className="VampireCheckList" tab-index={0}>
      <AttributesCheck className="tw-mx-5 tw-my-3" />
      <AbilitiesCheck className="tw-mx-5 tw-my-3" />
      <AbilitiesDotLimitCheck className="tw-mx-5 tw-my-3" />
      <DisciplinesCheck
        className="tw-mx-5 tw-my-3"
        expectedDisciplineDots={EXPECTED_DISCIPLINE_DOTS}
      />
      <BackgroundsCheck className="tw-mx-5 tw-my-3" />
      <VirtuesCheck className="tw-mx-5 tw-my-3" />
      <RoadCheck className="tw-mx-5 tw-my-3" />
      <WillpowerCheck className="tw-mx-5 tw-my-3" />
      <BloodpoolCheck className="tw-mx-5 tw-my-3" />
    </ul>
  );
}
