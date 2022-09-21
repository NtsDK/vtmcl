import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';

import './BloodpoolCheck.css';
import { randomInteger } from '../../../../../../lib/miscUtils';
import { useStateNHealth } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';

interface BloodpoolCheckProps {
  className?: string;
}

export function BloodpoolCheck(props: BloodpoolCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStateNHealth();

  return (
    <CheckListItem
      className={classnames("BloodpoolCheck", className)}
      checked={state.bloodpool > 0 &&  state.bloodpool <= 10}
      text={t('checklist.bloodpool-dots', {
        value: state.bloodpool,
      })}
      onFix={() => setState('bloodpool', randomInteger(1,10))}
    />
  );
}
