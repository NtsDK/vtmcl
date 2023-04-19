import React from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { useVirtues, useStatus } from "../../../../services/storageAdapter";
import { checkVampireWillpower } from "../../../../domainServices";
import { CheckListItem } from "../../../commons";

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
