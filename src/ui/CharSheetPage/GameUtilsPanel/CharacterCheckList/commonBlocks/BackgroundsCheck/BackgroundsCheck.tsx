import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';

import './BackgroundsCheck.css';
import { useBackgrounds } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';
import {
  checkBackgrounds,
  CheckNumberResult,
  EXPECTED_BACKGROUND_DOTS
} from '../../../../../../domainServices';

interface BackgroundsCheckProps {
  className?: string;
}

export function BackgroundsCheck(props: BackgroundsCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { backgrounds } = useBackgrounds();
  const [ backgroundsFilled, setBackgroundsFilled ] = useState<CheckNumberResult>({checked: false, value: 0});
  useEffect(() => {
    setBackgroundsFilled(checkBackgrounds(backgrounds));
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
