import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';

import './VirtuesCheck.css';
import { useVirtues } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';
import {
  CheckNumberResult,
  checkVirtues,
  EXPECTED_VIRTUE_DOTS
} from '../../../../../../domainServices';

interface VirtuesCheckProps {
  className?: string;
}

export function VirtuesCheck(props: VirtuesCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { virtues } = useVirtues();
  const [ virtuesFilled, setVirtuesFilled ] = useState<CheckNumberResult>({checked: false, value: 0});
  useEffect(() => {
    setVirtuesFilled(checkVirtues(virtues));
  }, [virtues]);

  return (
    <CheckListItem
      className={classnames("VirtuesCheck", className)}
      checked={virtuesFilled.checked}
      text={t('checklist.virtue-dots', {
        value: virtuesFilled.value,
        expected: EXPECTED_VIRTUE_DOTS
      })}
    />
  );
}
