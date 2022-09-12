import React from 'react';
import { Subheader } from '../primitives/Subheader';
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
    <div
      className={classnames("AdvantagesSection tw-flex tw-gap-x-4", className)}
    >
      <div className="tw-flex-1">
        <Subheader className='tw-mb-2 print:tw-hidden'>
          {t('charsheet.advantages.disciplines')}
        </Subheader>
        <DisciplinesSection/>
      </div>
      <div className="tw-flex-1">
        <Subheader className='tw-mb-2 print:tw-hidden'>
          {t('charsheet.advantages.backgrounds')}
        </Subheader>
        <BackgroundsSection/>
      </div>
      <div className="tw-flex-1">
        <Subheader className='tw-mb-2 print:tw-hidden'>
          {t('charsheet.advantages.virtues')}
        </Subheader>
        <VirtuesSection/>
      </div>
    </div>
  );
}



