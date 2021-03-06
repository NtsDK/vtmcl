import React, { ChangeEvent } from 'react';
import './ProfileSection.css';
import classnames from "classnames";

import { useTranslation } from 'react-i18next';
import { useProfile } from '../../../services/storageAdapter';
import { Profile } from '../../../domain';

interface ProfileSectionProps {
  className?: string;
  profileConfig: (keyof Profile)[][];
}

export function ProfileSection(props: ProfileSectionProps) {
  const { t } = useTranslation();
  const { className, profileConfig } = props;

  const { profile, setProfileItem } = useProfile();

  function onProfileChange (e: ChangeEvent<HTMLInputElement>) {
    const { value, dataset } = e.currentTarget;
    const itemName = dataset.itemName as keyof Profile;
    // console.log('onStateChange', prop, value);
    setProfileItem(itemName, value);
  }

  return (
    <div className={classnames("ProfileSection", className)}>
      <div className="custom-panel tw-m-4">
        <div className="columns profile-container tw-flex">
          {
            profileConfig.map((subArr, index) => 
              <div className='tw-flex-1' key={`${index}`}>
                {
                  subArr.map(item => 
                    <div key={item} className='tw-flex'>
                      <label className='tw-w-24' htmlFor={`profileItem_${item}`}>
                        {t(`charsheet.${item}`)}
                      </label>
                      <input 
                        id={`profileItem_${item}`}
                        style={{boxShadow: '0 1px 0 #333333'}}
                        className='profile-input tw-flex-1 tw-mx-2 tw-bg-transparent tw-border-none '
                        data-item-name={item}
                        value={profile[item]} 
                        onChange={onProfileChange}
                      />
                    </div>
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



