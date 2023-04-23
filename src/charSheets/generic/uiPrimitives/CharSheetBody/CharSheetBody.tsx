import React, { PropsWithChildren } from "react";
import classnames from "classnames";

import "./CharSheetBody.css";
import { Settings } from "../../../misc/domain";
import { useSettings } from "../../../misc/services/storageAdapter";

interface CharSheetBodyProps {
  className?: string;
}

function getBgColor(settings: Settings): string {
  const { charsheetBackMode, charsheetBackColor } = settings;
  if (charsheetBackMode === "charsheet-color") {
    return charsheetBackColor;
  }
  return "transparent";
}

function getBgImage(settings: Settings): string {
  // if(envInfo().isArtificialBrowser) {
  //   return 'none';
  // }
  const { charsheetBackMode, charsheetBackImage_v2 } = settings;
  if (charsheetBackMode === "charsheet-image") {
    return `url(${charsheetBackImage_v2})`;
  }
  return "none";
}

export function CharSheetBody(props: PropsWithChildren<CharSheetBodyProps>) {
  const { settings } = useSettings();
  const { children, className } = props;

  return (
    <div
      className={classnames("CharSheetBody tw-relative", className)}
      style={{
        backgroundColor: getBgColor(settings),
        backgroundImage: getBgImage(settings),
      }}
    >
      {children}
    </div>
  );
}
