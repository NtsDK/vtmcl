import React, { PropsWithChildren } from 'react';
import './Subheader.css';
import classnames from "classnames";

interface SubheaderProps {
  className?: string;
}

export function Subheader(props: PropsWithChildren<SubheaderProps>) {
  const { children } = props;
  const { className } = props;

  return (
    <h3 className={classnames("Subheader tw-text-center", className)}>
      {children}
    </h3>
  );
}



