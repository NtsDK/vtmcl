import React from 'react';
import './CharSheetPage.css';

import { useTranslation } from 'react-i18next';

interface CharSheetPageProps {
}

export function CharSheetPage(props: CharSheetPageProps) {
  const { t } = useTranslation();

  return (
    <div className="CharSheetPage">
      CharSheetPage content

      {/* profile */}
      <div className="custom-panel">
        <div className="columns profile-container">
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



