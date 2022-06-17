import React from 'react';
import { Subheader } from '../Subheader';
import './MiscSection.css';
import { useTranslation } from 'react-i18next';

interface MiscSectionProps {
}

export function MiscSection(props: MiscSectionProps) {
  // const { t } = props;
  const { t } = useTranslation();

  return (
    <div className="MiscSection tw-flex">
      <div>
        <Subheader>{t('charsheet.merits')}</Subheader>
        <Subheader>{t('charsheet.flaws')}</Subheader>
      </div>
      <div>
        <Subheader>{t('charsheet.humanity')}</Subheader>
        <Subheader>{t('charsheet.willpower')}</Subheader>
        <Subheader>{t('charsheet.bloodpool')}</Subheader>
      </div>
      <div>
        <Subheader>{t('charsheet.health')}</Subheader>
      </div>
    </div>
  );
}



