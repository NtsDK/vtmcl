import React from 'react';

import { CharSheetBody } from './CharSheetBody';
import './CharSheetPage.css';
import { GameUtilsPanel } from './GameUtilsPanel';

interface CharSheetPageProps {
}

export function CharSheetPage(props: CharSheetPageProps) {
  return (
    <main className="CharSheetPage tw-flex">
      <CharSheetBody />
      <GameUtilsPanel />
    </main>
  );
}



