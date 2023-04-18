import React, { PropsWithChildren } from 'react';
import './SectionHeader.css';
import classnames from "classnames";

interface SectionHeaderProps {
  className?: string;
}

export function SectionHeader(props: PropsWithChildren<SectionHeaderProps>) {
  const { children, className } = props;

  return (
    <h2 className={classnames("SectionHeader panel-header tw-flex", className)}>
      <img className="left-arrow tw-flex-grow-0" src="images/left-arrow.svg" alt=""/>
      <img className="line-separator tw-flex-grow" src="images/line-separator.svg"  alt=""/>
      {children && <span className="header-text tw-text-center">{children}</span>}
      <img className="line-separator tw-flex-grow" src="images/line-separator.svg"  alt=""/>
      <img className="right-arrow tw-flex-grow-0" src="images/right-arrow.svg"  alt=""/>
    </h2>
  );
}



