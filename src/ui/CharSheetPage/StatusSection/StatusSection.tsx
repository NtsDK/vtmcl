import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { Subheader } from '../generic/Subheader';
import { useStateNHealth } from '../../../services/storageAdapter';

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
  const { state, setState } = useStateNHealth();

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

        <div className='tw-text-center tw-mx-6 tw-mb-6 print:tw-mb-2'>
          <input
            aria-label={t('charsheet.status.weakness')}
            style={{boxShadow: '0 1px 0 #333333'}}
            className='tw-flex-1
              tw-w-full tw-text-center
              tw-bg-transparent tw-border-none hover:tw-outline
              hover:tw-outline-1 hover:tw-outline-red-600'
            value={state.weakness}
            onChange={(e) => setState('weakness', e.target.value)}
          />
        </div>

        <Subheader className="tw-mb-2">
          {t('charsheet.status.experience')}
        </Subheader>

        <div className='tw-text-center tw-mx-6'>
          <input
            aria-label={t('charsheet.status.experience')}
            style={{boxShadow: '0 1px 0 #333333'}}
            className='tw-flex-1
              tw-w-full tw-text-center
              tw-bg-transparent tw-border-none hover:tw-outline
              hover:tw-outline-1 hover:tw-outline-red-600'
            value={state.experience}
            onChange={(e) => setState('experience', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}



