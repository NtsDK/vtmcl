import React from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import { checkVampireWillpower } from "../../checkListLogic";
import {
  useStatus,
  useVirtues,
} from "../../../generic/services/storageAdapter";

interface WillpowerCheckProps {
  className?: string;
}

export function WillpowerCheck(props: WillpowerCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { virtues } = useVirtues();

  const { state, setState } = useStatus();

  return (
    <CheckListItem
      className={classnames("WillpowerCheck", className)}
      checked={checkVampireWillpower(state, virtues)}
      text={t("checklist.willpower-dots", {
        value: state.willpowerRating,
        expected: virtues.courage,
      })}
      onFix={() => setState("willpowerRating", virtues.courage)}
    />
  );
}
