import React from "react";
import classnames from "classnames";

import { FreePoints } from "./FreePoints";
import { usePreset } from "../../../../services/storageAdapter";
import { VampireFreePoints } from "./VampireFreePoints";

interface FreePointsPanelProps {
  className?: string;
}

export function FreePointsPanel(props: FreePointsPanelProps) {
  const { className } = props;

  const { preset } = usePreset();

  return (
    <div className={classnames("FreePointsPanel tw-max-w-sm", className)}>
      {/* <FreePoints /> */}
      {preset === "vampire_v20" && <VampireFreePoints />}
      {preset === "changeling_v20" && <FreePoints />}
    </div>
  );
}
