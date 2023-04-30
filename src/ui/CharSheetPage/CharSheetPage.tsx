import React from "react";

import {
  useExternalPresetProps,
  useTranslateDropdownOptions,
} from "../../charSheets";

import { GameUtilsPanel } from "./GameUtilsPanel";

interface CharSheetPageProps {}

export function CharSheetPage(props: CharSheetPageProps): JSX.Element {
  const { CharSheet } = useExternalPresetProps();

  useTranslateDropdownOptions();

  return (
    <main className="CharSheetPage tw-flex">
      <div className="tw-mx-auto tw-my-0 print:tw-m-0">
        <CharSheet />
      </div>
      <GameUtilsPanel />
    </main>
  );
}
