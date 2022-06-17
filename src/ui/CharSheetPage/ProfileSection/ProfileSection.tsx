import React from 'react';
import './ProfileSection.css';

import { useTranslation } from 'react-i18next';

interface ProfileSectionProps {
}

export function ProfileSection(props: ProfileSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="ProfileSection">
      <div className="custom-panel tw-m-4">
        <div className="columns profile-container tw-flex">
          <div className='tw-flex-1'>
            <div>
              <label className='tw-w-24'>{t('charsheet.name')}</label>
              <input/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.player')}</label>
              <input/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.chronicle')}</label>
              <input/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.age')}</label>
              <input/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.sex')}</label>
              <input/>
            </div>
          </div>

          <div className='tw-flex-1'>
            <div>
              <label className='tw-w-24'>{t('charsheet.nature')}</label>
              <input/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.demeanor')}</label>
              <input/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.concept')}</label>
              <input/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.clan')}</label>
              <input/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.generation')}</label>
              <input/>
            </div>
            <div>
              <label className='tw-w-24'>{t('charsheet.sire')}</label>
              <input/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



