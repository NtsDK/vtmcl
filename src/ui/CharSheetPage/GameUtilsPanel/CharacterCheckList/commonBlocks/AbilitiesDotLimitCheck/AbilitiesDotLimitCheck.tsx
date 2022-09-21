import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as R from 'ramda';
import classnames from "classnames";


import './AbilitiesDotLimitCheck.css';
import { Abilities } from '../../../../../../domain';
import { AbilitiesConfig, usePresetSettings } from '../../../../../../i18nResources';
import { useAbilities } from '../../../../../../services/storageAdapter';
import { CheckListItem } from '../../primitives/CheckListItem';

const ABILITY_LIMIT = 3;

function checkAbilitiesDotLimit(
  abilities: Abilities,
  abilitiesConfig: AbilitiesConfig
): boolean {
  const arr = R.props(
    R.flatten(R.pluck('items', abilitiesConfig)),
    abilities
  ).filter(el => el > ABILITY_LIMIT);
  return arr.length === 0;
}

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
