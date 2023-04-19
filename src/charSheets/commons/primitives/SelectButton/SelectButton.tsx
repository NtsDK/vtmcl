import React from "react";
import classnames from "classnames";

import "./SelectButton.css";
import { SelectButtonOption } from "./type";

interface SelectButtonProps {
  options: SelectButtonOption[];
  onChange: (value: string) => void;
  className?: string;
  selectOptionMsg?: string;
}

export function SelectButton(props: SelectButtonProps) {
  const { options, onChange, className, selectOptionMsg } = props;

  return (
    <select
      className={classnames(
        "SelectButton tw-appearance-none tw-w-6",
        className
      )}
      value=""
      onChange={(e) => onChange(e.currentTarget.value)}
      aria-label={selectOptionMsg}
    >
      <option></option>
      {options.map((option) => {
        if (typeof option === "string") {
          return <option key={option}>{option}</option>;
        } else {
          return (
            <optgroup key={option.groupName} label={option.groupName}>
              {option.arr.map((el2) => (
                <option key={el2}>{el2}</option>
              ))}
            </optgroup>
          );
        }
      })}
    </select>
  );
}
