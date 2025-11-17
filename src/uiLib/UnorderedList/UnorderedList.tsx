import React, { PropsWithChildren } from "react";
import classnames from "classnames";

import "./UnorderedList.css";

interface UnorderedListProps {
  className?: string;
}

export function UnorderedList(
  props: PropsWithChildren<UnorderedListProps>
): JSX.Element {
  const { children } = props;

  return <ul className={classnames("UnorderedList", props.className)}>{children}</ul>;
}
