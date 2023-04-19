import React from "react";
import classnames from "classnames";

import "./CheckListBadge.css";

interface CheckListBadgeProps {
  checked: boolean;
  className?: string;
}

export function CheckListBadge(props: CheckListBadgeProps): JSX.Element {
  const { checked, className } = props;
  return (
    <input
      className={classnames("CheckListBadge", className)}
      type="checkbox"
      checked={checked}
      readOnly={true}
    />
  );
}
