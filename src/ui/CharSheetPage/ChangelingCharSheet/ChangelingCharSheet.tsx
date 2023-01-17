import React from 'react';
import { useTranslation } from 'react-i18next';
import { AdvantagesSection } from '../changelingBlocks/AdvantagesSection';
import { StatusSection } from '../changelingBlocks/StatusSection';
import { AlliesAndContactsSection } from '../commonBlocks/AlliesAndContactsSection';
import { AppearanceDescriptionSection } from '../commonBlocks/AppearanceDescriptionSection';
import { CharacterImageSection } from '../commonBlocks/CharacterImageSection';
import { CharHistorySection } from '../commonBlocks/CharHistorySection';
import { FlawsSection } from '../commonBlocks/FlawsSection';
import { GoalsSection } from '../commonBlocks/GoalsSection';
import { MeritsSection } from '../commonBlocks/MeritsSection';
import { NotesSection } from '../commonBlocks/NotesSection';
import { OtherTraitsSection } from '../commonBlocks/OtherTraitsSection';
import { PossessionsSection } from '../commonBlocks/PossessionsSection';
import { CommonPageStart } from '../CommonPageStart';
import { CharSheetBody } from '../primitives/CharSheetBody';
import { SectionHeader } from '../primitives/SectionHeader';
import { Subheader } from '../primitives/Subheader';

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
        <SectionHeader className="tw-mb-3">
          {t('charsheet.status.header')}
        </SectionHeader>
        <StatusSection className="tw-mb-3"/>
      </CharSheetBody>
      <CharSheetBody>
        <div className="tw-flex tw-flex-row tw-gap-x-4">
          <div className='tw-flex-1'>
            <Subheader className="tw-mb-2">
              {t('charsheet.status.merits')}
            </Subheader>
            <MeritsSection className="tw-mb-4"/>
          </div>

          <div className='tw-flex-1'>
            <Subheader className="tw-mb-2">
              {t('charsheet.status.flaws')}
            </Subheader>
            <FlawsSection/>
          </div>
        </div>

        <div className="tw-flex tw-gap-x-4 tw-mb-6">
          <div className="tw-flex-1">
            <SectionHeader className="tw-mb-3">
              {t('charsheet.advantages.otherTraits')}
            </SectionHeader>
            <OtherTraitsSection/>
          </div>

          <div className="tw-flex-1" style={{flexGrow: 2}}>
            <SectionHeader className="tw-mb-3">
              {t('charsheet.charHistory')}
            </SectionHeader>
            <CharHistorySection className="tw-mb-6"/>

            <SectionHeader className="tw-mb-3">
              {t('charsheet.goals')}
            </SectionHeader>
            <GoalsSection className="tw-mb-6"/>
          </div>
        </div>

        <div className="tw-flex tw-gap-x-4 tw-mb-6">
          <div className="tw-flex-1">
            <SectionHeader className="tw-mb-3">
              {t('charsheet.alliesAndContacts')}
            </SectionHeader>
            <AlliesAndContactsSection/>
          </div>

          <div className="tw-flex-1">
            <SectionHeader className="tw-mb-3">
              {t('charsheet.possessions')}
            </SectionHeader>
            <PossessionsSection/>
          </div>
        </div>
      </CharSheetBody>
      <CharSheetBody>
        <SectionHeader className="tw-mb-3">
          {t('charsheet.appearanceDescription')}
        </SectionHeader>
        <div className="tw-flex tw-gap-x-4 tw-mb-6">
          <div className="tw-flex-1">
            <CharacterImageSection/>
          </div>

          <div className="tw-flex-1" style={{flexGrow: 2}}>
            <AppearanceDescriptionSection/>
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
