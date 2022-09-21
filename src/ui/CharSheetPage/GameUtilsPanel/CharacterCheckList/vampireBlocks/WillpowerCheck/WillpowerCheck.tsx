import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';

import './WillpowerCheck.css';
import { useVirtues, useStateNHealth } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';

interface WillpowerCheckProps {
  className?: string;
}

export function WillpowerCheck(props: WillpowerCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { virtues } = useVirtues();

  const { state, setState } = useStateNHealth();

  return (
    <CheckListItem
      className={classnames("WillpowerCheck", className)}
      checked={state.willpowerRating === virtues.courage}
      text={t('checklist.willpower-dots', {
        value: state.willpowerRating,
        expected: virtues.courage
      })}
      onFix={() => setState('willpowerRating', virtues.courage)}
    />
  );
}
