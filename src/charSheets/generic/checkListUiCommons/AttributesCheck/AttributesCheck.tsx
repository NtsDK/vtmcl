import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../checkListUiPrimitives/CheckListItem";
import {
  checkAttributesFilled,
  EXPECTED_ATTRIBUTE_DOTS,
} from "../../checkListLogic/commonCharacterChecks";
import { usePresetSettings } from "../../..";
import { useAttributes } from "../../services/storageAdapter";

interface AttributesCheckProps {
  className?: string;
}

export function AttributesCheck(props: AttributesCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { attributes } = useAttributes();
  const { attributesConfig } = usePresetSettings();
  const attributesFilled = useMemo(() => {
    return checkAttributesFilled(
      attributes,
      attributesConfig,
      EXPECTED_ATTRIBUTE_DOTS
    );
  }, [attributes, attributesConfig]);

  return (
    <CheckListItem
      className={classnames("AttributesCheck", className)}
      checked={attributesFilled.checked}
      text={t("checklist.attribute-dots", {
        value: attributesFilled.arr.join("/"),
        expected: EXPECTED_ATTRIBUTE_DOTS.join("/"),
      })}
    />
  );
}
