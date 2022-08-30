import React from 'react';
import classnames from "classnames";
import * as R from 'ramda';

import { ProfileConfig } from '../../../domain';

import './ProfileSection.css';
import { ProfileSectionItem } from './ProfileSectionItem';

interface ProfileSectionProps {
  className?: string;
  profileConfig: ProfileConfig;
}

export function ProfileSection(props: ProfileSectionProps) {
  const { className, profileConfig } = props;

  const itemCount = R.sum(profileConfig.map(el => el.length));

  return (
    <div
      className={classnames("ProfileSection tw-mb-4 tw-flex ", className)}
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${Math.ceil(itemCount/3)}, 1fr)`,
        gridTemplateColumns: `repeat(3, 1fr)`,
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
