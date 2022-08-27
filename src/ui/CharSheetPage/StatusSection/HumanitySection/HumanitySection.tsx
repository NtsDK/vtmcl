import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { RangeInput2 } from '../../generic/RangeInput2';
import { useStateNHealth } from '../../../../services/storageAdapter';

import './HumanitySection.css';
import { SelectButton } from '../../generic/SelectButton';
import { useResource } from '../../../../useResource';

interface HumanitySectionProps {
  className?: string;
}

export function HumanitySection(props: HumanitySectionProps) {
  const { t } = useTranslation();
  const { state, setState } = useStateNHealth();
  const { className } = props;

  const { pathOptions } = useResource();

  return (
    <fieldset
      className={classnames("HumanitySection", className)}
      aria-label={t('charsheet.status.humanity')}
    >
      <div className="tw-mb-2 tw-flex">
        <input
          aria-label={t('charsheet.status.humanity')}
          style={{boxShadow: '0 1px 0 #333333'}}
          className='tw-flex-1
            tw-text-center
            tw-bg-transparent tw-border-none hover:tw-outline
            hover:tw-outline-1 hover:tw-outline-red-600'
          value={state.pathName}
          onChange={(e) => setState('pathName', e.target.value)}
        />
        <SelectButton
          options={pathOptions}
          className="tw-ml-2 print:tw-hidden tw-flex-0"
          onChange={(value) => setState('pathName', value)}
        />
      </div>
      <RangeInput2
        max={10}
        name="humanity"
        value={state.humanity}
        onClick={(value: number) => setState('humanity', value)}
        className="tw-h-6 tw-mb-2"
      />
      <div className='tw-text-center tw-text-sm'>
        <label htmlFor='bearingName.input'>
          {t('charsheet.status.bearing')}
        </label>
        :
        <input
          id="bearingName.input"
          style={{boxShadow: '0 1px 0 #333333'}}
          className='tw-flex-1 tw-text-center tw-w-32
            tw-bg-transparent tw-border-none hover:tw-outline
            hover:tw-outline-1 hover:tw-outline-red-600'
          value={state.bearingName}
          onChange={(e) => setState('bearingName', e.target.value)}
        />
        (
        <input
          aria-label={t('charsheet.status.bearing-modifier')}
          style={{boxShadow: '0 1px 0 #333333'}}
          className='tw-flex-1
            tw-w-6 tw-text-center
            tw-bg-transparent tw-border-none hover:tw-outline
            hover:tw-outline-1 hover:tw-outline-red-600'
          value={state.bearingModifier}
          onChange={(e) => setState('bearingModifier', e.target.value)}
        />
        )
      </div>
    </fieldset>
  );
}
