import React from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import {
  ExperienceSection,
  WillSection,
  HealthSection,
  MeritsSection,
  FlawsSection,
} from "../../../generic/uiSections";
import { Subheader } from "../../../generic/uiPrimitives";
import {
  useHealth,
  useMeritsNFlaws,
  useStatus,
} from "../../../generic/services/storageAdapter";
import { useDropdownOptions } from "../../dropdownContent";

import { HumanitySection } from "./HumanitySection";
import { FaithSection } from "./FaithSection";

interface StatusSectionProps {
  className?: string;
}

export function StatusSection(props: StatusSectionProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const statusService = useStatus();
  const healthService = useHealth();
  const meritsNFlawsService = useMeritsNFlaws();

  const { meritOptions, flawOptions } = useDropdownOptions();

  return (
    <div className={classnames("StatusSection tw-flex tw-gap-x-4", className)}>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">
          {t("charsheet.status.merits")}
        </Subheader>
        <MeritsSection
          className="tw-mb-4"
          {...meritsNFlawsService}
          meritOptions={meritOptions}
        />

        <Subheader className="tw-mb-2">{t("charsheet.status.flaws")}</Subheader>
        <FlawsSection {...meritsNFlawsService} flawOptions={flawOptions} />
      </div>
      <div className="tw-flex-1">
        <Subheader id="faith.header" className="tw-mb-2">
          {t("charsheet.status.faith")}
        </Subheader>
        <FaithSection className="tw-mb-4 print:tw-mb-2" {...statusService} />

        <Subheader id="humanity.header" className="tw-mb-2">
          {t("charsheet.status.humanity")}
        </Subheader>
        <HumanitySection className="tw-mb-4 print:tw-mb-2" {...statusService} />

        <Subheader className="tw-mb-2 tw-mt-2">
          {t("charsheet.status.willpower")}
        </Subheader>
        <WillSection className="tw-mb-4 print:tw-mb-2" {...statusService} />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">
          {t("charsheet.status.health")}
        </Subheader>
        <HealthSection className="tw-mb-6 print:tw-mb-2" {...healthService} />

        <Subheader className="tw-mb-2">
          {t("charsheet.status.experience")}
        </Subheader>
        <ExperienceSection {...statusService} />
      </div>
    </div>
  );
}
