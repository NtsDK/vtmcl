import React from "react";
import { AbilitiesCheck } from "../commonBlocks/AbilitiesCheck";
import { AbilitiesDotLimitCheck } from "../commonBlocks/AbilitiesDotLimitCheck";
import { AttributesCheck } from "../commonBlocks/AttributesCheck";
import { BackgroundsCheck } from "../commonBlocks/BackgroundsCheck";
import { BloodpoolCheck } from "../vampireBlocks/BloodpoolCheck";
import { DisciplinesCheck } from "../vampireBlocks/DisciplinesCheck";
import { HumanityCheck } from "../vampireBlocks/HumanityCheck";
import { VirtuesCheck } from "../vampireBlocks/VirtuesCheck";
import { WillpowerCheck } from "../vampireBlocks/WillpowerCheck";

import "./VampireCheckList.css";

interface VampireCheckListProps {}

export function VampireCheckList(props: VampireCheckListProps) {
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
