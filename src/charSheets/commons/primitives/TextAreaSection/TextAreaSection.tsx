import React from "react";
import classnames from "classnames";

import "./TextAreaSection.css";

interface TextAreaSectionProps {
  className?: string;
  ariaLabel: string;
  value: string;
  setValue: (value: string) => void;
  rows: number;
}

export function TextAreaSection(props: TextAreaSectionProps) {
  const { className, ariaLabel, setValue, value, rows } = props;

  return (
    <>
      {rows === 1 && (
        <input
          aria-label={ariaLabel}
          style={{ boxShadow: "0 1px 0 #333333" }}
          className={classnames(
            `tw-flex-1 tw-w-full tw-bg-transparent
            tw-border-none hover:tw-outline hover:tw-outline-1
            hover:tw-outline-red-600`,
            className
          )}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      {rows !== 1 && (
        <textarea
          rows={rows}
          aria-label={ariaLabel}
          style={{ boxShadow: "0 1px 0 #333333" }}
          className={classnames(
            `tw-flex-1 tw-w-full tw-bg-transparent
            tw-border-none hover:tw-outline hover:tw-outline-1
            hover:tw-outline-red-600`,
            className
          )}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </>
  );
}
