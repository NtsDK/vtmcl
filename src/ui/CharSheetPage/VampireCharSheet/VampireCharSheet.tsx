import React from 'react';

import { useTranslation } from 'react-i18next';

import { NotesSection } from '../commonBlocks/NotesSection';
import { CommonPageStart } from '../CommonPageStart';
import { CharSheetBody } from '../primitives/CharSheetBody';
import { SectionHeader } from '../primitives/SectionHeader';
import { AdvantagesSection } from '../vampireBlocks/AdvantagesSection';
import { StatusSection } from '../vampireBlocks/StatusSection';

import './VampireCharSheet.css';

interface VampireCharSheetProps {
}

export function VampireCharSheet(props: VampireCharSheetProps) {
  const { t } = useTranslation();

  return (
    <>
      <CharSheetBody>
        <CommonPageStart />
        <SectionHeader className="tw-mb-3">
          {t('charsheet.advantages.header')}
        </SectionHeader>
        <AdvantagesSection className="tw-mb-3"/>
        <SectionHeader className="tw-mb-3">
          {t('charsheet.status.header')}
        </SectionHeader>
        <StatusSection className="tw-mb-3"/>
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
