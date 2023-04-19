import React from "react";

import { useTranslation } from "react-i18next";
import { useResource } from "../../i18nResources";
import {
  useAlliesAndContacts,
  useAppearance,
  useCharHistory,
  useDisciplinePaths,
  useLimits,
  useNotes,
  useOtherTraits,
  usePossessions,
  useRituals,
} from "../../services/storageAdapter";
import {
  AlliesAndContactsSection,
  AppearanceDescriptionSection,
  CharacterImageSection,
  CharHistorySection,
  CharSheetBody,
  CharSheetStarter,
  GoalsSection,
  NotesSection,
  OtherTraitsSection,
  PossessionsSection,
  SectionHeader,
} from "../commons";

import { AdvantagesSection } from "./sections/AdvantagesSection";
import { DisciplinePathsSection } from "./sections/DisciplinePathsSection";
import { RitualsSection } from "./sections/RitualsSection";
import { StatusSection } from "./sections/StatusSection";

interface VtMCharSheetProps {}

export function VtMCharSheet(props: VtMCharSheetProps) {
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

  const { ritualOptions, ritualValueOptions, disciplinePathOptions } =
    useResource();

  return (
    <>
      <CharSheetBody>
        <CharSheetStarter />
        <SectionHeader className="tw-mb-3">
          {t("charsheet.advantages.header")}
        </SectionHeader>
        <AdvantagesSection className="tw-mb-3" />
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
