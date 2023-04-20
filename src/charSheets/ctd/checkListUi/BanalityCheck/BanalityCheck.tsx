import React from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { useStatus } from "../../../../services/storageAdapter";
import { CheckListItem } from "../../../commons";
import {
  checkBanality,
  EXPECTED_BANALITY_DOTS,
} from "../../checkListLogic/changelingCharacterChecks";

interface BanalityCheckProps {
  className?: string;
}

export function BanalityCheck(props: BanalityCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStatus();

  return (
    <CheckListItem
      className={classnames("BanalityCheck", className)}
      checked={checkBanality(state)}
      text={t("checklist.banality-dots", {
        value: state.banalityRating,
        expected: EXPECTED_BANALITY_DOTS,
      })}
      onFix={() => setState("banalityRating", EXPECTED_BANALITY_DOTS)}
    />
  );
}