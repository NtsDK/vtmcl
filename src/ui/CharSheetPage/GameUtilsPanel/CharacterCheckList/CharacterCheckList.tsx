import React, { useState, useEffect } from 'react';
import * as R from 'ramda';
import './CharacterCheckList.css';

import classnames from "classnames";
import { useTranslation } from 'react-i18next';

import {
  useAbilities,
  useAttributes,
  useBackgrounds,
  useDisciplines,
  useStateNHealth,
  useVirtues
} from '../../../../services/storageAdapter';
import {
  Attributes,
  Abilities,
} from '../../../../domain';
import { CheckListItem } from './CheckListItem';
import { randomInteger } from '../../../../lib/miscUtils';
import {
  AbilitiesConfig,
  AttributesConfig,
  usePresetSettings
} from '../../../../i18nResources';

interface CharacterCheckListProps {
  className?: string;
}

interface CheckArrResult {
  checked: boolean;
  arr: number[];
}

interface CheckNumberResult {
  checked: boolean;
  value: number;
}

const EXPECTED_ATTRIBUTE_DOTS = [7,5,3];
const EXPECTED_ABILITY_DOTS = [13,9,5];
const EXPECTED_DISCIPLINE_DOTS = 3;
const EXPECTED_BACKGROUND_DOTS = 5;
const EXPECTED_VIRTUE_DOTS = 7;
const ABILITY_LIMIT = 3;

function checkAttributesFilled(
  attributes: Attributes,
  attributesConfig: AttributesConfig
): CheckArrResult {
  const list = R.reverse(R.sort(R.subtract,
    attributesConfig.map(el => R.sum(R.props(el.items, attributes)))
  ));
  // console.log('list', list)
  return {
    checked: R.equals(list, EXPECTED_ATTRIBUTE_DOTS),
    arr: list
  };
}

function checkAbilitiesFilled(
  abilities: Abilities,
  abilitiesConfig: AbilitiesConfig
): CheckArrResult {
  const list = R.reverse(R.sort(R.subtract,
    abilitiesConfig.map(el => R.sum(R.props(el.items, abilities)))
  ));
  // console.log('list', list)
  return {
    checked: R.equals(list, EXPECTED_ABILITY_DOTS),
    arr: list
  };
}

function checkDisciplinesFilled(arr: number[], targetValue: number): CheckNumberResult {
  const sum = R.sum(arr);
  return {
    checked: R.equals(sum, targetValue),
    value: sum
  };
}

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

export function CharacterCheckList(props: CharacterCheckListProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { attributes } = useAttributes();
  const { attributesConfig, abilitiesConfig } = usePresetSettings();
  const [ attributesFilled, setAttributesFilled ] = useState<CheckArrResult>({checked: false, arr: [3,3,3]});
  useEffect(() => {
    setAttributesFilled(checkAttributesFilled(attributes, attributesConfig));
  }, [attributes, attributesConfig]);

  const { abilities } = useAbilities();
  const [ abilitiesFilled, setAbilitiesFilled ] = useState<CheckArrResult>({checked: false, arr: [0,0,0]});
  const [ abilitiesDotLimitChecked, setAbilitiesDotLimitChecked ] = useState(false);
  useEffect(() => {
    setAbilitiesFilled(checkAbilitiesFilled(abilities, abilitiesConfig));
    setAbilitiesDotLimitChecked(checkAbilitiesDotLimit(abilities, abilitiesConfig));
  }, [abilities, abilitiesConfig]);

  const { disciplines } = useDisciplines();
  const [ disciplinesFilled, setDisciplinesFilled ] = useState<CheckNumberResult>({checked: false, value: 0});
  useEffect(() => {
    setDisciplinesFilled(checkDisciplinesFilled(R.pluck('value', disciplines), EXPECTED_DISCIPLINE_DOTS));
  }, [disciplines]);

  const { backgrounds } = useBackgrounds();
  const [ backgroundsFilled, setBackgroundsFilled ] = useState<CheckNumberResult>({checked: false, value: 0});
  useEffect(() => {
    setBackgroundsFilled(checkDisciplinesFilled(R.pluck('value', backgrounds), EXPECTED_BACKGROUND_DOTS));
  }, [backgrounds]);

  const { virtues } = useVirtues();
  const [ virtuesFilled, setVirtuesFilled ] = useState<CheckNumberResult>({checked: false, value: 0});
  useEffect(() => {
    setVirtuesFilled(checkDisciplinesFilled(R.values(virtues), EXPECTED_VIRTUE_DOTS));
  }, [virtues]);

  const { state, setState } = useStateNHealth();
  const [ humanityChecked, setHumanityChecked ] = useState(false);
  useEffect(() => {
    setHumanityChecked(state.humanity === (virtues.conscience + virtues.self_control));
  }, [state, virtues]);

  return (
    <div className={classnames("CharacterCheckList tw-max-w-sm", className)}>
      <ul>
        <CheckListItem
          className="tw-mx-5 tw-my-3"
          checked={attributesFilled.checked}
          text={t('checklist.attribute-dots', {
            value: attributesFilled.arr.join('/'),
            expected: EXPECTED_ATTRIBUTE_DOTS.join('/')
          })}
        />
        <CheckListItem
          className="tw-mx-5 tw-my-3"
          checked={abilitiesFilled.checked}
          text={t('checklist.ability-dots', {
            value: abilitiesFilled.arr.join('/'),
            expected: EXPECTED_ABILITY_DOTS.join('/')
          })}
        />
        <CheckListItem
          className="tw-mx-5 tw-my-3"
          checked={abilitiesDotLimitChecked}
          text={t('checklist.ability-dot-limit', {
            expected: ABILITY_LIMIT
          })}
        />
        <CheckListItem
          className="tw-mx-5 tw-my-3"
          checked={disciplinesFilled.checked}
          text={t('checklist.discipline-dots', {
            value: disciplinesFilled.value,
            expected: EXPECTED_DISCIPLINE_DOTS
          })}
        />
        <CheckListItem
          className="tw-mx-5 tw-my-3"
          checked={backgroundsFilled.checked}
          text={t('checklist.background-dots', {
            value: backgroundsFilled.value,
            expected: EXPECTED_BACKGROUND_DOTS
          })}
        />
        <CheckListItem
          className="tw-mx-5 tw-my-3"
          checked={virtuesFilled.checked}
          text={t('checklist.virtue-dots', {
            value: virtuesFilled.value,
            expected: EXPECTED_VIRTUE_DOTS
          })}
        />
        <CheckListItem
          className="tw-mx-5 tw-my-3"
          checked={humanityChecked}
          text={t('checklist.humanity-dots', {
            value: state.humanity,
            expected: virtues.conscience + virtues.self_control
          })}
          onFix={() => setState('humanity', virtues.conscience + virtues.self_control)}
        />
        <CheckListItem
          className="tw-mx-5 tw-my-3"
          checked={state.willpowerRating === virtues.courage}
          text={t('checklist.willpower-dots', {
            value: state.willpowerRating,
            expected: virtues.courage
          })}
          onFix={() => setState('willpowerRating', virtues.courage)}
        />
        <CheckListItem
          className="tw-mx-5 tw-my-3"
          checked={state.bloodpool > 0 &&  state.bloodpool <= 10}
          text={t('checklist.bloodpool-dots', {
            value: state.bloodpool,
          })}
          onFix={() => setState('bloodpool', randomInteger(1,10))}
        />
      </ul>
      <div className='tw-mx-5 tw-my-3 '>
        <h3 className="tw-text-xl tw-mb-2">{t('checklist.free-point-header')}</h3>
        <p>{t('checklist.free-point-description')}</p>
        <p>{t('checklist.free-point-cost')}</p>
        <ul className="tw-ml-4">
          <li>5 - {t('checklist.attribute')}</li>
          <li>2 - {t('checklist.ability')}</li>
          <li>7 - {t('checklist.discipline')}</li>
          <li>1 - {t('checklist.background')}</li>
          <li>2 - {t('checklist.virtue')}</li>
          <li>2 - {t('checklist.humanity-path')}</li>
          <li>1 - {t('checklist.willpower')}</li>
        </ul>
      </div>
    </div>
  );
}



