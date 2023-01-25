import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from 'classnames';

import { useArts } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';
import {
  checkArts,
  CheckNumberResult,
  EXPECTED_ART_DOTS
} from '../../../../../../domainServices';

interface ArtsCheckProps {
  className?: string;
}

export function ArtsCheck(props: ArtsCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { arts } = useArts();
  const [ artsFilled, setArtsFilled ] = useState<CheckNumberResult>({checked: false, value: 0});
  useEffect(() => {
    setArtsFilled(checkArts(arts));
  }, [arts]);

  return (
    <CheckListItem
      className={classnames("ArtsCheck", className)}
      checked={artsFilled.checked}
      text={t('checklist.art-dots', {
        value: artsFilled.value,
        expected: EXPECTED_ART_DOTS
      })}
    />
  );
}
