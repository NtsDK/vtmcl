import React from "react";
import * as R from "ramda";
import classnames from "classnames";

import "./CharacterCheckList.css";
import { usePresetInfo } from "../../../../charSheets";

interface CharacterCheckListProps {
  className?: string;
}

export function CharacterCheckList(
  props: CharacterCheckListProps
): JSX.Element {
  const { className } = props;
  const { CheckList } = usePresetInfo();

  return (
    <div className={classnames("CharacterCheckList tw-max-w-sm", className)}>
      <CheckList />
    </div>
  );
}
