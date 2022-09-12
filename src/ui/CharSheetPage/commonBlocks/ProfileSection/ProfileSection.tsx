import React from 'react';
import classnames from "classnames";
import * as R from 'ramda';

import './ProfileSection.css';
import { ProfileSectionItem } from './ProfileSectionItem';
import { usePresetSettings } from '../../../../i18nResources';

interface ProfileSectionProps {
  className?: string;
}

export function ProfileSection(props: ProfileSectionProps) {
  const { className } = props;

  const { profileConfig } = usePresetSettings();

  const itemCount = R.sum(profileConfig.map(el => el.length));

  return (
    <div
      className={classnames("ProfileSection tw-mb-4 tw-flex ", className)}
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${Math.ceil(itemCount/2)}, 1fr)`,
        gridTemplateColumns: `repeat(2, 1fr)`,
        // gridTemplateRows: `repeat(${Math.ceil(itemCount/3)}, 1fr)`,
        // gridTemplateColumns: `repeat(3, 1fr)`,
        gridAutoFlow: "column",
        columnGap: '1rem'
      }}
    >
      {
        profileConfig.map((subArr, index) =>
          subArr.map(item =>
            <ProfileSectionItem
              item={item}
              key={typeof item === 'string' ? item : item.name}
            />
          )
        )
      }
    </div>
  );
}
