import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';

import { useStateNHealth } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';

interface GlamourCheckProps {
  className?: string;
}

const EXPECTED_GLAMOUR_DOTS = 4;

export function GlamourCheck(props: GlamourCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStateNHealth();

  return (
    <CheckListItem
      className={classnames("GlamourCheck", className)}
      checked={state.glamourRating === EXPECTED_GLAMOUR_DOTS}
      text={t('checklist.glamour-dots', {
        value: state.glamourRating,
        expected: EXPECTED_GLAMOUR_DOTS
      })}
      onFix={() => setState('glamourRating', EXPECTED_GLAMOUR_DOTS)}
    />
  );
}
