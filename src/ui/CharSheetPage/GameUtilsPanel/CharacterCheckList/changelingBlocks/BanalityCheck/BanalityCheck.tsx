import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';

import { useStateNHealth } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';

interface BanalityCheckProps {
  className?: string;
}

const EXPECTED_BANALITY_DOTS = 3;

export function BanalityCheck(props: BanalityCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStateNHealth();

  return (
    <CheckListItem
      className={classnames("BanalityCheck", className)}
      checked={state.banalityRating === EXPECTED_BANALITY_DOTS}
      text={t('checklist.banality-dots', {
        value: state.banalityRating,
        expected: EXPECTED_BANALITY_DOTS
      })}
      onFix={() => setState('banalityRating', EXPECTED_BANALITY_DOTS)}
    />
  );
}
