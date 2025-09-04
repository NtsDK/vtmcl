import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../checkListUiPrimitives/CheckListItem";
import {
  checkBackgrounds,
  EXPECTED_BACKGROUND_DOTS,
} from "../../checkListLogic";
import { useBackgrounds } from "../../services/storageAdapter";

interface BackgroundsCheckProps {
  expectedBackgroundDots?: number;
  className?: string;
}

export function BackgroundsCheck(props: BackgroundsCheckProps): JSX.Element {
  const { className, expectedBackgroundDots } = props;
  const { t } = useTranslation();

  const { backgrounds } = useBackgrounds();
  const backgroundsFilled = useMemo(() => {
    return checkBackgrounds(backgrounds, expectedBackgroundDots || EXPECTED_BACKGROUND_DOTS);
  }, [backgrounds]);

  return (
    <CheckListItem
      className={classnames("BackgroundsCheck", className)}
      checked={backgroundsFilled.checked}
      text={t("checklist.background-dots", {
        value: backgroundsFilled.value,
        expected: expectedBackgroundDots || EXPECTED_BACKGROUND_DOTS,
      })}
    />
  );
}
