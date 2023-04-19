import React, { useState, useEffect } from "react";
import * as R from "ramda";
import classnames from "classnames";

import "./CharacterCheckList.css";
import { usePreset } from "../../../../services/storageAdapter";
import { CtDCheckList, VtMCheckList } from "../../../../charSheets";

interface CharacterCheckListProps {
  className?: string;
}

export function CharacterCheckList(
  props: CharacterCheckListProps
): JSX.Element {
  const { className } = props;

  const { preset } = usePreset();

  return (
    <div className={classnames("CharacterCheckList tw-max-w-sm", className)}>
      {preset === "vampire_v20" && <VtMCheckList />}
      {preset === "changeling_v20" && <CtDCheckList />}
    </div>
  );
}
