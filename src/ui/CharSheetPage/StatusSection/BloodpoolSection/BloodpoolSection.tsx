import React from 'react';
import { useTranslation } from 'react-i18next';

import { RangeInput2 } from '../../generic/RangeInput2';
import { useStateNHealth } from '../../../../services/storageAdapter';

import './BloodpoolSection.css';

interface BloodpoolSectionProps {
}

export function BloodpoolSection(props: BloodpoolSectionProps) {
  const { t } = useTranslation();
  const { state, setState } = useStateNHealth();

  return (
    <fieldset
      className="BloodpoolSection"
      aria-label={t('charsheet.status.bloodpool')}
    >
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
  );
}
