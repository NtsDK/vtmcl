import React from 'react';
import classnames from "classnames";

import './LineSection.css';

interface LineSectionProps {
  className?: string;
  ariaLabel: string;
  value: string;
  setValue: (value: string) => void;
}

export function LineSection(props: LineSectionProps) {
  const {
    className,
    ariaLabel,
    setValue,
    value
  } = props;

  return (
    <div className={classnames("LineSection tw-text-center tw-mx-6", className)}>
      <input
        aria-label={ariaLabel}
        style={{boxShadow: '0 1px 0 #333333'}}
        className='tw-flex-1
          tw-w-full tw-text-center
          tw-bg-transparent tw-border-none hover:tw-outline
          hover:tw-outline-1 hover:tw-outline-red-600'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
