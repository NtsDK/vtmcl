import React from "react";

import { usePresetInfo, useCharsheetContentI18n } from "../../charSheets";

import { GameUtilsPanel } from "./GameUtilsPanel";

interface CharSheetPageProps {}

export function CharSheetPage(props: CharSheetPageProps): JSX.Element {
  const { CharSheet } = usePresetInfo();

  useCharsheetContentI18n();

  return (
    <main className="CharSheetPage tw-flex">
      <div className="tw-mx-auto tw-my-0 print:tw-m-0">
        <CharSheet />
      </div>
      <GameUtilsPanel />
    </main>
  );
}
