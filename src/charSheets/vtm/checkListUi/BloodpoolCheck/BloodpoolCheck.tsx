import React from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import {
  checkBloodpool,
  INITIAL_BLOODPOOL_MAX_LIMIT,
} from "../../checkListLogic";
import { randomInteger } from "../../../../lib/miscUtils";
import { useStatus } from "../../../generic/services/storageAdapter";

interface BloodpoolCheckProps {
  className?: string;
}

export function BloodpoolCheck(props: BloodpoolCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStatus();

  return (
    <CheckListItem
      className={classnames("BloodpoolCheck", className)}
      checked={checkBloodpool(state)}
      text={t("checklist.bloodpool-dots", {
        value: state.bloodpool,
      })}
      onFix={() =>
        setState("bloodpool", randomInteger(1, INITIAL_BLOODPOOL_MAX_LIMIT))
      }
    />
  );
}
