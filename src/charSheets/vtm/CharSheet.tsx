import React from "react";
import { useTranslation } from "react-i18next";

import { useLimits } from "../../charSheets/root/services/storageAdapter";
import {
  useOtherTraits,
  useCharHistory,
  useAlliesAndContacts,
  usePossessions,
  useAppearance,
  useNotes,
} from "../generic/services/storageAdapter";
import { CharSheetBody, SectionHeader } from "../generic/uiPrimitives";
import {
  AlliesAndContactsSection,
  AppearanceDescriptionSection,
  CharacterImageSection,
  CharHistorySection,
  CharSheetStarter,
  GoalsSection,
  NotesSection,
  OtherTraitsSection,
  PossessionsSection,
} from "../generic/uiSections";

import { useDropdownOptions } from "./dropdownContent";
import { useDisciplinePaths, useRituals } from "./services/storageAdapter";
import { AdvantagesSection } from "./uiSections/AdvantagesSection";
import { DisciplinePathsSection } from "./uiSections/DisciplinePathsSection";
import { RitualsSection } from "./uiSections/RitualsSection";
import { StatusSection } from "./uiSections/StatusSection";

interface CharSheetProps {}

export function CharSheet(props: CharSheetProps): JSX.Element {
  const { t } = useTranslation();

  const otherTraitsService = useOtherTraits();
  const historyService = useCharHistory();
  const disciplinePathsService = useDisciplinePaths();
  const { limits } = useLimits();
  const alliesAndContactsService = useAlliesAndContacts();
  const possessionsService = usePossessions();
  const appearanceService = useAppearance();
  const notesService = useNotes();

  const ritualsService = useRituals();

  const {
    ritualOptions,
    ritualValueOptions,
    disciplinePathOptions,
    backgroundOptions,
    disciplineOptions,
  } = useDropdownOptions();

  return (
    <>
      <CharSheetBody>
        <CharSheetStarter />
        <SectionHeader className="tw-mb-3">
          {t("charsheet.advantages.header")}
        </SectionHeader>
        <AdvantagesSection
          className="tw-mb-3"
          backgroundOptions={backgroundOptions}
          disciplineOptions={disciplineOptions}
        />
        <SectionHeader className="tw-mb-3">
          {t("charsheet.status.header")}
        </SectionHeader>
        <StatusSection className="tw-mb-3" />
      </CharSheetBody>
      <CharSheetBody>
        <div className="tw-flex tw-gap-x-4 tw-mb-6">
          <div className="tw-flex-1">
            <SectionHeader className="tw-mb-3">
              {t("charsheet.advantages.otherTraits")}
            </SectionHeader>
            <OtherTraitsSection limits={limits} {...otherTraitsService} />
          </div>

          <div className="tw-flex-1" style={{ flexGrow: 2 }}>
            <SectionHeader className="tw-mb-3">
              {t("charsheet.charHistory")}
            </SectionHeader>
            <CharHistorySection className="tw-mb-6" {...historyService} />

            <SectionHeader className="tw-mb-3">
              {t("charsheet.goals")}
            </SectionHeader>
            <GoalsSection className="tw-mb-6" {...historyService} />
          </div>
        </div>

        <div className="tw-flex tw-gap-x-4 tw-mb-6">
          <div className="tw-flex-1">
            <SectionHeader className="tw-mb-3">
              {t("charsheet.advantages.rituals")}
            </SectionHeader>
            <RitualsSection
              ritualOptions={ritualOptions}
              ritualValueOptions={ritualValueOptions}
              {...ritualsService}
            />
          </div>

          <div className="tw-flex-1">
            <SectionHeader className="tw-mb-3">
              {t("charsheet.advantages.discipline-paths")}
            </SectionHeader>
            <DisciplinePathsSection
              limits={limits}
              disciplinePathOptions={disciplinePathOptions}
              {...disciplinePathsService}
            />
          </div>
        </div>

        <div className="tw-flex tw-gap-x-4 tw-mb-6">
          <div className="tw-flex-1">
            <SectionHeader className="tw-mb-3">
              {t("charsheet.alliesAndContacts")}
            </SectionHeader>
            <AlliesAndContactsSection {...alliesAndContactsService} />
          </div>

          <div className="tw-flex-1">
            <SectionHeader className="tw-mb-3">
              {t("charsheet.possessions")}
            </SectionHeader>
            <PossessionsSection {...possessionsService} />
          </div>
        </div>
      </CharSheetBody>
      <CharSheetBody>
        <SectionHeader className="tw-mb-3">
          {t("charsheet.appearanceDescription")}
        </SectionHeader>
        <div className="tw-flex tw-gap-x-4 tw-mb-6">
          <div className="tw-flex-1">
            <CharacterImageSection {...appearanceService} />
          </div>

          <div className="tw-flex-1" style={{ flexGrow: 2 }}>
            <AppearanceDescriptionSection {...appearanceService} />
          </div>
        </div>

        <SectionHeader className="tw-mb-3">
          {t("charsheet.notes")}
        </SectionHeader>
        <NotesSection {...notesService} />
      </CharSheetBody>
    </>
  );
}
