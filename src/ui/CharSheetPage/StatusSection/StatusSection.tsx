import React from 'react';
import { useTranslation } from 'react-i18next';

import classnames from "classnames";
import { Subheader } from '../generic/Subheader';

import './StatusSection.css';
import { HealthSection } from './HealthSection';
import { MeritsSection } from './MeritsSection';
import { FlawsSection } from './FlawsSection';
import { HumanitySection } from './HumanitySection';
import { WillSection } from './WillSection';
import { BloodpoolSection } from './BloodpoolSection';

interface StatusSectionProps {
  className?: string;
}

export function StatusSection(props: StatusSectionProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classnames("StatusSection tw-flex", className)}>
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
        <HumanitySection />

        <Subheader className="tw-mb-2 tw-mt-2">
          {t('charsheet.status.willpower')}
        </Subheader>
        <WillSection />

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
        <HealthSection/>
      </div>
    </div>
  );
}



