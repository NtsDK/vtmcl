import React, { useMemo, useState } from "react";
import classnames from "classnames";
import { useCharSheetStorage } from "../../../../../services/storageAdapter";
import { CharSheet } from "../../../../../domain";
import Button from "react-bootstrap/Button";

interface VampireFreePointsProps {
  className?: string;
}

type FreePointsStatus = {
  freePoints: number;
  attributes: number;
  abilities: number;
  disciplines: number;
  backgrounds: number;
  virtues: number;
  humanityOrPath: number;
  willpower: number;
};

const initialFreePointsStatus: FreePointsStatus = {
  freePoints: 15,
  attributes: 0,
  abilities: 0,
  disciplines: 0,
  backgrounds: 0,
  virtues: 0,
  humanityOrPath: 0,
  willpower: 0,
};

export function VampireFreePoints(props: VampireFreePointsProps) {
  const { className } = props;

  const { getCharSheet } = useCharSheetStorage();

  const [prevCharSheet, setPrevCharSheet] = useState<CharSheet | undefined>(
    undefined
  );

  const freePointsStatus = useMemo<FreePointsStatus>(() => {
    if (prevCharSheet === undefined) return initialFreePointsStatus;
    return initialFreePointsStatus;
  }, [prevCharSheet]);

  return (
    <div className={classnames("VampireFreePoints tw-max-w-sm", className)}>
      <Button onClick={() => setPrevCharSheet(getCharSheet())}>
        Начать распределение свободных очков
      </Button>
      VampireFreePoints content
    </div>
  );
}
