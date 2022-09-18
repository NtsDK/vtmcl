import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { Subheader } from '../../primitives/Subheader';

import './StatusSection.css';
import { ExperienceSection } from '../../commonBlocks/ExperienceSection';
import { WillSection } from '../../commonBlocks/WillSection';
import { GlamourSection } from './GlamourSection';
import { BanalitySection } from './BanalitySection';

interface StatusSectionProps {
  className?: string;
}

export function StatusSection(props: StatusSectionProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classnames("StatusSection tw-flex tw-gap-x-4", className)}>
      <div className="tw-flex-1">
        {/* <Subheader className="tw-mb-2">
          {t('charsheet.status.merits')}
        </Subheader>
        <MeritsSection className="tw-mb-4"/>

        <Subheader className="tw-mb-2">
          {t('charsheet.status.flaws')}
        </Subheader>
        <FlawsSection/> */}

        <Subheader className="tw-mb-2">
          {t('charsheet.status.experience')}
        </Subheader>
        <ExperienceSection />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 tw-mt-2">
          {t('charsheet.status.glamour')}
        </Subheader>
        <GlamourSection className="tw-mb-4 print:tw-mb-2"/>

        <Subheader className="tw-mb-2 tw-mt-2">
          {t('charsheet.status.willpower')}
        </Subheader>
        <WillSection className="tw-mb-4 print:tw-mb-2"/>

        <Subheader className="tw-mb-2 tw-mt-2">
          {t('charsheet.status.banality')}
        </Subheader>
        <BanalitySection/>
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">
          {t('charsheet.status.health')}
        </Subheader>
        {/* <HealthSection className="tw-mb-6 print:tw-mb-2"/> */}
      </div>
    </div>
  );
}



