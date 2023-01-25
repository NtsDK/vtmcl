import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from "classnames";

import './AbilitiesCheck.css';
import { usePresetSettings } from '../../../../../../i18nResources';
import { useAbilities } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';
import {
  checkAbilitiesFilled,
  CheckArrResult,
  EXPECTED_ABILITY_DOTS
} from '../../../../../../domainServices';

interface AbilitiesCheckProps {
  className?: string;
}

export function AbilitiesCheck(props: AbilitiesCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { abilitiesConfig } = usePresetSettings();

  const { abilities } = useAbilities();
  const [ abilitiesFilled, setAbilitiesFilled ] = useState<CheckArrResult>({checked: false, arr: [0,0,0]});
  useEffect(() => {
    setAbilitiesFilled(checkAbilitiesFilled(abilities, abilitiesConfig));
  }, [abilities, abilitiesConfig]);

  return (
    <CheckListItem
      className={classnames("AbilitiesCheck", className)}
      // className="AbilitiesCheck tw-mx-5 tw-my-3"
      checked={abilitiesFilled.checked}
      text={t('checklist.ability-dots', {
        value: abilitiesFilled.arr.join('/'),
        expected: EXPECTED_ABILITY_DOTS.join('/')
      })}
    />
  );
}
