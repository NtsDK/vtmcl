import React from 'react';
import classnames from "classnames";

import './SelectButton.css';
import { SelectButtonOption } from './type';

interface SelectButtonProps {
  options: SelectButtonOption[];
  onChange: (value: string) => void;
  className?: string;
}

export function SelectButton(props: SelectButtonProps) {
  const { options, onChange, className } = props;

  return (
    <select
      className={classnames("SelectButton", className)}
      value=''
      onChange={e => onChange(e.currentTarget.value)}
    >
      <option></option>
      {
        options.map(option => {
          if (typeof option === 'string') {
            return (
              <option>
                {option}
              </option>
            );
          } else {
            return (
              <optgroup label={option.groupName}>
                {
                  option.arr.map(el2 =>
                    <option>
                      {el2}
                    </option>
                  )
                }
              </optgroup>
            );
          }
        })
      }
    </select>
  );
}
