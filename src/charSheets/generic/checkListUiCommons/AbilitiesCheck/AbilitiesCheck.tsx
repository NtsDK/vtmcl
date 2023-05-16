import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { useInternalPresetProps } from "../../..";
import { CheckListItem } from "../../checkListUiPrimitives/CheckListItem";
import {
  checkAbilitiesFilled,
  EXPECTED_ABILITY_DOTS,
} from "../../checkListLogic";
import {
  useAbilities,
  useAbilitiesExtension,
} from "../../services/storageAdapter";

interface AbilitiesCheckProps {
  className?: string;
}

export function AbilitiesCheck(props: AbilitiesCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { abilitiesConfig } = useInternalPresetProps();

  const { abilities } = useAbilities();
  const { abilitiesExtension } = useAbilitiesExtension();
  const abilitiesFilled = useMemo(() => {
    return checkAbilitiesFilled(
      abilities,
      abilitiesConfig,
      abilitiesExtension,
      EXPECTED_ABILITY_DOTS
    );
  }, [abilities, abilitiesConfig, abilitiesExtension]);

  return (
    <CheckListItem
      className={classnames("AbilitiesCheck", className)}
      // className="AbilitiesCheck tw-mx-5 tw-my-3"
      checked={abilitiesFilled.checked}
      text={t("checklist.ability-dots", {
        value: abilitiesFilled.arr.join("/"),
        expected: EXPECTED_ABILITY_DOTS.join("/"),
      })}
    />
  );
}
