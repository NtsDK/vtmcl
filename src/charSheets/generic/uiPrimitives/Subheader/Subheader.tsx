import React, { PropsWithChildren } from "react";
import "./Subheader.css";
import classnames from "classnames";

interface SubheaderProps {
  id?: string;
  className?: string;
}

export function Subheader(props: PropsWithChildren<SubheaderProps>) {
  const { children, className, id } = props;

  return (
    <h3 id={id} className={classnames("Subheader tw-text-center", className)}>
      {children}
    </h3>
  );
}
