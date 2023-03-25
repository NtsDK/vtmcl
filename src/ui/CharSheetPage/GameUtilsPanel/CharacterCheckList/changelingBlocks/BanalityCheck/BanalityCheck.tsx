import React from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';

import { useStatus } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';
import { checkBanality, EXPECTED_BANALITY_DOTS } from '../../../../../../domainServices';

interface BanalityCheckProps {
  className?: string;
}

export function BanalityCheck(props: BanalityCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStatus();

  return (
    <CheckListItem
      className={classnames("BanalityCheck", className)}
      checked={checkBanality(state)}
      text={t('checklist.banality-dots', {
        value: state.banalityRating,
        expected: EXPECTED_BANALITY_DOTS
      })}
      onFix={() => setState('banalityRating', EXPECTED_BANALITY_DOTS)}
    />
  );
}
