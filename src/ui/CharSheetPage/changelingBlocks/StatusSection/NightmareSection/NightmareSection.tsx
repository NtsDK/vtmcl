import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { useStateNHealth } from '../../../../../services/storageAdapter';
import { RangeInput2 } from '../../../primitives/RangeInput2';

import './NightmareSection.css';

interface NightmareSectionProps {
  className?: string;
}

export function NightmareSection(props: NightmareSectionProps) {
  const { t } = useTranslation();
  const { state, setState } = useStateNHealth();
  const { className } = props;

  return (
    <fieldset
      className={classnames("NightmareSection", className)}
      aria-label={t('charsheet.status.nightmare')}
    >
      <RangeInput2
        max={10}
        name="nightmare"
        variant='square'
        value={state.nightmare}
        onClick={(value: number) => setState('nightmare', value)}
        className="tw-h-6 tw-mb-2"
        multiplier={1.3}
      />
    </fieldset>
  );
}
