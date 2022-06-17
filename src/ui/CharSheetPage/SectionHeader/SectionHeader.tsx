import React, { PropsWithChildren } from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
}

export function SectionHeader(props: PropsWithChildren<SectionHeaderProps>) {
  const { children } = props;

  return (
    <div className="SectionHeader panel-header tw-flex">
      <img className="left-arrow" src="images/left-arrow.svg" />
      <img className="line-separator" src="images/line-separator.svg" />
      <h1 className="header-text">{children}</h1>
      <img className="line-separator" src="images/line-separator.svg" />
      <img className="right-arrow" src="images/right-arrow.svg" />
    </div>
  );
}



