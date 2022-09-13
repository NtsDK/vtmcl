import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

import { Subheader } from '../../primitives/Subheader';
import {
  useAbilities,
  useAbilitiesExtension
} from '../../../../services/storageAdapter';
import { RangeInput2 } from '../../primitives/RangeInput2';
import { usePresetSettings } from '../../../../i18nResources';

import './AbilitiesSection.css';

interface AbilitiesSectionProps {
  className?: string;
}

export function AbilitiesSection(props: AbilitiesSectionProps) {
  const { t } = useTranslation();
  const { className } = props;
  const { abilities, setAbility } = useAbilities();
  const {
    abilitiesExtension,
    setAbilityExtensionName,
    setAbilityExtensionValue
  } = useAbilitiesExtension();

  const { abilitiesConfig } = usePresetSettings();

  return (
    <div className={classnames("AbilitiesSection tw-flex tw-gap-x-4", className)}>
      {
        abilitiesConfig.map(({header, items, extension}) =>
          <div className='tw-flex-1' key={header}>
            <Subheader className='print:tw-hidden'>
              {t(`charsheet.abilities.${header}`)}
            </Subheader>
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