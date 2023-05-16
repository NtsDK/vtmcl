import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { useInternalPresetProps } from "../../..";
import { CheckListItem } from "../../checkListUiPrimitives/CheckListItem";
import { ABILITY_LIMIT, checkAbilitiesDotLimit } from "../../checkListLogic";
import {
  useAbilitiesExtension,
  useAbilities,
} from "../../services/storageAdapter";

interface AbilitiesDotLimitCheckProps {
  className?: string;
}

export function AbilitiesDotLimitCheck(
  props: AbilitiesDotLimitCheckProps
): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { abilitiesConfig } = useInternalPresetProps();
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
