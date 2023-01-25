import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from "classnames";


import './AbilitiesDotLimitCheck.css';
import { usePresetSettings } from '../../../../../../i18nResources';
import { useAbilities } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';
import {
  ABILITY_LIMIT,
  checkAbilitiesDotLimit
} from '../../../../../../domainServices';

interface AbilitiesDotLimitCheckProps {
  className?: string;
}

export function AbilitiesDotLimitCheck(props: AbilitiesDotLimitCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { abilitiesConfig } = usePresetSettings();

  const { abilities } = useAbilities();
  const [ abilitiesDotLimitChecked, setAbilitiesDotLimitChecked ] = useState(false);
  useEffect(() => {
    setAbilitiesDotLimitChecked(checkAbilitiesDotLimit(abilities, abilitiesConfig));
  }, [abilities, abilitiesConfig]);

  return (
    <CheckListItem
      className={classnames("AbilitiesDotLimitCheck", className)}
      checked={abilitiesDotLimitChecked}
      text={t('checklist.ability-dot-limit', {
        expected: ABILITY_LIMIT
      })}
    />
  );
}
