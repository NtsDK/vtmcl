import React, { MouseEventHandler, useMemo, useCallback, memo } from "react";
import * as R from "ramda";
import classNames from "classnames";

import "./RangeInput2.css";

interface RangeInput2Props<DataContext> {
  max: number;
  value: number;
  dataContext: DataContext;
  onClick(value: number, dataContext: DataContext): void;
  name: string;
  className?: string;
  splitEvery?: number;
  variant?: "circle" | "square";
  multiplier?: number;
}

export const RangeInput2 = memo(function RangeInput2<DataContext>(
  props: RangeInput2Props<DataContext>
) {
  const {
    max,
    value,
    dataContext,
    onClick,
    className,
    name,
    splitEvery,
    variant = "circle",
    multiplier = 1,
  } = props;

  const onClickWrapper = useCallback(
    function (event: React.MouseEvent<HTMLInputElement, MouseEvent>) {
      const { index } = event.currentTarget.dataset;
      const indexNum = Number(index);
      onClick(indexNum === value ? indexNum - 1 : indexNum, dataContext);
    },
    [value, onClick, dataContext]
  );

  const style = useMemo(() => {
    const cellWidth = 1.0 * multiplier;
    const cellHeight = 1.25 * multiplier;
    return {
      display: "inline-grid",
      gridTemplateRows:
        splitEvery === undefined
          ? `${cellHeight}rem`
          : `repeat(${Math.ceil(max / splitEvery)}, ${cellHeight}rem)`,
      gridTemplateColumns:
        splitEvery === undefined
          ? `repeat(${max}, ${cellWidth}rem)`
          : `repeat(${splitEvery}, ${cellWidth}rem)`,
    };
  }, [splitEvery, max, multiplier]);

  const onChange = useCallback(() => {}, []);

  return (
    <div
      className={classNames(
        "RangeInput2 tw-text-center tw-leading-4 print:tw-leading-3",
        className
      )} //
    >
      <div className="" style={style}>
        {R.range(0, max + 1).map((index) => {
          return (
            <input
              className={classNames("range-input-checkbox tw-flex-1", {
                "tw-sr-only": index === 0,
              })}
              key={`${index}`}
              type="radio"
              name={name}
              title={String(index)}
              onClick={onClickWrapper}
              data-index={index}
              data-variant={variant}
              checked={index === value}
              onChange={onChange}
            />
          );
        })}
      </div>
    </div>
  );
});
