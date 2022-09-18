import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { Subheader } from '../../primitives/Subheader';
import { useStateNHealth } from '../../../../services/storageAdapter';

import './StatusSection.css';
import { HealthSection } from '../../commonBlocks/HealthSection';
import { MeritsSection } from './MeritsSection';
import { FlawsSection } from './FlawsSection';
import { HumanitySection } from './HumanitySection';
import { WillSection } from '../../commonBlocks/WillSection';
import { BloodpoolSection } from './BloodpoolSection';
import { ExperienceSection } from '../../commonBlocks/ExperienceSection';
import { WeaknessSection } from './WeaknessSection';

interface StatusSectionProps {
  className?: string;
}

export function StatusSection(props: StatusSectionProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classnames("StatusSection tw-flex tw-gap-x-4", className)}>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">
          {t('charsheet.status.merits')}
        </Subheader>
        <MeritsSection className="tw-mb-4"/>

        <Subheader className="tw-mb-2">
          {t('charsheet.status.flaws')}
        </Subheader>
        <FlawsSection/>
      </div>
      <div className="tw-flex-1">
        <Subheader
          id="humanity.header"
          className="tw-mb-2"
        >
          {t('charsheet.status.humanity')}
        </Subheader>
        <HumanitySection className="tw-mb-4 print:tw-mb-2"/>

        <Subheader className="tw-mb-2 tw-mt-2">
          {t('charsheet.status.willpower')}
        </Subheader>
        <WillSection className="tw-mb-4 print:tw-mb-2"/>

        <Subheader
          id="bloodpool.header"
          className="tw-mb-2 tw-mt-2"
        >
          {t('charsheet.status.bloodpool')}
        </Subheader>
        <BloodpoolSection />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">
          {t('charsheet.status.health')}
        </Subheader>
        <HealthSection className="tw-mb-6 print:tw-mb-2"/>

        <Subheader className="tw-mb-2">
          {t('charsheet.status.weakness')}
        </Subheader>
        <WeaknessSection className='tw-mb-6 print:tw-mb-2'/>

        <Subheader className="tw-mb-2">
          {t('charsheet.status.experience')}
        </Subheader>
        <ExperienceSection />
      </div>
    </div>
  );
}



