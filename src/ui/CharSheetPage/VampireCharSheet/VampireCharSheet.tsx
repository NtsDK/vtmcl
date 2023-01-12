import React from 'react';

import { useTranslation } from 'react-i18next';
import { CharHistorySection } from '../commonBlocks/CharHistorySection';
import { GoalsSection } from '../commonBlocks/GoalsSection';

import { NotesSection } from '../commonBlocks/NotesSection';
import { CommonPageStart } from '../CommonPageStart';
import { CharSheetBody } from '../primitives/CharSheetBody';
import { SectionHeader } from '../primitives/SectionHeader';
import { Subheader } from '../primitives/Subheader';
import { AdvantagesSection } from '../vampireBlocks/AdvantagesSection';
import { DisciplinePathsSection } from '../vampireBlocks/DisciplinePathsSection';
import { RitualsSection } from '../vampireBlocks/RitualsSection';
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

        <div className="tw-flex tw-gap-x-4 tw-mb-6">
          <div className="tw-flex-1">
            <Subheader className="tw-mb-3">
              {t('charsheet.advantages.rituals')}
            </Subheader>
            <RitualsSection/>
          </div>

          <div className="tw-flex-1">
            <Subheader className="tw-mb-3">
              {t('charsheet.advantages.discipline-paths')}
            </Subheader>
            <DisciplinePathsSection/>
          </div>
        </div>

        <SectionHeader className="tw-mb-3">
          {t('charsheet.notes')}
        </SectionHeader>
        <NotesSection/>
      </CharSheetBody>
    </>
  );
}
