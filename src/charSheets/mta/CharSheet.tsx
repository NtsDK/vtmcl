import React from "react";
import { useTranslation } from "react-i18next";

import {
  useAlliesAndContacts,
  useAppearance,
  useCharHistory,
  useMeritsNFlaws,
  useNotes,
  useOtherTraits,
  usePossessions,
} from "../generic/services/storageAdapter";
import {
  CharSheetBody,
  SectionHeader,
  Subheader,
} from "../generic/uiPrimitives";
import {
  OtherTraitsSection,
  CharHistorySection,
  GoalsSection,
  AlliesAndContactsSection,
  PossessionsSection,
  CharacterImageSection,
  AppearanceDescriptionSection,
  NotesSection,
  CharSheetStarter,
  MeritsSection,
  FlawsSection,
} from "../generic/uiSections";
import { useLimits } from "../root/services/storageAdapter";

import { SpheresSections } from "./uiSections/SpheresSection";
import { useSpheres } from "./services/storageAdapter";
import { AdvantagesSection } from "./uiSections/AdvantagesSection";
// import { StatusSection } from "./uiSections/StatusSection";

interface CharSheetProps {}

export function CharSheet(props: CharSheetProps): JSX.Element {
  const { t } = useTranslation();

  const { limits } = useLimits();

  const otherTraitsService = useOtherTraits();
  const historyService = useCharHistory();
  const alliesAndContactsService = useAlliesAndContacts();
  const possessionsService = usePossessions();
  const appearanceService = useAppearance();
  const notesService = useNotes();
  const spheresService = useSpheres();
  const meritsNFlawsService = useMeritsNFlaws();

  return (
    <>
      <CharSheetBody>
        <CharSheetStarter />
        <SectionHeader className="tw-mb-3">
          {t("charsheet.advantages.spheres")}
        </SectionHeader>
        <SpheresSections className="tw-mb-3" {...spheresService} />
        <SectionHeader className="tw-mb-3">
          {t("charsheet.advantages.header")}
        </SectionHeader>
        <AdvantagesSection className="tw-mb-3" />
      </CharSheetBody>
      <CharSheetBody>
        <div className="tw-flex tw-gap-x-4 tw-mb-6">
          <div className="tw-flex-1">
            <Subheader className="tw-mb-2">
              {t("charsheet.status.merits")}
            </Subheader>
            <MeritsSection
              className="tw-mb-4"
              {...meritsNFlawsService}
              // meritOptions={meritOptions}
            />
            <Subheader className="tw-mb-2">
              {t("charsheet.status.flaws")}
            </Subheader>
            <FlawsSection {...meritsNFlawsService}
            // flawOptions={flawOptions}
            />
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
