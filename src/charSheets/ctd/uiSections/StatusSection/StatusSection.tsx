import React from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import {
  ExperienceSection,
  WillSection,
  HealthSection,
} from "../../../generic/uiSections";
import { Subheader } from "../../../generic/uiPrimitives";

import { GlamourSection } from "./GlamourSection";
import { BanalitySection } from "./BanalitySection";
import { NightmareSection } from "./NightmareSection";
import { AntitesisSection } from "./AntitesisSection";
import { BirthrightsFrailtiesSection } from "./BirthrightsFrailtiesSection";
import { ThresholdsSection } from "./ThresholdsSection";
import { useHealth, useStatus } from "../../../generic/services/storageAdapter";

interface StatusSectionProps {
  className?: string;
}

export function StatusSection(props: StatusSectionProps) {
  const { className } = props;
  const { t } = useTranslation();

  const statusService = useStatus();
  const healthService = useHealth();

  return (
    <div className={classnames("StatusSection tw-flex tw-gap-x-4", className)}>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">
          {t("charsheet.status.birthrightsFrailties")}
        </Subheader>
        <BirthrightsFrailtiesSection
          className="tw-mb-4 print:tw-mb-2"
          {...statusService}
        />

        <Subheader className="tw-mb-2">
          {t("charsheet.status.antithesis")}
        </Subheader>
        <AntitesisSection
          className="tw-mb-4 print:tw-mb-2"
          {...statusService}
        />

        <Subheader className="tw-mb-2">
          {t("charsheet.status.experience")}
        </Subheader>
        <ExperienceSection {...statusService} />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 tw-mt-2">
          {t("charsheet.status.glamour")}
        </Subheader>
        <GlamourSection className="tw-mb-4 print:tw-mb-2" {...statusService} />

        <Subheader className="tw-mb-2 tw-mt-2">
          {t("charsheet.status.willpower")}
        </Subheader>
        <WillSection className="tw-mb-4 print:tw-mb-2" {...statusService} />

        <Subheader className="tw-mb-2 tw-mt-2">
          {t("charsheet.status.nightmare")}
        </Subheader>
        <NightmareSection
          className="tw-mb-4 print:tw-mb-2"
          {...statusService}
        />

        <Subheader className="tw-mb-2 tw-mt-2">
          {t("charsheet.status.banality")}
        </Subheader>
        <BanalitySection {...statusService} />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2">
          {t("charsheet.status.health")}
        </Subheader>
        <HealthSection
          variant="changeling"
          className="tw-mb-6 print:tw-mb-2"
          {...healthService}
        />

        <Subheader className="tw-mb-2">
          {t("charsheet.status.thresholds")}
        </Subheader>
        <ThresholdsSection {...statusService} />
      </div>
    </div>
  );
}
