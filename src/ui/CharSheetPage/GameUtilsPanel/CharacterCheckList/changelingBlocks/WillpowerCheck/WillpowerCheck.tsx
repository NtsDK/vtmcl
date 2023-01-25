import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';

import { useStateNHealth } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';
import { checkChangelingWillpower, EXPECTED_WILLPOWER_DOTS } from '../../../../../../domainServices';

interface WillpowerCheckProps {
  className?: string;
}

export function WillpowerCheck(props: WillpowerCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStateNHealth();

  return (
    <CheckListItem
      className={classnames("WillpowerCheck", className)}
      checked={checkChangelingWillpower(state)}
      text={t('checklist.c20-willpower-dots', {
        value: state.willpowerRating,
        expected: EXPECTED_WILLPOWER_DOTS
      })}
      onFix={() => setState('willpowerRating', EXPECTED_WILLPOWER_DOTS)}
    />
  );
}
