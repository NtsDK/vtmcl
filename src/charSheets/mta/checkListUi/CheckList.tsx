import React from "react";

import {
  AbilitiesCheck,
  AbilitiesDotLimitCheck,
  AttributesCheck,
  BackgroundsCheck,
} from "../../generic/checkList";

import { SpheresCheck } from "./SpheresCheck";
import { WillpowerCheck } from "./WillpowerCheck";
import { AreteCheck } from "./AreteCheck";
import { ParadoxCheck } from "./ParadoxCheck";
import { SpheresDotLimitCheck } from "./SpheresDotLimitCheck";
import { QuintessenceCheck } from "./QuintessenceCheck";

interface CheckListProps {}

export function CheckList(props: CheckListProps): JSX.Element {
  return (
    <ul className="MtACheckList" tab-index={0}>
      <AttributesCheck className="tw-mx-5 tw-my-3" />
      <AbilitiesCheck className="tw-mx-5 tw-my-3" />
      <AbilitiesDotLimitCheck className="tw-mx-5 tw-my-3" />
      <BackgroundsCheck
        className="tw-mx-5 tw-my-3"
        expectedBackgroundDots={7}
      />
      <QuintessenceCheck className="tw-mx-5 tw-my-3" />
      <SpheresCheck className="tw-mx-5 tw-my-3" />
      <SpheresDotLimitCheck className="tw-mx-5 tw-my-3" />
      <AreteCheck className="tw-mx-5 tw-my-3" />
      <ParadoxCheck className="tw-mx-5 tw-my-3" />
      <WillpowerCheck className="tw-mx-5 tw-my-3" />
    </ul>
  );
}
