import React from "react";

import "./LineSection.css";
import { TextAreaSection } from "../TextAreaSection";

interface LineSectionProps {
  className?: string;
  ariaLabel: string;
  value: string;
  setValue: (value: string) => void;
}

export function LineSection(props: LineSectionProps) {
  const { className, ariaLabel, setValue, value } = props;

  return (
    <TextAreaSection
      ariaLabel={ariaLabel}
      setValue={setValue}
      value={value}
      className={className}
      rows={1}
    />
  );
}
