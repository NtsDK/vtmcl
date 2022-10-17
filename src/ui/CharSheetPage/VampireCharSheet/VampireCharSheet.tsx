import React from 'react';

import { useTranslation } from 'react-i18next';
import { CharHistorySection } from '../commonBlocks/CharHistorySection';
import { GoalsSection } from '../commonBlocks/GoalsSection';

import { NotesSection } from '../commonBlocks/NotesSection';
import { CommonPageStart } from '../CommonPageStart';
import { CharSheetBody } from '../primitives/CharSheetBody';
import { SectionHeader } from '../primitives/SectionHeader';
import { AdvantagesSection } from '../vampireBlocks/AdvantagesSection';
import { DisciplinePathsSection } from '../vampireBlocks/DisciplinePathsSection';
import { StatusSection } from '../vampireBlocks/StatusSection';

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
          {t('charsheet.charHistory')}
        </SectionHeader>
        <CharHistorySection className="tw-mb-6"/>

        <SectionHeader className="tw-mb-3">
          {t('charsheet.goals')}
        </SectionHeader>
        <GoalsSection className="tw-mb-6"/>

        <SectionHeader className="tw-mb-3">
          {t('charsheet.notes')}
        </SectionHeader>
        <NotesSection/>

        <SectionHeader className="tw-mb-3">
          {t('charsheet.advantages.discipline-paths')}
        </SectionHeader>
        <DisciplinePathsSection/>
      </CharSheetBody>
    </>
  );
}
