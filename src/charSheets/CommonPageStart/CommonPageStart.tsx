import React, { useMemo } from "react";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";
import { CURRENT_VERSION } from "../../constants";
import { usePresetSettings, useResource } from "../../i18nResources";

import {
  useAbilities,
  useAbilitiesExtension,
  useAttributes,
  useLimits,
  usePreset,
  useProfile,
} from "../../services/storageAdapter";
import { AbilitiesSection } from "../commonBlocks/AbilitiesSection";
import { AttributeSection } from "../commonBlocks/AttributeSection";
import { PresetSelect } from "../commonBlocks/PresetSelect";
import { ProfileSection } from "../commonBlocks/ProfileSection";
import { SectionHeader } from "../primitives/SectionHeader";

import "./CommonPageStart.css";

interface CommonPageStartProps {}

export function CommonPageStart(props: CommonPageStartProps) {
  const { t } = useTranslation();

  const profileService = useProfile();
  const { getPresetDisplayName } = usePreset();

  const title = useMemo(() => {
    if (profileService.profile.name.trim() === "") {
      return t("about.charsheetWithoutName", {
        type: getPresetDisplayName(),
        version: CURRENT_VERSION,
      });
    }
    return t("about.charsheetWithName", {
      characterName: profileService.profile.name,
      type: getPresetDisplayName(),
      version: CURRENT_VERSION,
    });
  }, [t, profileService.profile, getPresetDisplayName]);

  const abilitiesService = useAbilities();
  const attributesService = useAttributes();
  const { limits } = useLimits();
  const abilitiesExtensionService = useAbilitiesExtension();
  const presetSettings = usePresetSettings();
  const resources = useResource();
  const presetService = usePreset();

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
        resources={resources}
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
