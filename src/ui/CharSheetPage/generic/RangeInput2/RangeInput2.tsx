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

  const onClickWrapper: MouseEventHandler<HTMLInputElement> = function (event) {
    const { index } = event.currentTarget.dataset;
    const indexNum = Number(index);
    onClick(indexNum === value ? indexNum - 1 : indexNum);
  }

  const cellWidth = '1.0rem';
  const cellHeight = '1.25rem';

  return (
    <div
      className={classNames("RangeInput2 tw-text-center", className)}

    >
      <div
        className='tw-h-6'
        style={{
          display: 'inline-grid',
          gridTemplateRows: splitEvery === undefined ? cellHeight : `repeat(${Math.ceil(max/splitEvery)}, ${cellHeight})`,
          gridTemplateColumns: splitEvery === undefined ? `repeat(${max}, ${cellWidth})` : `repeat(${splitEvery}, ${cellWidth})`
        }}
      >
        {
          R.range(0, max + 1).map(index => {
            return (
              <input
                className={classNames("range-input-checkbox tw-flex-1", {
                  'tw-sr-only': index === 0
                })}
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
    </div>
  );
}



