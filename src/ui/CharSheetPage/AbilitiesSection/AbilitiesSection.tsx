import React from 'react';
// import { SectionHeader } from '../SectionHeader';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { RangeInput } from '../generic/RangeInput';
import { Subheader } from '../generic/Subheader';
import {
  Abilities,
  knowledgesArr,
  skillsArr,
  talentsArr
} from '../../../domain';
import {
  useAbilities,
  useAbilitiesExtension
} from '../../../services/storageAdapter';

import './AbilitiesSection.css';
import { RangeInput2 } from '../generic/RangeInput2';

interface AbilitiesSectionProps {
  className?: string;
}

type AbilitiesConfig = {
  header: 'talents' | 'skills' | 'knowledges';
  items: (keyof Abilities)[];
  extension: 'talent' | 'skill' | 'knowledge';
}[];

const abilitiesConfig: AbilitiesConfig = [{
  header: 'talents',
  items: talentsArr,
  extension: 'talent'
}, {
  header: 'skills',
  items: skillsArr,
  extension: 'skill'
}, {
  header: 'knowledges',
  items: knowledgesArr,
  extension: 'knowledge'
}];

export function AbilitiesSection(props: AbilitiesSectionProps) {
  const { t } = useTranslation();
  const { className } = props;
  const { abilities, setAbility } = useAbilities();
  const {
    abilitiesExtension,
    setAbilityExtensionName,
    setAbilityExtensionValue
  } = useAbilitiesExtension();

  return (
    <div className={classnames("AbilitiesSection tw-flex", className)}>
      {
        abilitiesConfig.map(({header, items, extension}) =>
          <div className='tw-flex-1' key={header}>
            <Subheader>{t(`charsheet.abilities.${header}`)}</Subheader>
            {
              items.map(ability =>
                <div
                  role="group"
                  className="stat-container"
                  key={ability}
                  aria-labelledby={`ability.label.${ability}`}
                >
                  <label
                    className='stat-container-label'
                    id={`ability.label.${ability}`}
                  >
                    {t(`charsheet.abilities.${ability}`)}
                  </label>
                  <RangeInput2
                    max={5}
                    name={`ability.${ability}`}
                    value={abilities[ability]}
                    onClick={(value: number) => setAbility(ability, value)}
                    className="tw-flex-grow"
                  />
                </div>
              )
            }
            <div
              role="group"
              className="stat-container"
            >
              <input
                aria-label={t(`charsheet.abilities.extension-${extension}`, {id: 1})}
                style={{boxShadow: '0 1px 0 #333333'}}
                className='stat-container-input tw-flex-1
                  tw-w-6
                  tw-bg-transparent tw-border-none hover:tw-outline
                  hover:tw-outline-1 hover:tw-outline-red-600'
                value={abilitiesExtension[`${extension}Name1`]}
                onChange={(e) => setAbilityExtensionName(`${extension}Name1`, e.target.value)}
              />
              <RangeInput2
                max={5}
                name={`ability.${extension}.1`}
                value={abilitiesExtension[`${extension}Value1`]}
                onClick={(value: number) => setAbilityExtensionValue(`${extension}Value1`, value)}
                className="tw-flex-grow"
              />
            </div>
            <div
              role="group"
              className="stat-container"
            >
              <input
                aria-label={t(`charsheet.abilities.extension-${extension}`, {id: 2})}
                style={{boxShadow: '0 1px 0 #333333'}}
                className='stat-container-input tw-flex-1
                  tw-w-6
                  tw-bg-transparent tw-border-none hover:tw-outline
                  hover:tw-outline-1 hover:tw-outline-red-600'
                value={abilitiesExtension[`${extension}Name2`]}
                onChange={(e) => setAbilityExtensionName(`${extension}Name2`, e.target.value)}
              />
              <RangeInput2
                max={5}
                name={`ability.${extension}.2`}
                value={abilitiesExtension[`${extension}Value2`]}
                onClick={(value: number) => setAbilityExtensionValue(`${extension}Value2`, value)}
                className="tw-flex-grow"
              />
            </div>
          </div>
        )
      }
    </div>
  );
}
