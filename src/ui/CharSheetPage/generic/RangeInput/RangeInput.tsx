import React, { MouseEventHandler } from 'react';
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

  const onClickWrapper: MouseEventHandler<HTMLButtonElement> = function (event) {
    const { index } = event.currentTarget.dataset;
    const indexNum = Number(index);
    // Example:
    //  Usual index is in 0,1,2,3,4
    //  Value is essential: 0,1,2,3,4,5
    const clickedValue = indexNum + 1;
    
    onClick(clickedValue === value ? clickedValue - 1 : clickedValue);
    // old approach
    // onClick(indexNum < value ? indexNum : indexNum + 1);
  }

  return (
    <div className={classNames("RangeInput tw-flex tw-flex-wrap", className)}>
      {
        R.range(0, max).map(index => {
          return <button 
              key={`${index}`}
              className="tw-flex-1"
              style={style}
              data-index={index}
              onClick={onClickWrapper}
            >
              <img
                className='tw-w-full tw-h-full' 
                src={index < value ? "images/radio-on-button.svg" : "images/circumference.svg"} 
                alt=""
              />
            </button>
        })
      }
    </div>
  );
}



