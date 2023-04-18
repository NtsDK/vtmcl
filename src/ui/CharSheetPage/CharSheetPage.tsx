import React from "react";
import { CtDCharSheet, VtMCharSheet } from "../../charSheets";
import { Preset } from "../../domain";
import { usePreset } from "../../services/storageAdapter";

import "./CharSheetPage.css";
import { GameUtilsPanel } from "./GameUtilsPanel";

interface CharSheetPageProps {}

export function CharSheetPage(props: CharSheetPageProps) {
  const { preset } = usePreset();

  return (
    <main className="CharSheetPage tw-flex">
      <div className="tw-mx-auto tw-my-0 print:tw-m-0">
        {getCharSheet(preset)({})}
      </div>
      <GameUtilsPanel />
    </main>
  );
}

function getCharSheet(preset: Preset): (props: {}) => JSX.Element {
  switch (preset) {
    case "vampire_v20":
      return VtMCharSheet;
    case "changeling_v20":
      return CtDCharSheet;
  }
}
