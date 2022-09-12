import React, { PropsWithChildren } from 'react';
import classnames from "classnames";

import './CharSheetBody.css';

import { useSettings } from '../../../../services/storageAdapter';
import { Settings } from '../../../../domain';

interface CharSheetBodyProps {
  className?: string;
}

function getBgColor(settings: Settings) {
  const {
    charsheetBackMode,
    charsheetBackColor,
  } = settings;
  if (charsheetBackMode === 'charsheet-color') {
    return charsheetBackColor;
  }
  return 'transparent';
}

function getBgImage(settings: Settings) {
  const {
    charsheetBackMode,
    charsheetBackImage_v2
  } = settings;
  if (charsheetBackMode === 'charsheet-image') {
    return `url(${charsheetBackImage_v2})`;
  }
  return 'none';
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



