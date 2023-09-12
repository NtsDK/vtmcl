import React, { useMemo, useState } from "react";
import classnames from "classnames";
import Button from "react-bootstrap/cjs/Button";
import * as R from "ramda";
import { useTranslation } from "react-i18next";

import { useCharSheetStorage } from "../../../../charSheets/root/services/storageAdapter";
import {
  CharSheet,
  FreebiePointItem,
  FreebiePointsConfig,
} from "../../../../charSheets/root/domain";
import { strToNumber } from "../../../../lib/miscUtils";

interface FreebiePointsPanelProps {
  freebiePointsConfig: FreebiePointsConfig;
  className?: string;
}

type FilledFreebiePointItem = {
  name: FreebiePointItem["name"];
  multiplier: number;
  diff: number;
};

type FreebiePointStats = {
  freebiePoints: number;
  meritsSum: number;
  flawsSum: number;
  filledFreebiePoint: FilledFreebiePointItem[];
};

function formatNumber(num: number): string {
  return num === 0 ? "0" : num > 0 ? `+${num}` : String(num);
}

export function FreebiePointsPanel(
  props: FreebiePointsPanelProps,
): JSX.Element {
  const { className, freebiePointsConfig } = props;
  const { t } = useTranslation();

  const { charSheet, setCharSheet } = useCharSheetStorage();

  const [prevCharSheet, setPrevCharSheet] = useState<CharSheet | undefined>(
    undefined,
  );

  const freebiePointsStatus = useMemo<FreebiePointStats>(() => {
    if (prevCharSheet === undefined) {
      return {
        freebiePoints: freebiePointsConfig.initialPoints,
        flawsSum: 0,
        meritsSum: 0,
        filledFreebiePoint: [],
      };
    }

    const arr: FilledFreebiePointItem[] = freebiePointsConfig.list.map(
      (el) => ({
        name: el.name,
        multiplier: el.multiplier,
        diff: el.extractor(prevCharSheet) - el.extractor(charSheet),
      }),
    );

    return {
      freebiePoints: freebiePointsConfig.initialPoints,
      flawsSum: R.sum(charSheet.flaws.map(strToNumber)),
      meritsSum: R.sum(charSheet.merits.map(strToNumber)),
      filledFreebiePoint: arr,
    };
  }, [prevCharSheet, freebiePointsConfig, charSheet]);

  return (
    <div
      className={classnames(
        "FreebiePointsPanel tw-max-w-sm tw-mx-5 tw-my-3",
        className,
      )}
    >
      <Button
        className="custom-btn-bg-color tw-mx-auto tw-block disabled:tw-cursor-not-allowed tw-mb-4"
        onClick={() => setPrevCharSheet(charSheet)}
        disabled={prevCharSheet !== undefined}
      >
        {t("freebiePoints.beginFreebiePointAssignment")}
      </Button>
      {prevCharSheet && (
        <div>
          <p className="tw-mb-4">{t("freebiePoints.description")}</p>
          <div className="tw-w-52 tw-mx-auto tw-mb-4">
            <div>
              {t("freebiePoints.freebiePoints")}
              <span className="tw-float-right">
                {formatNumber(freebiePointsStatus.freebiePoints)}
              </span>
            </div>
            <div>
              {t("freebiePoints.merits")}
              <span className="tw-float-right">
                {formatNumber(-freebiePointsStatus.meritsSum)}
              </span>
            </div>
            <div>
              {t("freebiePoints.flaws")}
              <span className="tw-float-right">
                {formatNumber(freebiePointsStatus.flawsSum)}
              </span>
            </div>

            <div className="tw-my-3 tw-border-b-2 tw-border-gray-600 tw-border-solid" />

            <ul className="">
              {freebiePointsStatus.filledFreebiePoint.map((el) => (
                <li key={el.name}>
                  <span>
                    {
                      t(`freebiePoints.${el.name}`, {
                        cost: el.multiplier,
                      }) as string
                    }
                  </span>
                  <span className="tw-float-right">
                    {formatNumber(el.multiplier * el.diff)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="tw-my-3 tw-border-b-2 tw-border-gray-600 tw-border-solid" />

            <div>
              {t("freebiePoints.sum")}
              <span className="tw-float-right">
                {formatNumber(
                  R.sum(
                    freebiePointsStatus.filledFreebiePoint.map(
                      (el) => el.diff * el.multiplier,
                    ),
                  ) +
                    freebiePointsStatus.freebiePoints -
                    freebiePointsStatus.meritsSum +
                    freebiePointsStatus.flawsSum,
                )}
              </span>
            </div>
          </div>
          <div className="tw-flex tw-justify-around">
            <Button
              className="custom-btn-bg-color tw-w-32 tw-flex-0"
              onClick={() => {
                setCharSheet(prevCharSheet);
                setPrevCharSheet(undefined);
              }}
            >
              {t("common.cancel")}
            </Button>
            <Button
              className="custom-btn-bg-color tw-w-32 tw-flex-0"
              onClick={() => setPrevCharSheet(undefined)}
            >
              {t("common.confirm")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
