import React from 'react';

import './CharSheetPage.css';
import { GameUtilsPanel } from './GameUtilsPanel';
import { VampireCharSheet } from './VampireCharSheet';

interface CharSheetPageProps {
}

export function CharSheetPage(props: CharSheetPageProps) {

  return (
    <main className="CharSheetPage tw-flex">
      <div className='tw-mx-auto tw-my-0 print:tw-m-0'>
        <VampireCharSheet />
      </div>
      <GameUtilsPanel />
    </main>
  );
}
