import * as R from "ramda";

export interface CheckArrResult {
  checked: boolean;
  arr: number[];
}

export interface CheckNumberResult {
  checked: boolean;
  value: number;
}

export function checkArrSumFilled(
  arr: number[],
  targetValue: number
): CheckNumberResult {
  const sum = R.sum(arr);
  return {
    checked: R.equals(sum, targetValue),
    value: sum,
  };
}
