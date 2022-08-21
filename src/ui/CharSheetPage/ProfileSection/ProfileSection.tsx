import React from 'react';
import classnames from "classnames";

import { ProfileConfig } from '../../../domain';

import './ProfileSection.css';
import { ProfileSectionItem } from './ProfileSectionItem';

interface ProfileSectionProps {
  className?: string;
  profileConfig: ProfileConfig;
}

export function ProfileSection(props: ProfileSectionProps) {
  const { className, profileConfig } = props;

  return (
    <div className={classnames("ProfileSection", className)}>
      <div className="custom-panel tw-m-4">
        <div className="columns profile-container tw-flex">
          {
            profileConfig.map((subArr, index) =>
              <div className='tw-flex-1' key={`${index}`}>
                {
                  subArr.map(item =>
                    <ProfileSectionItem
                      item={item}
                      key={typeof item === 'string' ? item : item.name}
                    />
                  )
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
