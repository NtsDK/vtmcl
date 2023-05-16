import React from "react";

import {
  AbilitiesCheck,
  AbilitiesDotLimitCheck,
  AttributesCheck,
  BackgroundsCheck,
} from "../../generic/checkList";

import { ArtsCheck } from "./ArtsCheck";
import { BanalityCheck } from "./BanalityCheck";
import { GlamourCheck } from "./GlamourCheck";
import { RealmsCheck } from "./RealmsCheck";
import { WillpowerCheck } from "./WillpowerCheck";

interface CheckListProps {}

export function CheckList(props: CheckListProps): JSX.Element {
  return (
    <ul className="ChangelingCheckList">
      <AttributesCheck className="tw-mx-5 tw-my-3" />
      <AbilitiesCheck className="tw-mx-5 tw-my-3" />
      <AbilitiesDotLimitCheck className="tw-mx-5 tw-my-3" />
      <BackgroundsCheck className="tw-mx-5 tw-my-3" />
      <ArtsCheck className="tw-mx-5 tw-my-3" />
      <RealmsCheck className="tw-mx-5 tw-my-3" />
      <WillpowerCheck className="tw-mx-5 tw-my-3" />
      <GlamourCheck className="tw-mx-5 tw-my-3" />
      <BanalityCheck className="tw-mx-5 tw-my-3" />
    </ul>
  );
}
