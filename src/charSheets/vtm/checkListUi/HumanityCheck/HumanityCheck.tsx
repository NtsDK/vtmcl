import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { useVirtues, useStatus } from "../../../../services/storageAdapter";
import { CheckListItem } from "../../../commons/checkList";
import { checkHumanity } from "../../checkListLogic/vampireCharacterChecks";

interface HumanityCheckProps {
  className?: string;
}

export function HumanityCheck(props: HumanityCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { virtues } = useVirtues();

  const { state, setState } = useStatus();
  const humanityChecked = useMemo(() => {
    return checkHumanity(state, virtues);
  }, [state, virtues]);

  return (
    <CheckListItem
      className={classnames("HumanityCheck", className)}
      checked={humanityChecked}
      text={t("checklist.humanity-dots", {
        value: state.humanity,
        expected: virtues.conscience + virtues.self_control,
      })}
      onFix={() =>
        setState("humanity", virtues.conscience + virtues.self_control)
      }
    />
  );
}
