import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileConfigItem } from '../../../../domain';
import { useProfile } from '../../../../services/storageAdapter';
import { useResource } from '../../../../useResource';

import './ProfileSectionItem.css';

interface ProfileSectionItemProps {
  item: ProfileConfigItem;
}

export function ProfileSectionItem(props: ProfileSectionItemProps) {
  const { item } = props;
  const { t } = useTranslation();

  const itemName = typeof item === 'string' ? item : item.name;

  const { profile, setProfileItem } = useProfile();

  const { archetypes, generations, clanDisplayGroups } = useResource();

  function onProfileChange (e: ChangeEvent<HTMLInputElement>) {
    const { value, dataset } = e.currentTarget;
    // const itemName = dataset.itemName as keyof Profile;
    // console.log('onStateChange', prop, value);
    setProfileItem(itemName, value);
  }

  return (
    <div className='ProfileSectionItem tw-flex'>
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
        id={`profileItem_${itemName}`}
        style={{boxShadow: '0 1px 0 #333333'}}
        className='tw-flex-1 tw-mx-2
          tw-bg-transparent tw-border-none hover:tw-outline
          hover:tw-outline-1 hover:tw-outline-red-600'
        // data-item-name={item}
        value={profile[itemName]}
        // list={typeof item !== 'string' ? item.dataListId : ''}
        onChange={onProfileChange}
      />
      {
        (itemName === 'nature' || itemName === 'demeanor') &&
        <SelectButton
          values={archetypes}
          onChange={(value: string) => setProfileItem(itemName, value)}
        />
      }
      {
        (itemName === 'generation') &&
        <SelectButton
          values={generations}
          onChange={(value: string) => setProfileItem(itemName, value)}
        />
      }
      {
        (itemName === 'clan') &&
        <SelectButton
          values={clanDisplayGroups}
          onChange={(value: string) => setProfileItem(itemName, value)}
        />
      }
    </div>
  );
}

type SelectButtonItem =
  | string
  | {
      groupName: string;
      arr: string[];
    }
;

interface SelectButtonProps {
  values: SelectButtonItem[];
  onChange: (value: string) => void;
}

function SelectButton(props: SelectButtonProps) {
  const { values, onChange } = props;

  return (
    <select
      className='profileItemSelect'
      value=''
      onChange={e => onChange(e.currentTarget.value)}
    >
      <option></option>
      {
        values.map(el => {
          if (typeof el === 'string') {
            return (
              <option>
                {el}
              </option>
            );
          } else {
            return (
              <optgroup label={el.groupName}>
                {
                  el.arr.map(el2 =>
                    <option>
                      {el2}
                    </option>
                  )
                }
              </optgroup>
            );
          }
        })
      }
    </select>
  );
}
