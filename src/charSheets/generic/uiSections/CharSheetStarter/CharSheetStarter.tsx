import React, { useMemo } from "react";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

import { CURRENT_VERSION } from "../../../../constants";
import {
  useLimits,
  usePreset,
} from "../../../../charSheets/root/services/storageAdapter";
import { AbilitiesSection } from "../AbilitiesSection";
import { AttributeSection } from "../AttributeSection";
import { PresetSelect } from "../PresetSelect";
import { ProfileSection } from "../ProfileSection";
import { SectionHeader } from "../../uiPrimitives/SectionHeader";
import { useInternalPresetProps } from "../../..";
import {
  useAbilities,
  useAbilitiesExtension,
  useAttributes,
  useProfile,
} from "../../services/storageAdapter";

interface CharSheetStarterProps {}

export function CharSheetStarter(props: CharSheetStarterProps): JSX.Element {
  const { t } = useTranslation();

  const profileService = useProfile();
  const presetSettings = useInternalPresetProps();
  const presetService = usePreset();

  const title = useMemo(() => {
    if (profileService.profile.name.trim() === "") {
      return t("about.charsheetWithoutName", {
        type: presetSettings.displayName,
        version: CURRENT_VERSION,
      });
    }
    return t("about.charsheetWithName", {
      characterName: profileService.profile.name,
      type: presetSettings.displayName,
      version: CURRENT_VERSION,
    });
  }, [t, profileService.profile, presetSettings.displayName]);

  const abilitiesService = useAbilities();
  const attributesService = useAttributes();
  const { limits } = useLimits();
  const abilitiesExtensionService = useAbilitiesExtension();

  return (
    <>
      <DocumentTitle title={title}>
        <h1 className="tw-sr-only">{title}</h1>
      </DocumentTitle>
      <PresetSelect
        className="tw-absolute tw-top-0 tw-right-0"
        {...presetService}
      />
      <SectionHeader className="tw-mb-3 tw-sr-only">
        {t("charsheet.profile.header")}
      </SectionHeader>
      <ProfileSection
        {...profileService}
        dropdownOptions={presetSettings.dropdownOptions}
        profileConfig={presetSettings.profileConfig}
        className="tw-mb-3 tw-mt-4"
      />
      <SectionHeader className="tw-mb-3">
        {t("charsheet.attributes.header")}
      </SectionHeader>
      <AttributeSection
        className="tw-mb-3"
        {...attributesService}
        attributesConfig={presetSettings.attributesConfig}
        limits={limits}
      />
      <SectionHeader className="tw-mb-3">
        {t("charsheet.abilities.header")}
      </SectionHeader>
      <AbilitiesSection
        className="tw-mb-3"
        {...abilitiesService}
        {...abilitiesExtensionService}
        abilitiesConfig={presetSettings.abilitiesConfig}
        limits={limits}
      />
    </>
  );
}
