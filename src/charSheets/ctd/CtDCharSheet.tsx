import React from "react";
import { useTranslation } from "react-i18next";
import { useResource } from "../../i18nResources";
import {
  useAlliesAndContacts,
  useAppearance,
  useCharHistory,
  useLimits,
  useMeritsNFlaws,
  useNotes,
  useOtherTraits,
  usePossessions,
} from "../../services/storageAdapter";
import {
  CharSheetBody,
  SectionHeader,
  Subheader,
  MeritsSection,
  FlawsSection,
  OtherTraitsSection,
  CharHistorySection,
  GoalsSection,
  AlliesAndContactsSection,
  PossessionsSection,
  CharacterImageSection,
  AppearanceDescriptionSection,
  NotesSection,
  CharSheetStarter,
} from "../commons";
import { AdvantagesSection } from "./sections/AdvantagesSection";
import { StatusSection } from "./sections/StatusSection";

interface CtDCharSheetProps {}

export function CtDCharSheet(props: CtDCharSheetProps) {
  const { t } = useTranslation();

  const meritsNFlawsService = useMeritsNFlaws();
  const { meritOptions, flawOptions } = useResource();
  const { limits } = useLimits();

  const otherTraitsService = useOtherTraits();
  const historyService = useCharHistory();
  const alliesAndContactsService = useAlliesAndContacts();
  const possessionsService = usePossessions();
  const appearanceService = useAppearance();
  const notesService = useNotes();

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
        <div className="tw-flex tw-flex-row tw-gap-x-4">
          <div className="tw-flex-1">
            <Subheader className="tw-mb-2">
              {t("charsheet.status.merits")}
            </Subheader>
            <MeritsSection
              className="tw-mb-4"
              {...meritsNFlawsService}
              meritOptions={meritOptions}
            />
          </div>

          <div className="tw-flex-1">
            <Subheader className="tw-mb-2">
              {t("charsheet.status.flaws")}
            </Subheader>
            <FlawsSection {...meritsNFlawsService} flawOptions={flawOptions} />
          </div>
        </div>

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
