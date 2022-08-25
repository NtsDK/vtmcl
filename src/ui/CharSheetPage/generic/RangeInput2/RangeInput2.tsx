import React, { MouseEventHandler } from 'react';
import * as R from 'ramda';
import classNames from 'classnames';

import './RangeInput2.css';

interface RangeInput2Props {
  max: number;
  value: number;
  onClick: (value: number) => void;
  name: string;
  className?: string;
  splitEvery?: number;
  variant?: 'circle' | 'square';
}

export function RangeInput2(props: RangeInput2Props) {
  const {
    max,
    value,
    onClick,
    className,
    name,
    splitEvery,
    variant = 'circle'
  } = props;
  let style = {};
  if (splitEvery) {
    style = { 'flexBasis': `${100/splitEvery}%`};
  }

  const onClickWrapper: MouseEventHandler<HTMLInputElement> = function (event) {
    const { index } = event.currentTarget.dataset;
    const indexNum = Number(index);
    onClick(indexNum === value ? indexNum - 1 : indexNum);
  }

  return (
    <div className={classNames("RangeInput2 tw-flex tw-flex-wrap", className)}>
      {
        R.range(0, max + 1).map(index => {
          return (
            <input
              className={classNames("range-input-checkbox tw-flex-1", {
                'tw-sr-only': index === 0
              })}
              style={style}
              key={`${index}`}
              type='radio'
              name={name}
              title={String(index)}
              onClick={onClickWrapper}
              data-index={index}
              data-variant={variant}
              checked={index === value}
              onChange={() => {}}
            />
          )
        })
      }
    </div>
  );
}



