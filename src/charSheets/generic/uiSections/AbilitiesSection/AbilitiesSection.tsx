import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { Subheader } from "../../uiPrimitives/Subheader";
import { RangeInput2 } from "../../uiPrimitives/RangeInput2";
import {
  Abilities,
  AbilitiesConfig,
  AbilitiesExtensionValue,
  Limits,
} from "../../../root/domain";
import {
  AbilitiesExtensionService,
  AbilitiesService,
} from "../../application/ports";

interface AbilitiesSectionProps
  extends AbilitiesService,
    AbilitiesExtensionService {
  limits: Limits;
  abilitiesConfig: AbilitiesConfig;
  className?: string;
}

export const AbilitiesSection = memo(function AbilitiesSection(
  props: AbilitiesSectionProps
) {
  const { t } = useTranslation();
  const {
    className,
    abilities,
    setAbility,
    limits,
    abilitiesExtension,
    setAbilityExtensionName,
    setAbilityExtensionValue,
    abilitiesConfig,
  } = props;

  const setValue = useCallback(
    function setValue(value: number, ability: keyof Abilities) {
      setAbility(ability, value);
    },
    [setAbility]
  );

  const setExtensionValue = useCallback(
    function setExtensionValue(
      value: number,
      abilityName: AbilitiesExtensionValue
    ) {
      setAbilityExtensionValue(abilityName, value);
    },
    [setAbilityExtensionValue]
  );

  return (
    <div
      className={classnames("AbilitiesSection tw-flex tw-gap-x-4", className)}
    >
      {abilitiesConfig.map(({ header, items, extension }) => (
        <div className="tw-flex-1" key={header}>
          <Subheader className="print:tw-hidden">
            {t(`charsheet.abilities.${header}`)}
          </Subheader>
          {items.map((ability) => (
            <div
              role="group"
              className="stat-container"
              key={ability}
              aria-labelledby={`ability.label.${ability}`}
            >
              <label
                className="stat-container-label"
                id={`ability.label.${ability}`}
              >
                {t(`charsheet.abilities.${ability}`)}
              </label>
              <RangeInput2
                max={limits.parameterLimit}
                name={`ability.${ability}`}
                value={abilities[ability]}
                dataContext={ability}
                onClick={setValue}
                className="tw-ml-4"
              />
            </div>
          ))}
          <div role="group" className="stat-container">
            <input
              aria-label={t(`charsheet.abilities.extension-${extension}`, {
                id: 1,
              })}
              style={{ boxShadow: "0 1px 0 #333333" }}
              className="stat-container-input tw-flex-1
                  tw-w-6
                  tw-bg-transparent tw-border-none hover:tw-outline
                  hover:tw-outline-1 hover:tw-outline-red-600"
              value={abilitiesExtension[`${extension}Name1`]}
              onChange={(e) =>
                setAbilityExtensionName(`${extension}Name1`, e.target.value)
              }
            />
            <RangeInput2
              max={limits.parameterLimit}
              name={`ability.${extension}.1`}
              value={abilitiesExtension[`${extension}Value1`]}
              dataContext={`${extension}Value1`}
              onClick={setExtensionValue}
              className="tw-ml-4"
            />
          </div>
          <div role="group" className="stat-container">
            <input
              aria-label={t(`charsheet.abilities.extension-${extension}`, {
                id: 2,
              })}
              style={{ boxShadow: "0 1px 0 #333333" }}
              className="stat-container-input tw-flex-1
                  tw-w-6
                  tw-bg-transparent tw-border-none hover:tw-outline
                  hover:tw-outline-1 hover:tw-outline-red-600"
              value={abilitiesExtension[`${extension}Name2`]}
              onChange={(e) =>
                setAbilityExtensionName(`${extension}Name2`, e.target.value)
              }
            />
            <RangeInput2
              max={limits.parameterLimit}
              name={`ability.${extension}.2`}
              value={abilitiesExtension[`${extension}Value2`]}
              dataContext={`${extension}Value2`}
              onClick={setExtensionValue}
              className="tw-ml-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
});
