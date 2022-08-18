import React from 'react';
import { Subheader } from '../generic/Subheader';
import './StatusSection.css';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import { useStateNHealth } from '../../../services/storageAdapter';
import { RangeInput } from '../generic/RangeInput';
import { HealthSection } from './HealthSection';
import { MeritsSection } from './MeritsSection';
import { FlawsSection } from './FlawsSection';
import { RangeInput2 } from '../generic/RangeInput2';

interface StatusSectionProps {
  className?: string;
}

export function StatusSection(props: StatusSectionProps) {
  const { className } = props;
  const { t } = useTranslation();
  const { state, setState } = useStateNHealth();

  return (
    <div className={classnames("StatusSection tw-flex", className)}>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">{t('charsheet.status.merits')}</Subheader>
        <MeritsSection className="tw-mb-4"/>
        <Subheader className="tw-mb-2">{t('charsheet.status.flaws')}</Subheader>
        <FlawsSection/>
      </div>
      <div className="tw-flex-1">
        <Subheader 
          id="humanity.header" 
          className="tw-mb-2"
        >
          {t('charsheet.status.humanity')}
        </Subheader>
        <fieldset aria-label={t('charsheet.status.humanity')}>
          <RangeInput2
            max={10} 
            name="humanity"
            value={state.humanity}
            onClick={(value: number) => setState('humanity', value)}
            className="tw-h-6"
          />
        </fieldset>

        <Subheader className="tw-mb-2 tw-mt-2">{t('charsheet.status.willpower')}</Subheader>
        <fieldset aria-label={t('charsheet.status.willpower-rating')}>
          <RangeInput2
            max={10} 
            name="willpower"
            value={state.willpower}
            onClick={(value: number) => setState('willpower', value)}
            className="tw-h-6"
          />
        </fieldset>
        <fieldset aria-label={t('charsheet.status.willpower-pool')}>
          <RangeInput2
            max={10} 
            name="willpower2"
            value={state.willpower2}
            onClick={(value: number) => setState('willpower2', value)}
            className="tw-h-6"
            variant='square'
          />
        </fieldset>

        <Subheader 
          id="bloodpool.header" 
          className="tw-mb-2 tw-mt-2"
        >
          {t('charsheet.status.bloodpool')}
        </Subheader>
        <fieldset aria-label={t('charsheet.status.bloodpool')}>
          <RangeInput2
            max={20} 
            name="bloodpool"
            value={state.bloodpool}
            onClick={(value: number) => setState('bloodpool', value)}
            className="tw-h-12"
            splitEvery={10}
            variant='square'
          />
        </fieldset>
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-4">{t('charsheet.status.health')}</Subheader>
        <HealthSection/>
      </div>
    </div>
  );
}



