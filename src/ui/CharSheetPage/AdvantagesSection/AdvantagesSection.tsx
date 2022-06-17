import React from 'react';
import { Subheader } from '../Subheader';
import './AdvantagesSection.css';
import { useTranslation } from 'react-i18next';
import { RangeInput } from '../RangeInput';

interface AdvantagesSectionProps {
}

export function AdvantagesSection(props: AdvantagesSectionProps) {
  // const { t } = props;
  const { t } = useTranslation();

  return (
    <div className="AdvantagesSection tw-flex">
      <div>
        <Subheader>{t('charsheet.disciplines')}</Subheader>  
      </div>
      <div>
        <Subheader>{t('charsheet.backgrounds')}</Subheader>  
      </div>
      <div>
        <Subheader>{t('charsheet.virtues')}</Subheader>  

        <div>
          <div className="stat-container">
            <span>{t('charsheet.conscience')}</span>
            <RangeInput />
          </div>
          <div className="stat-container">
            <span>{t('charsheet.self_control')}</span>
            <RangeInput />
          </div>
          <div className="stat-container">
            <span>{t('charsheet.courage')}</span>
            <RangeInput />
          </div>
        </div>
      </div>
    </div>
  );
}



