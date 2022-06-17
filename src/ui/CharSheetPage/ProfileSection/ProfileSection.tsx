import React, { ChangeEvent } from 'react';
import './ProfileSection.css';

import { useTranslation } from 'react-i18next';
import { useProfile } from '../../../services/storageAdapter';
import { Profile } from '../../../domain';

interface ProfileSectionProps {
}

export function ProfileSection(props: ProfileSectionProps) {
  const { t } = useTranslation();

  const { profile, setProfileItem } = useProfile();

  const onProfileChange = (prop: keyof Profile ) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // console.log('onStateChange', prop, value);
    setProfileItem(prop, value);
  }

  return (
    <div className="ProfileSection">
      <div className="custom-panel tw-m-4">
        <div className="columns profile-container tw-flex">
          <div className='tw-flex-1'>
            <div>
              <label className='tw-w-24'>{t('charsheet.name')}</label>
              <input className='profile-input' value={profile.name} onChange={onProfileChange('name')}/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.player')}</label>
              <input className='profile-input' value={profile.player} onChange={onProfileChange('player')}/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.chronicle')}</label>
              <input className='profile-input' value={profile.chronicle} onChange={onProfileChange('chronicle')}/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.age')}</label>
              <input className='profile-input' value={profile.age} onChange={onProfileChange('age')}/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.sex')}</label>
              <input className='profile-input' value={profile.sex} onChange={onProfileChange('sex')}/>
            </div>
          </div>

          <div className='tw-flex-1'>
            <div>
              <label className='tw-w-24'>{t('charsheet.nature')}</label>
              <input className='profile-input' value={profile.nature} onChange={onProfileChange('nature')}/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.demeanor')}</label>
              <input className='profile-input' value={profile.demeanor} onChange={onProfileChange('demeanor')}/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.concept')}</label>
              <input className='profile-input' value={profile.concept} onChange={onProfileChange('concept')}/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.clan')}</label>
              <input className='profile-input' value={profile.clan} onChange={onProfileChange('clan')}/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.generation')}</label>
              <input className='profile-input' value={profile.generation} onChange={onProfileChange('generation')}/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.sire')}</label>
              <input className='profile-input' value={profile.sire} onChange={onProfileChange('sire')}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



