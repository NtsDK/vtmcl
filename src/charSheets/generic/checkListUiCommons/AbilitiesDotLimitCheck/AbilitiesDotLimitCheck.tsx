import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { usePresetSettings } from "../../..";
import {
  useAbilities,
  useAbilitiesExtension,
} from "../../../../charSheets/root/services/storageAdapter";
import { CheckListItem } from "../../checkListUiPrimitives/CheckListItem";
import {
  ABILITY_LIMIT,
  checkAbilitiesDotLimit,
} from "../../checkListLogic/commonCharacterChecks";

interface AbilitiesDotLimitCheckProps {
  className?: string;
}

export function AbilitiesDotLimitCheck(props: AbilitiesDotLimitCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { abilitiesConfig } = usePresetSettings();
  const { abilitiesExtension } = useAbilitiesExtension();

  const { abilities } = useAbilities();
  const abilitiesDotLimitChecked = useMemo(() => {
    return checkAbilitiesDotLimit(
      abilities,
      abilitiesConfig,
      abilitiesExtension,
      ABILITY_LIMIT
    );
  }, [abilities, abilitiesConfig, abilitiesExtension]);

  return (
    <CheckListItem
      className={classnames("AbilitiesDotLimitCheck", className)}
      checked={abilitiesDotLimitChecked}
      text={t("checklist.ability-dot-limit", {
        expected: ABILITY_LIMIT,
      })}
    />
  );
}
