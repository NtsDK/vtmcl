import React from 'react';
import { useTranslation } from 'react-i18next';

import { RangeInput2 } from '../../generic/RangeInput2';
import { useStateNHealth } from '../../../../services/storageAdapter';

import './HumanitySection.css';

interface HumanitySectionProps {
}

export function HumanitySection(props: HumanitySectionProps) {
  const { t } = useTranslation();
  const { state, setState } = useStateNHealth();

  return (
    <fieldset
      className="HumanitySection"
      aria-label={t('charsheet.status.humanity')}
    >
      <RangeInput2
        max={10}
        name="humanity"
        value={state.humanity}
        onClick={(value: number) => setState('humanity', value)}
        className="tw-h-6"
      />
    </fieldset>
  );
}
