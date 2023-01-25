import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from "classnames";

import './AttributesCheck.css';
import { usePresetSettings } from '../../../../../../i18nResources';
import { useAttributes } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';
import {
  CheckArrResult,
  checkAttributesFilled,
  EXPECTED_ATTRIBUTE_DOTS
} from '../../../../../../domainServices';

interface AttributesCheckProps {
  className?: string;
}

export function AttributesCheck(props: AttributesCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { attributes } = useAttributes();
  const { attributesConfig } = usePresetSettings();
  const [ attributesFilled, setAttributesFilled ] = useState<CheckArrResult>({checked: false, arr: [3,3,3]});
  useEffect(() => {
    setAttributesFilled(checkAttributesFilled(attributes, attributesConfig));
  }, [attributes, attributesConfig]);

  return (
    <CheckListItem
      className={classnames("AttributesCheck", className)}
      checked={attributesFilled.checked}
      text={t('checklist.attribute-dots', {
        value: attributesFilled.arr.join('/'),
        expected: EXPECTED_ATTRIBUTE_DOTS.join('/')
      })}
    />
  );
}
