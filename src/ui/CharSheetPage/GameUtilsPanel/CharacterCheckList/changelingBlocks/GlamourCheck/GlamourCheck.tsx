import React from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { useStatus } from "../../../../../../services/storageAdapter";
import { CheckListItem } from "../../primitives/CheckListItem";
import {
  checkGlamour,
  EXPECTED_GLAMOUR_DOTS,
} from "../../../../../../domainServices";

interface GlamourCheckProps {
  className?: string;
}

export function GlamourCheck(props: GlamourCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { state, setState } = useStatus();

  return (
    <CheckListItem
      className={classnames("GlamourCheck", className)}
      checked={checkGlamour(state)}
      text={t("checklist.glamour-dots", {
        value: state.glamourRating,
        expected: EXPECTED_GLAMOUR_DOTS,
      })}
      onFix={() => setState("glamourRating", EXPECTED_GLAMOUR_DOTS)}
    />
  );
}
