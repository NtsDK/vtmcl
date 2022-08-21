import React from 'react';
import { useTranslation } from 'react-i18next';

import { RangeInput2 } from '../../generic/RangeInput2';
import { useStateNHealth } from '../../../../services/storageAdapter';

import './WillSection.css';

interface WillSectionProps {
}

export function WillSection(props: WillSectionProps) {
  const { t } = useTranslation();
  const { state, setState } = useStateNHealth();

  return (
    <div className="WillSection">
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
    </div>
  );
}
