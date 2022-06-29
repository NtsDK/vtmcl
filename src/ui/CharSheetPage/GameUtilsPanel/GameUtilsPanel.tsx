import React from 'react';
import './GameUtilsPanel.css';

import classnames from "classnames";

interface GameUtilsPanelProps {
  className?: string;
}

export function GameUtilsPanel(props: GameUtilsPanelProps) {
  // const { t } = props;

  const { className } = props;

  return (
    <div className={classnames("GameUtilsPanel tw-flex-grow-0 tw-flex-shrink-0 tw-bg-gray-200", className)}>
      GameUtilsPanel content
    </div>
  );
}



