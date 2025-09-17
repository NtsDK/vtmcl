import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import { checkSpheresDotLimit } from "../../checkListLogic";
import {
  useSpheres,
} from "../../services/storageAdapter";
import { useStatus } from "../../../generic/services/storageAdapter";

interface SpheresDotLimitCheckProps {
  className?: string;
}

export function SpheresDotLimitCheck(
  props: SpheresDotLimitCheckProps
): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { spheres } = useSpheres();
  const { state } = useStatus();
  const spheresDotLimitChecked = useMemo(() => {
    return checkSpheresDotLimit(
      spheres,
      state
    );
  }, [spheres, state]);

  return (
    <CheckListItem
      className={classnames("SpheresDotLimitCheck", className)}
      checked={spheresDotLimitChecked}
      text={t("checklist.sphere-dot-limit", {
        expected: state.arete,
      })}
    />
  );
}
