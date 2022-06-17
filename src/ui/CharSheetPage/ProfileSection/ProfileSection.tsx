import React from 'react';
import './ProfileSection.css';

import { useTranslation } from 'react-i18next';

interface ProfileSectionProps {
}

export function ProfileSection(props: ProfileSectionProps) {
  // const { t } = props;
  const { t } = useTranslation();

  return (
    <div className="ProfileSection">
      <div className="custom-panel tw-m-4">
        <div className="columns profile-container tw-flex">
          <div>
            <div>
              <span>{t('charsheet.name')}</span>
              <input/>
            </div>
            <div>
              <span>{t('charsheet.player')}</span>
              <input/>
            </div>
            <div>
              <span>{t('charsheet.chronicle')}</span>
              <input/>
            </div>
            <div>
              <span>{t('charsheet.age')}</span>
              <input/>
            </div>
            <div>
              <span>{t('charsheet.sex')}</span>
              <input/>
            </div>
          </div>
          <div>
            <div>
              <span>{t('charsheet.nature')}</span>
              <input/>
            </div>
            <div>
              <span>{t('charsheet.demeanor')}</span>
              <input/>
            </div>
            <div>
              <span>{t('charsheet.concept')}</span>
              <input/>
            </div>
            <div>
              <span>{t('charsheet.clan')}</span>
              <input/>
            </div>
            <div>
              <span>{t('charsheet.generation')}</span>
              <input/>
            </div>
            <div>
              <span>{t('charsheet.sire')}</span>
              <input/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



