import React from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { useLimits } from "../../../../charSheets/root/services/storageAdapter";
import {
  ExperienceSection,
  FlawsSection,
  HealthSection,
  MeritsSection,
  WillSection,
} from "../../../generic/uiSections";
import { Subheader } from "../../../generic/uiPrimitives";
import { useDropdownOptions } from "../../dropdownContent";
import {
  useMeritsNFlaws,
  useStatus,
  useHealth,
} from "../../../generic/services/storageAdapter";

import { HumanitySection } from "./HumanitySection";
import { BloodpoolSection } from "./BloodpoolSection";
import { WeaknessSection } from "./WeaknessSection";

interface StatusSectionProps {
  className?: string;
}

export function StatusSection(props: StatusSectionProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const meritsNFlawsService = useMeritsNFlaws();
  const { meritOptions, flawOptions, pathOptions } = useDropdownOptions();
  const statusService = useStatus();
  const healthService = useHealth();
  const { limits } = useLimits();

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
        <Subheader id="humanity.header" className="tw-mb-2">
          {t("charsheet.status.humanityOrPath")}
        </Subheader>
        <HumanitySection
          className="tw-mb-4 print:tw-mb-2"
          pathOptions={pathOptions}
          {...statusService}
        />

        <Subheader className="tw-mb-2 tw-mt-2">
          {t("charsheet.status.willpower")}
        </Subheader>
        <WillSection className="tw-mb-4 print:tw-mb-2" {...statusService} />

        <Subheader id="bloodpool.header" className="tw-mb-2 tw-mt-2">
          {t("charsheet.status.bloodpool")}
        </Subheader>
        <BloodpoolSection {...statusService} limits={limits} />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">
          {t("charsheet.status.health")}
        </Subheader>
        <HealthSection className="tw-mb-6 print:tw-mb-2" {...healthService} />

        <Subheader className="tw-mb-2">
          {t("charsheet.status.weakness")}
        </Subheader>
        <WeaknessSection className="tw-mb-6 print:tw-mb-2" {...statusService} />

        <Subheader className="tw-mb-2">
          {t("charsheet.status.experience")}
        </Subheader>
        <ExperienceSection {...statusService} />
      </div>
    </div>
  );
}
