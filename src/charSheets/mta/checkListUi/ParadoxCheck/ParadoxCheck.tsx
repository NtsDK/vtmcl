import React from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import {
  checkParadox,
  EXPECTED_PARADOX_DOTS,
} from "../../checkListLogic";
import { useStatus } from "../../../generic/services/storageAdapter";

interface ParadoxCheckProps {
  className?: string;
}

export function ParadoxCheck(props: ParadoxCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStatus();

  return (
    <CheckListItem
      className={classnames("ParadoxCheck", className)}
      checked={checkParadox(state)}
      text={t("checklist.paradox-dots", {
        value: state.paradox,
        expected: EXPECTED_PARADOX_DOTS,
      })}
      onFix={() => setState("paradox", EXPECTED_PARADOX_DOTS)}
    />
  );
}
