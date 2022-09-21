import React from 'react';
import { ArtsCheck } from '../changelingBlocks/ArtsCheck';
import { BanalityCheck } from '../changelingBlocks/BanalityCheck';
import { GlamourCheck } from '../changelingBlocks/GlamourCheck';
import { RealmsCheck } from '../changelingBlocks/RealmsCheck';
import { WillpowerCheck } from '../changelingBlocks/WillpowerCheck';
import { AbilitiesCheck } from '../commonBlocks/AbilitiesCheck';
import { AttributesCheck } from '../commonBlocks/AttributesCheck';
import { BackgroundsCheck } from '../commonBlocks/BackgroundsCheck';

interface ChangelingCheckListProps {
}

export function ChangelingCheckList(props: ChangelingCheckListProps) {
  return (
    <ul className="ChangelingCheckList">
      <AttributesCheck
        className="tw-mx-5 tw-my-3"
      />
      <AbilitiesCheck
        className="tw-mx-5 tw-my-3"
        />
      <BackgroundsCheck
        className="tw-mx-5 tw-my-3"
        />
      <ArtsCheck
        className="tw-mx-5 tw-my-3"
        />
      <RealmsCheck
        className="tw-mx-5 tw-my-3"
      />
      <WillpowerCheck
        className="tw-mx-5 tw-my-3"
      />
      <GlamourCheck
        className="tw-mx-5 tw-my-3"
      />
      <BanalityCheck
        className="tw-mx-5 tw-my-3"
      />
    </ul>
  );
}
