import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileConfigItem } from '../../../../domain';
import { useProfile } from '../../../../services/storageAdapter';

import './ProfileSectionItem.css';

interface ProfileSectionItemProps {
  item: ProfileConfigItem;
}

export function ProfileSectionItem(props: ProfileSectionItemProps) {
  const { item } = props;
  const { t } = useTranslation();

  const itemName = typeof item === 'string' ? item : item.name;

  const { profile, setProfileItem } = useProfile();

  function onProfileChange (e: ChangeEvent<HTMLInputElement>) {
    const { value, dataset } = e.currentTarget;
    // const itemName = dataset.itemName as keyof Profile;
    // console.log('onStateChange', prop, value);
    setProfileItem(itemName, value);
  }

  return (
    <div className='ProfileSectionItem tw-flex'>
      <label
        className='tw-mb-0 tw-text-sm'
        htmlFor={`profileItem_${itemName}`}
        style={{
          'flexGrow': 0.45,
          'flexBasis': 0
        }}
      >
        {t(`charsheet.profile.${itemName}`)}
      </label>
      <input
        id={`profileItem_${itemName}`}
        style={{boxShadow: '0 1px 0 #333333'}}
        className='profile-input tw-flex-1 tw-mx-2
          tw-bg-transparent tw-border-none hover:tw-outline
          hover:tw-outline-1 hover:tw-outline-red-600'
        // data-item-name={item}
        value={profile[itemName]}
        list={typeof item !== 'string' ? item.dataListId : ''}
        onChange={onProfileChange}
      />
    </div>
  );
}
