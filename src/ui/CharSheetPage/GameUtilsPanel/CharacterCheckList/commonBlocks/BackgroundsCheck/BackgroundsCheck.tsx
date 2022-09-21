import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';

import './BackgroundsCheck.css';
import { useBackgrounds } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';
import { CheckNumberResult, checkArrSumFilled } from '../../type';

const EXPECTED_BACKGROUND_DOTS = 5;

interface BackgroundsCheckProps {
  className?: string;
}

export function BackgroundsCheck(props: BackgroundsCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { backgrounds } = useBackgrounds();
  const [ backgroundsFilled, setBackgroundsFilled ] = useState<CheckNumberResult>({checked: false, value: 0});
  useEffect(() => {
    setBackgroundsFilled(checkArrSumFilled(R.pluck('value', backgrounds), EXPECTED_BACKGROUND_DOTS));
  }, [backgrounds]);

  return (
    <CheckListItem
      className={classnames("BackgroundsCheck", className)}
      checked={backgroundsFilled.checked}
      text={t('checklist.background-dots', {
        value: backgroundsFilled.value,
        expected: EXPECTED_BACKGROUND_DOTS
      })}
    />
  );
}
