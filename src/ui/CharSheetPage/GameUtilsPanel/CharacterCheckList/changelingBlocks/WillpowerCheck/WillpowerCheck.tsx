import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';

import { useStateNHealth } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';

interface WillpowerCheckProps {
  className?: string;
}

const EXPECTED_WILLPOWER_DOTS = 4;

export function WillpowerCheck(props: WillpowerCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStateNHealth();

  return (
    <CheckListItem
      className={classnames("WillpowerCheck", className)}
      checked={state.willpowerRating === EXPECTED_WILLPOWER_DOTS}
      text={t('checklist.c20-willpower-dots', {
        value: state.willpowerRating,
        expected: EXPECTED_WILLPOWER_DOTS
      })}
      onFix={() => setState('willpowerRating', EXPECTED_WILLPOWER_DOTS)}
    />
  );
}
