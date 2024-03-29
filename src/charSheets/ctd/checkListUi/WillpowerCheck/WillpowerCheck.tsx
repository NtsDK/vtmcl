import React from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import {
  checkChangelingWillpower,
  EXPECTED_WILLPOWER_DOTS,
} from "../../checkListLogic";
import { useStatus } from "../../../generic/services/storageAdapter";

interface WillpowerCheckProps {
  className?: string;
}

export function WillpowerCheck(props: WillpowerCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStatus();

  return (
    <CheckListItem
      className={classnames("WillpowerCheck", className)}
      checked={checkChangelingWillpower(state)}
      text={t("checklist.c20-willpower-dots", {
        value: state.willpowerRating,
        expected: EXPECTED_WILLPOWER_DOTS,
      })}
      onFix={() => setState("willpowerRating", EXPECTED_WILLPOWER_DOTS)}
    />
  );
}
