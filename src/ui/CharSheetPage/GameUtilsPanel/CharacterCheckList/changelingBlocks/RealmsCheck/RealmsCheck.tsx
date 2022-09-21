import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';


import { useRealms } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';
import { CheckNumberResult, checkArrSumFilled } from '../../type';

const EXPECTED_REALM_DOTS = 5;

interface RealmsCheckProps {
  className?: string;
}

export function RealmsCheck(props: RealmsCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { realms } = useRealms()

  const [ realmsFilled, setRealmsFilled ] = useState<CheckNumberResult>({checked: false, value: 0});
  useEffect(() => {
    setRealmsFilled(checkArrSumFilled(R.values(realms), EXPECTED_REALM_DOTS));
  }, [realms]);

  return (
    <CheckListItem
      className={classnames("RealmsCheck", className)}
      checked={realmsFilled.checked}
      text={t('checklist.realm-dots', {
        value: realmsFilled.value,
        expected: EXPECTED_REALM_DOTS
      })}
    />
  );
}
