import React from 'react';
import { Subheader } from '../Subheader';
import './AdvantagesSection.css';
import { useTranslation } from 'react-i18next';
import { RangeInput } from '../RangeInput';
import classnames from "classnames";

interface AdvantagesSectionProps {
  className?: string;
}

export function AdvantagesSection(props: AdvantagesSectionProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classnames("AdvantagesSection tw-flex", className)}>
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
            {/* <RangeInput /> */}
          </div>
          <div className="stat-container">
            <span>{t('charsheet.self_control')}</span>
            {/* <RangeInput /> */}
          </div>
          <div className="stat-container">
            <span>{t('charsheet.courage')}</span>
            {/* <RangeInput /> */}
          </div>
        </div>
      </div>
    </div>
  );
}



