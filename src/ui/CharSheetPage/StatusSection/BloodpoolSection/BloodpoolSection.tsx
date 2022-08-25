import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { RangeInput2 } from '../../generic/RangeInput2';
import { useStateNHealth } from '../../../../services/storageAdapter';

import './BloodpoolSection.css';

interface BloodpoolSectionProps {
  className?: string;
}

export function BloodpoolSection(props: BloodpoolSectionProps) {
  const { t } = useTranslation();
  const { state, setState } = useStateNHealth();
  const { className } = props;

  return (
    <fieldset
      className={classnames("BloodpoolSection", className)}
      aria-label={t('charsheet.status.bloodpool')}
    >
      <RangeInput2
        max={20}
        name="bloodpool"
        value={state.bloodpool}
        onClick={(value: number) => setState('bloodpool', value)}
        className="tw-h-12 tw-mb-1"
        splitEvery={10}
        variant='square'
      />
      <div className='tw-text-center tw-text-sm'>
        <label htmlFor='bloodPerTurn.input'>
          {t('charsheet.status.blood-per-turn')}
        </label>
        :
        <input
          id="bloodPerTurn.input"
          style={{boxShadow: '0 1px 0 #333333'}}
          className='tw-flex-1
            tw-w-6 tw-text-center
            tw-bg-transparent tw-border-none hover:tw-outline
            hover:tw-outline-1 hover:tw-outline-red-600'
          value={state.bloodPerTurn}
          onChange={(e) => setState('bloodPerTurn', e.target.value)}
        />
      </div>
    </fieldset>
  );
}
