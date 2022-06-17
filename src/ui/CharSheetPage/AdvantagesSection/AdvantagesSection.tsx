import React from 'react';
import { Subheader } from '../Subheader';
import './AdvantagesSection.css';
import { useTranslation } from 'react-i18next';
import { RangeInput } from '../RangeInput';
import classnames from "classnames";
import { VirtuesSection } from './VirtuesSection';

interface AdvantagesSectionProps {
  className?: string;
}

export function AdvantagesSection(props: AdvantagesSectionProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classnames("AdvantagesSection tw-flex", className)}>
      <div className="tw-flex-1">
        <Subheader>{t('charsheet.disciplines')}</Subheader>  
      </div>
      <div className="tw-flex-1">
        <Subheader>{t('charsheet.backgrounds')}</Subheader>  
      </div>
      <div className="tw-flex-1">
        <Subheader>{t('charsheet.virtues')}</Subheader>  
        <VirtuesSection/>
      </div>
    </div>
  );
}



