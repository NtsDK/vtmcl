import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileConfigItem } from '../../../../domain';
import { useProfile } from '../../../../services/storageAdapter';
import { useResource } from '../../../../i18nResources';
import { SelectButton } from '../../primitives/SelectButton';

import './ProfileSectionItem.css';

interface ProfileSectionItemProps {
  item: ProfileConfigItem;
}

export function ProfileSectionItem(props: ProfileSectionItemProps) {
  const { item } = props;
  const { t } = useTranslation();

  const itemName = typeof item === 'string' ? item : item.name;

  const { profile, setProfileItem } = useProfile();

  const resources = useResource();

  const optionsName = typeof item !== 'string' ? item.optionsName : undefined;
  const options = optionsName !== undefined
    // @ts-ignore
    ? resources[optionsName]
    : undefined;

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
          'flexBasis': '5rem'
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
        value={profile[itemName]}
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
