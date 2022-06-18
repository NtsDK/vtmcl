import React from 'react';
import { Subheader } from '../Subheader';
import './MiscSection.css';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import { useStateNHealth } from '../../../services/storageAdapter';
import { RangeInput } from '../RangeInput';
import { HealthSection } from './HealthSection';
import { MeritsSection } from './MeritsSection';
import { FlawsSection } from './FlawsSection';

interface MiscSectionProps {
  className?: string;
}

export function MiscSection(props: MiscSectionProps) {
  const { className } = props;
  const { t } = useTranslation();
  const { state, setState } = useStateNHealth();

  return (
    <div className={classnames("MiscSection tw-flex", className)}>
      <div className="tw-flex-1">
        <Subheader>{t('charsheet.merits')}</Subheader>
        <MeritsSection/>
        <Subheader>{t('charsheet.flaws')}</Subheader>
        <FlawsSection/>
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">{t('charsheet.humanity')}</Subheader>
        <RangeInput 
          max={10} 
          value={state.humanity}
          onClick={(value: number) => setState('humanity', value)}
          className=""
        />
        <Subheader className="tw-mb-2 tw-mt-2">{t('charsheet.willpower')}</Subheader>
        <RangeInput 
          max={10} 
          value={state.willpower}
          onClick={(value: number) => setState('willpower', value)}
          className=""
        />
        <RangeInput 
          max={10} 
          value={state.willpower2}
          onClick={(value: number) => setState('willpower2', value)}
          className=""
        />
        <Subheader className="tw-mb-2 tw-mt-2">{t('charsheet.bloodpool')}</Subheader>
        <RangeInput 
          max={20} 
          value={state.bloodpool}
          onClick={(value: number) => setState('bloodpool', value)}
          className=""
          splitEvery={10}
        />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-4">{t('charsheet.health')}</Subheader>
        <HealthSection/>
      </div>
    </div>
  );
}



