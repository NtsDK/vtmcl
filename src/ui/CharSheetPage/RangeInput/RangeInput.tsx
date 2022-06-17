import React from 'react';
import * as R from 'ramda';
import './RangeInput.css';
import classNames from 'classnames';

interface RangeInputProps {
  max: number;
  value: number;
  onClick: (value: number) => void;
  className?: string;
}

export function RangeInput(props: RangeInputProps) {
  const { max, value, onClick, className } = props;

  return (
    <div className={classNames("RangeInput tw-flex", className)}>
      {
        R.range(0, max).map(index => {
          return <button 
            className="tw-flex-1"
            onClick={() => {
              onClick(index < value ? index : index + 1)
            }}>
              <img
                className='tw-h-full' 
                src={index < value ? "images/radio-on-button.svg" : "images/circumference.svg"} 
              />
            </button>
        })
      }
    </div>
  );
}



