import React from "react";

import {
  AbilitiesCheck,
  AbilitiesDotLimitCheck,
  AttributesCheck,
  BackgroundsCheck,
  VirtuesCheck,
} from "../../generic/checkList";
import { HumanityCheck } from "../../vtm/checkListUi/HumanityCheck";
import { WillpowerCheck } from "../../vtm/checkListUi/WillpowerCheck";
import {
  EXPECTED_ABILITY_DOTS,
  EXPECTED_ATTRIBUTE_DOTS,
} from "../checkListLogic";

interface CheckListProps {}

export function CheckList(props: CheckListProps): JSX.Element {
  return (
    <ul className="ChangelingCheckList">
      <AttributesCheck
        className="tw-mx-5 tw-my-3"
        expectedAttributeDots={EXPECTED_ATTRIBUTE_DOTS}
      />
      <AbilitiesCheck
        className="tw-mx-5 tw-my-3"
        expectedAbilitiesDots={EXPECTED_ABILITY_DOTS}
      />
      <AbilitiesDotLimitCheck className="tw-mx-5 tw-my-3" />
      <BackgroundsCheck className="tw-mx-5 tw-my-3" />
      <VirtuesCheck className="tw-mx-5 tw-my-3" />
      <HumanityCheck className="tw-mx-5 tw-my-3" />
      <WillpowerCheck className="tw-mx-5 tw-my-3" />
    </ul>
  );
}
