import React, { useMemo, useState } from "react";
import classnames from "classnames";
import Button from "react-bootstrap/Button";
import * as R from "ramda";

import { useCharSheetStorage } from "../../../../services/storageAdapter";
import { CharSheet, FreePointItem } from "../../../../domain";
import { useTranslation } from "react-i18next";
import { usePresetSettings } from "../../../../i18nResources";

interface FreePointsPanelProps {
  className?: string;
}

type FilledFreePointItem = {
  name: FreePointItem["name"];
  multiplier: number;
  diff: number;
};

type FreePointStats = {
  freePoints: number;
  meritsSum: number;
  flawsSum: number;
  filledFreePoint: FilledFreePointItem[];
};

function strToNumber(str: string): number {
  const str2 = str.replace(/\D/g, "");
  return str2 === "" ? 0 : Number(str2);
}

function formatNumber(num: number): string {
  return num === 0 ? "0" : num > 0 ? `+${num}` : String(num);
}

export function FreePointsPanel(props: FreePointsPanelProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { getCharSheet, setCharSheet } = useCharSheetStorage();
  const { freePointsConfig } = usePresetSettings();

  const [prevCharSheet, setPrevCharSheet] = useState<CharSheet | undefined>(
    undefined
  );

  const freePointsStatus = useMemo<FreePointStats>(() => {
    if (prevCharSheet === undefined) {
      return {
        freePoints: 15,
        flawsSum: 0,
        meritsSum: 0,
        filledFreePoint: [],
      };
    }
    const charSheet = getCharSheet();

    const arr: FilledFreePointItem[] = freePointsConfig.map((el) => ({
      name: el.name,
      multiplier: el.multiplier,
      diff: el.extractor(prevCharSheet) - el.extractor(charSheet),
    }));

    return {
      freePoints: 15,
      flawsSum: R.sum(charSheet.flaws.map(strToNumber)),
      meritsSum: R.sum(charSheet.merits.map(strToNumber)),
      filledFreePoint: arr,
    };
  }, [prevCharSheet, freePointsConfig, getCharSheet]);

  return (
    <div
      className={classnames(
        "FreePointsPanel tw-max-w-sm tw-mx-5 tw-my-3",
        className
      )}
    >
      <Button
        className="custom-btn-bg-color tw-mx-auto tw-block disabled:tw-cursor-not-allowed tw-mb-4"
        onClick={() => setPrevCharSheet(getCharSheet())}
        disabled={prevCharSheet !== undefined}
      >
        {t("freePoints.beginFreePointAssignment")}
      </Button>
      {prevCharSheet && (
        <div>
          <p className="tw-mb-4">{t("freePoints.description")}</p>
          <div className="tw-w-52 tw-mx-auto tw-mb-4">
            <div>
              {t("freePoints.freePoints")}
              <span className="tw-float-right">
                {formatNumber(freePointsStatus.freePoints)}
              </span>
            </div>
            <div>
              {t("freePoints.merits")}
              <span className="tw-float-right">
                {formatNumber(-freePointsStatus.meritsSum)}
              </span>
            </div>
            <div>
              {t("freePoints.flaws")}
              <span className="tw-float-right">
                {formatNumber(freePointsStatus.flawsSum)}
              </span>
            </div>

            <div className="tw-my-3 tw-border-b-2 tw-border-gray-600 tw-border-solid" />

            <ul className="">
              {freePointsStatus.filledFreePoint.map((el) => (
                <li key={el.name}>
                  <span>
                    {
                      t(`freePoints.${el.name}`, {
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
              {t("freePoints.sum")}
              <span className="tw-float-right">
                {formatNumber(
                  R.sum(
                    freePointsStatus.filledFreePoint.map(
                      (el) => el.diff * el.multiplier
                    )
                  ) +
                    freePointsStatus.freePoints +
                    freePointsStatus.meritsSum -
                    freePointsStatus.flawsSum
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
