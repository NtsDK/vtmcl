import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectButton } from '../../../primitives/SelectButton';
import { Profile } from '../../../../../domain';

import './ProfileSectionItem.css';

interface ProfileSectionItemProps {
  itemName: keyof Profile;
  value: string;
  setProfileItem(itemName: keyof Profile, value: string): void;
  options?: string[];
}

export function ProfileSectionItem(props: ProfileSectionItemProps) {
  const {
    itemName,
    options,
    value,
    setProfileItem
  } = props;
  const { t } = useTranslation();

  function onProfileChange (e: ChangeEvent<HTMLInputElement>) {
    const { value, dataset } = e.currentTarget;
    // const itemName = dataset.itemName as keyof Profile;
    // console.log('onStateChange', prop, value);
    setProfileItem(itemName, value);
  }

  return (
    <div className='ProfileSectionItem tw-flex tw-mb-2 print:tw-mb-0'>
      <label
        className='tw-mb-0 tw-text-sm tw-flex-0'
        htmlFor={`profileItem_${itemName}`}
        style={{
          // 'flexGrow': 0.45,
          // // 'flexGrow': 0,
          // 'flexShrink': 0,
          'flexBasis': '7rem'
        }}
      >
        {t(`charsheet.profile.${itemName}`)}
      </label>
      <input
        size={1}
        id={`profileItem_${itemName}`}
        style={{boxShadow: '0 1px 0 #333333'}}
        className='tw-flex-1 tw-mx-2
          tw-bg-transparent tw-border-none hover:tw-outline
          hover:tw-outline-1 hover:tw-outline-red-600'
        value={value}
        onChange={onProfileChange}
      />
      {
        options &&
        <SelectButton
          className="print:tw-hidden"
          options={options}
          onChange={(value: string) => setProfileItem(itemName, value)}
          selectOptionMsg={t('charsheet.profile.select-label', {
            title: t(`charsheet.profile.${itemName}`)
          })}
        />
      }
    </div>
  );
}
