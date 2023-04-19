import React from "react";
import { RangeInput2 } from "../RangeInput2";
import classnames from "classnames";

import "./RatingPoolSection.css";

interface RatingPoolSectionProps {}

interface RatingPoolSectionProps {
  name: string;
  rating: number;
  setRating: (value: number) => void;
  pool: number;
  setPool: (value: number) => void;
  ratingAriaLabel: string;
  poolAriaLabel: string;
  className?: string;
}

export function RatingPoolSection(props: RatingPoolSectionProps) {
  const {
    className,
    name,
    ratingAriaLabel,
    poolAriaLabel,
    rating,
    setRating,
    pool,
    setPool,
  } = props;

  return (
    <div className={classnames("RatingPoolSection", className)}>
      <fieldset aria-label={ratingAriaLabel}>
        <RangeInput2
          max={10}
          name={`${name}Rating`}
          value={rating}
          dataContext={"rating"}
          onClick={(value: number) => setRating(value)}
          className="tw-h-6"
          multiplier={1.3}
        />
      </fieldset>
      <fieldset aria-label={poolAriaLabel}>
        <RangeInput2
          max={10}
          name={`${name}Pool`}
          value={pool}
          dataContext={"pool"}
          onClick={(value: number) => setPool(value)}
          className="tw-h-6"
          variant="square"
          multiplier={1.3}
        />
      </fieldset>
    </div>
  );
}
