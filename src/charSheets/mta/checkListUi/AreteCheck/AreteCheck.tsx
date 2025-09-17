import React from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import {
  checkArete,
  EXPECTED_ARETE_DOTS,
} from "../../checkListLogic";
import { useStatus } from "../../../generic/services/storageAdapter";

interface AreteCheckProps {
  className?: string;
}

export function AreteCheck(props: AreteCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStatus();

  return (
    <CheckListItem
      className={classnames("AreteCheck", className)}
      checked={checkArete(state)}
      text={t("checklist.arete-dots", {
        value: state.arete,
        expected: EXPECTED_ARETE_DOTS,
      })}
      onFix={() => setState("arete", EXPECTED_ARETE_DOTS)}
    />
  );
}
