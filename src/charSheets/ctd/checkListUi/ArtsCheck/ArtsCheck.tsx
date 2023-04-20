import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { useArts } from "../../../../services/storageAdapter";
import { CheckListItem } from "../../../commons";
import {
  checkArts,
  EXPECTED_ART_DOTS,
} from "../../checkListLogic/changelingCharacterChecks";

interface ArtsCheckProps {
  className?: string;
}

export function ArtsCheck(props: ArtsCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { arts } = useArts();
  const artsFilled = useMemo(() => {
    return checkArts(arts);
  }, [arts]);

  return (
    <CheckListItem
      className={classnames("ArtsCheck", className)}
      checked={artsFilled.checked}
      text={t("checklist.art-dots", {
        value: artsFilled.value,
        expected: EXPECTED_ART_DOTS,
      })}
    />
  );
}
