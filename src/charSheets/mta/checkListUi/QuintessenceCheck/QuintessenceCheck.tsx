import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import { checkQuintessence, EXPECTED_PARADOX_DOTS } from "../../checkListLogic";
import {
  useBackgrounds,
  useStatus,
} from "../../../generic/services/storageAdapter";

interface QuintessenceCheckProps {
  className?: string;
}

export function QuintessenceCheck(props: QuintessenceCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStatus();
  const { backgrounds } = useBackgrounds();
  const quintessenceFilled = useMemo(() => {
    return checkQuintessence(state, backgrounds);
  }, [state, backgrounds]);

  return (
    <CheckListItem
      className={classnames("QuintessenceCheck", className)}
      checked={quintessenceFilled.checked}
      text={t("checklist.quintessence-dots", {
        value: state.quintessence,
        expected: quintessenceFilled.avatarBackgroundValue,
      })}
      onFix={() =>
        setState("quintessence", quintessenceFilled.avatarBackgroundValue)
      }
    />
  );
}
