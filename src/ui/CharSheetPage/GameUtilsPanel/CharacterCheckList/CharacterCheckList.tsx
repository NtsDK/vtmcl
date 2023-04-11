import React, { useState, useEffect } from "react";
import * as R from "ramda";
import classnames from "classnames";

import "./CharacterCheckList.css";
import { usePreset } from "../../../../services/storageAdapter";
import { VampireCheckList } from "./VampireCheckList";
import { ChangelingCheckList } from "./ChangelingCheckList";

interface CharacterCheckListProps {
  className?: string;
}

export function CharacterCheckList(props: CharacterCheckListProps) {
  const { className } = props;

  const { preset } = usePreset();

  return (
    <div className={classnames("CharacterCheckList tw-max-w-sm", className)}>
      {preset === "vampire_v20" && <VampireCheckList />}
      {preset === "changeling_v20" && <ChangelingCheckList />}
    </div>
  );
}
