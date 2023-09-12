import React, { PropsWithChildren } from "react";
import "./SectionHeader.css";
import classnames from "classnames";

import leftArrowImgUrl from "../../../../../images/left-arrow.svg";
import rightArrowImgUrl from "../../../../../images/right-arrow.svg";
import lineSeparatorImgUrl from "../../../../../images/line-separator.svg";

interface SectionHeaderProps {
  className?: string;
}

export function SectionHeader(props: PropsWithChildren<SectionHeaderProps>) {
  const { children, className } = props;

  return (
    <h2 className={classnames("SectionHeader panel-header tw-flex", className)}>
      <img className="left-arrow tw-flex-grow-0" src={leftArrowImgUrl} alt="" />
      <img
        className="line-separator tw-flex-grow"
        src={lineSeparatorImgUrl}
        alt=""
      />
      {children && (
        <span className="header-text tw-text-center">{children}</span>
      )}
      <img
        className="line-separator tw-flex-grow"
        src={lineSeparatorImgUrl}
        alt=""
      />
      <img
        className="right-arrow tw-flex-grow-0"
        src={rightArrowImgUrl}
        alt=""
      />
    </h2>
  );
}
