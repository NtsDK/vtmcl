import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { useVirtues } from "../../../../services/storageAdapter";
import { CheckListItem } from "../../../commons/checkList";
import {
  checkVirtues,
  EXPECTED_VIRTUE_DOTS,
} from "../../checkListLogic/vampireCharacterChecks";

interface VirtuesCheckProps {
  className?: string;
}

export function VirtuesCheck(props: VirtuesCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { virtues } = useVirtues();
  const virtuesFilled = useMemo(() => checkVirtues(virtues), [virtues]);

  return (
    <CheckListItem
      className={classnames("VirtuesCheck", className)}
      checked={virtuesFilled.checked}
      text={t("checklist.virtue-dots", {
        value: virtuesFilled.value,
        expected: EXPECTED_VIRTUE_DOTS,
      })}
    />
  );
}
