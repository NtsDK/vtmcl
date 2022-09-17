import React from 'react';
import { useTranslation } from 'react-i18next';
import { AdvantagesSection } from '../changelingBlocks/AdvantagesSection';
import { NotesSection } from '../commonBlocks/NotesSection';
import { CommonPageStart } from '../CommonPageStart';
import { CharSheetBody } from '../primitives/CharSheetBody';
import { SectionHeader } from '../primitives/SectionHeader';

import './ChangelingCharSheet.css';

interface ChangelingCharSheetProps {
}

export function ChangelingCharSheet(props: ChangelingCharSheetProps) {
  const { t } = useTranslation();

  return (
    <>
      <CharSheetBody>
        <CommonPageStart />
        <SectionHeader className="tw-mb-3">
          {t('charsheet.advantages.header')}
        </SectionHeader>
        <AdvantagesSection className="tw-mb-3"/>
        {/* <SectionHeader className="tw-mb-3">
          {t('charsheet.status.header')}
        </SectionHeader>
        <StatusSection className="tw-mb-3"/> */}
      </CharSheetBody>
      <CharSheetBody>
        <SectionHeader className="tw-mb-3">
          {t('charsheet.notes')}
        </SectionHeader>
        <NotesSection />
      </CharSheetBody>
    </>
  );
}
