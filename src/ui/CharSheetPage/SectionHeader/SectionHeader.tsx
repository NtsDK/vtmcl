import React, { PropsWithChildren } from 'react';
import './SectionHeader.css';
import classnames from "classnames";

interface SectionHeaderProps {
  className?: string;
}

export function SectionHeader(props: PropsWithChildren<SectionHeaderProps>) {
  const { children, className } = props;

  return (
    <div className={classnames("SectionHeader panel-header tw-flex", className)}>
      <img className="left-arrow tw-flex-grow-0" src="images/left-arrow.svg" />
      <img className="line-separator tw-flex-grow" src="images/line-separator.svg" />
      {children && <h1 className="header-text tw-text-center">{children}</h1>}
      <img className="line-separator tw-flex-grow" src="images/line-separator.svg" />
      <img className="right-arrow tw-flex-grow-0" src="images/right-arrow.svg" />
    </div>
  );
}



