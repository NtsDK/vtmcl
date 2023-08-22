import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import { checkRoad } from "../../checkListLogic";
import {
  useStatus,
  useVirtues,
} from "../../../generic/services/storageAdapter";

interface RoadCheckProps {
  className?: string;
}

export function RoadCheck(props: RoadCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { virtues } = useVirtues();

  const { state, setState } = useStatus();
  const roadChecked = useMemo(() => {
    return checkRoad(state, virtues);
  }, [state, virtues]);

  return (
    <CheckListItem
      className={classnames("RoadCheck", className)}
      checked={roadChecked}
      text={t("checklist.road-dots", {
        value: state.roadValue,
        expected: virtues.conscience + virtues.self_control,
      })}
      onFix={() =>
        setState("roadValue", virtues.conscience + virtues.self_control)
      }
    />
  );
}
