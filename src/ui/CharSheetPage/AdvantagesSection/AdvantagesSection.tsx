import React from 'react';
import { Subheader } from '../generic/Subheader';
import './AdvantagesSection.css';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import { VirtuesSection } from './VirtuesSection';
import { DisciplinesSection } from './DisciplinesSection';
import { BackgroundsSection } from './BackgroundsSection';

interface AdvantagesSectionProps {
  className?: string;
}

export function AdvantagesSection(props: AdvantagesSectionProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classnames("AdvantagesSection tw-flex", className)}>
      <div className="tw-flex-1">
        <Subheader>{t('charsheet.advantages.disciplines')}</Subheader>
        <DisciplinesSection/>
      </div>
      <div className="tw-flex-1">
        <Subheader>{t('charsheet.advantages.backgrounds')}</Subheader>  
        <BackgroundsSection/>
      </div>
      <div className="tw-flex-1">
        <Subheader>{t('charsheet.advantages.virtues')}</Subheader>  
        <VirtuesSection/>
      </div>
    </div>
  );
}



