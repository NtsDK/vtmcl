import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import { checkSpheres, EXPECTED_SPHERE_DOTS } from "../../checkListLogic";
import { useSpheres } from "../../services/storageAdapter";

interface SpheresCheckProps {
  className?: string;
}

export function SpheresCheck(props: SpheresCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { spheres } = useSpheres();
  const spheresFilled = useMemo(() => {
    return checkSpheres(spheres);
  }, [spheres]);

  return (
    <CheckListItem
      className={classnames("SpheresCheck", className)}
      checked={spheresFilled.checked}
      text={t("checklist.sphere-dots", {
        value: spheresFilled.value,
        expected: EXPECTED_SPHERE_DOTS,
      })}
    />
  );
}
