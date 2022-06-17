import React from 'react';
import * as R from 'ramda';
import './RangeInput.css';
import classNames from 'classnames';

interface RangeInputProps {
  max: number;
  value: number;
  onClick: (value: number) => void;
  className?: string;
  splitEvery?: number;
}

export function RangeInput(props: RangeInputProps) {
  const { max, value, onClick, className, splitEvery } = props;
  let style = {};
  if (splitEvery) {
    style = { 'flexBasis': `${100/splitEvery}%`};
  }

  return (
    <div className={classNames("RangeInput tw-flex tw-flex-wrap", className)}>
      {
        R.range(0, max).map(index => {
          return <button 
            className="tw-flex-1"
            style={style}
            onClick={() => {
              onClick(index < value ? index : index + 1)
            }}>
              <img
                className='tw-w-full tw-h-full' 
                src={index < value ? "images/radio-on-button.svg" : "images/circumference.svg"} 
              />
            </button>
        })
      }
    </div>
  );
}



