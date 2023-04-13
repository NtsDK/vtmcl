import React, { useMemo, useState } from "react";
import * as R from "ramda";
import classnames from "classnames";
import {
  useCharSheetStorage,
  usePreset,
} from "../../../../../services/storageAdapter";
import {
  AbilitiesConfig,
  AttributesConfig,
  CharSheet,
  PresetSettings,
} from "../../../../../domain";
import Button from "react-bootstrap/Button";
import { usePresetSettings } from "../../../../../i18nResources";
import { useTranslation } from "react-i18next";

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

function willpowerRating(charSheet: CharSheet): number {
  return charSheet.state.willpowerRating;
}
function humanity(charSheet: CharSheet): number {
  return charSheet.state.humanity;
}
function sumVirtues(charSheet: CharSheet): number {
  return R.sum(R.values(charSheet.virtues));
}
function sumBackgrounds(charSheet: CharSheet): number {
  return R.sum(R.pluck("value", charSheet.backgrounds));
}
function sumDisciplines(charSheet: CharSheet): number {
  return R.sum(R.pluck("value", charSheet.disciplines));
}

function sumAbilities(
  abilitiesConfig: AbilitiesConfig
): (charSheet: CharSheet) => number {
  return function (charSheet: CharSheet): number {
    const mainSum = R.sum(
      R.flatten(
        abilitiesConfig.map((el) => R.props(el.items, charSheet.abilities))
      )
    );
    const { abilitiesExtension } = charSheet;
    const extraSum =
      abilitiesExtension.knowledgeValue1 +
      abilitiesExtension.knowledgeValue2 +
      abilitiesExtension.skillValue1 +
      abilitiesExtension.skillValue2 +
      abilitiesExtension.talentValue1 +
      abilitiesExtension.talentValue2;
    return mainSum + extraSum;
  };
}
function sumAttributes(
  attributesConfig: AttributesConfig
): (charSheet: CharSheet) => number {
  return function (charSheet: CharSheet): number {
    return R.sum(
      R.flatten(
        attributesConfig.map((el) => R.props(el.items, charSheet.attributes))
      )
    );
  };
}

type FreePointItem = {
  name: string;
  extractor: (charSheet: CharSheet) => number;
  multiplier: number;
};

type FilledFreePointItem = {
  name: string;
  multiplier: number;
  diff: number;
};

type FreePointStats = {
  freePoints: number;
  meritsSum: number;
  flawsSum: number;
  filledFreePoint: FilledFreePointItem[];
};

function getFreePointConfig(presetSettings: PresetSettings): FreePointItem[] {
  const { abilitiesConfig, attributesConfig } = presetSettings;

  return [
    {
      name: "attribute",
      extractor: sumAttributes(attributesConfig),
      multiplier: 5,
    },
    {
      name: "ability",
      extractor: sumAbilities(abilitiesConfig),
      multiplier: 2,
    },
    {
      name: "discipline",
      extractor: sumDisciplines,
      multiplier: 7,
    },
    {
      name: "background",
      extractor: sumBackgrounds,
      multiplier: 1,
    },
    {
      name: "virtue",
      extractor: sumVirtues,
      multiplier: 2,
    },
    {
      name: "humanity",
      extractor: humanity,
      multiplier: 2,
    },
    {
      name: "willpower",
      extractor: willpowerRating,
      multiplier: 1,
    },
  ];
}

function strToNumber(str: string): number {
  const str2 = str.replace(/\D/g, "");
  return str2 === "" ? 0 : Number(str2);
}

function formatNumber(num: number): string {
  return num === 0 ? "0" : num > 0 ? `+${num}` : String(num);
}

// 5 - Attribute
// 2 - Ability
// 7 - Discipline
// 1 - Background
// 2 - Virtue
// 2 - Humanity/Path
// 1 - Willpower

export function VampireFreePoints(props: VampireFreePointsProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { getCharSheet, setCharSheet } = useCharSheetStorage();
  const presetSettings = usePresetSettings();

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

    const config = getFreePointConfig(presetSettings);
    const arr: FilledFreePointItem[] = config.map((el) => ({
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
  }, [prevCharSheet, presetSettings, getCharSheet]);

  return (
    <div
      className={classnames(
        "VampireFreePoints tw-max-w-sm tw-mx-5 tw-my-3",
        className
      )}
    >
      <Button
        className="custom-btn-bg-color tw-mx-auto tw-block disabled:tw-cursor-not-allowed tw-mb-4"
        onClick={() => setPrevCharSheet(getCharSheet())}
        disabled={prevCharSheet !== undefined}
      >
        Начать распределение свободных очков
      </Button>
      {prevCharSheet && (
        <div>
          <p className="tw-mb-4">{t("freePoints.description")}</p>
          <div className="tw-w-52 tw-mx-auto tw-mb-4">
            <div>
              Свободные очки{" "}
              <span className="tw-float-right">
                {formatNumber(freePointsStatus.freePoints)}
              </span>
            </div>
            <div>
              Достоинства{" "}
              <span className="tw-float-right">
                {formatNumber(-freePointsStatus.meritsSum)}
              </span>
            </div>
            <div>
              Недостатки{" "}
              <span className="tw-float-right">
                {formatNumber(freePointsStatus.flawsSum)}
              </span>
            </div>

            <div className="tw-my-3 tw-border-b-2 tw-border-gray-600 tw-border-solid" />

            <ul className="">
              {freePointsStatus.filledFreePoint.map((el) => (
                <li key={el.name}>
                  {el.name} ({el.multiplier}){" "}
                  <span className="tw-float-right">
                    {formatNumber(el.multiplier * el.diff)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="tw-my-3 tw-border-b-2 tw-border-gray-600 tw-border-solid" />

            <div>
              Сумма{" "}
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
              Отменить
            </Button>
            <Button
              className="custom-btn-bg-color tw-w-32 tw-flex-0"
              onClick={() => setPrevCharSheet(undefined)}
            >
              Подтвердить
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
