import React from 'react';
import { Subheader } from '../../primitives/Subheader';
import './AdvantagesSection.css';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import { RealmsSection } from './RealmsSection';
import { ArtsSection } from './ArtsSection';
import { BackgroundsSection } from '../../commonBlocks/BackgroundsSection';
import { useBackgrounds, useLimits } from '../../../../services/storageAdapter';
import { useResource } from '../../../../i18nResources';

interface AdvantagesSectionProps {
  className?: string;
}

export function AdvantagesSection(props: AdvantagesSectionProps) {
  const { className } = props;
  const { t } = useTranslation();

  const {
    backgroundOptions
  } = useResource();
  const { limits } = useLimits();
  const backgroundsService = useBackgrounds();

  return (
    <div
      className={classnames("AdvantagesSection tw-flex tw-gap-x-4", className)}
    >
      <div className="tw-flex-1">
        <Subheader className='tw-mb-2 print:tw-hidden'>
          {t('charsheet.advantages.backgrounds')}
        </Subheader>
        <BackgroundsSection
          limits={limits}
          backgroundOptions={backgroundOptions}
          {...backgroundsService}
        />
      </div>
      <div className="tw-flex-1">
        <Subheader className='tw-mb-2 print:tw-hidden'>
          {t('charsheet.advantages.arts')}
        </Subheader>
        <ArtsSection/>
      </div>
      <div className="tw-flex-1">
        <Subheader className='tw-mb-2 print:tw-hidden'>
          {t('charsheet.advantages.realms')}
        </Subheader>
        <RealmsSection/>
      </div>
    </div>
  );
}
