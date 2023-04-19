import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { usePresetSettings } from "../../../../i18nResources";
import { useAttributes } from "../../../../services/storageAdapter";
import { CheckListItem } from "../../checkListPrimitives/CheckListItem";
import {
  checkAttributesFilled,
  EXPECTED_ATTRIBUTE_DOTS,
} from "../../../../domainServices";

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
