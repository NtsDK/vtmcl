import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../checkListUiPrimitives/CheckListItem";
import {
  checkAttributesFilled,
  EXPECTED_ATTRIBUTE_DOTS,
} from "../../checkListLogic";
import { useInternalPresetProps } from "../../..";
import { useAttributes } from "../../services/storageAdapter";

interface AttributesCheckProps {
  expectedAttributeDots?: readonly [number, number, number];
  className?: string;
}

export function AttributesCheck(props: AttributesCheckProps): JSX.Element {
  const { className, expectedAttributeDots = EXPECTED_ATTRIBUTE_DOTS } = props;
  const { t } = useTranslation();

  const { attributes } = useAttributes();
  const { attributesConfig } = useInternalPresetProps();
  const attributesFilled = useMemo(() => {
    return checkAttributesFilled(
      attributes,
      attributesConfig,
      expectedAttributeDots
    );
  }, [attributes, attributesConfig, expectedAttributeDots]);

  return (
    <CheckListItem
      className={classnames("AttributesCheck", className)}
      checked={attributesFilled.checked}
      text={t("checklist.attribute-dots", {
        value: attributesFilled.arr.join("/"),
        expected: expectedAttributeDots.join("/"),
      })}
    />
  );
}
