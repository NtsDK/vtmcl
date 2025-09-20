import React from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { useLimits } from "../../../../charSheets/root/services/storageAdapter";
import { Subheader } from "../../../generic/uiPrimitives";
import {
  BackgroundsSection,
  OtherTraitsSection,
  ExperienceSection,
  HealthSection,
  WillSection,
} from "../../../generic/uiSections";
import {
  useBackgrounds,
  useVirtues,
  useOtherTraits,
  useStatus,
  useHealth,
} from "../../../generic/services/storageAdapter";
import { AreteSection } from "../AreteSection";
import { QuintessenceSection } from "../QuintessenceSection";
import { ParadoxSection } from "../ParadoxSection";
import { useMtADropdownOptions } from "../../dropdownContent";

interface AdvantagesSectionProps {
  className?: string;
}

export function AdvantagesSection(props: AdvantagesSectionProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { limits } = useLimits();
  const backgroundsService = useBackgrounds();
  const virtuesService = useVirtues();
  const otherTraitsService = useOtherTraits();

  const statusService = useStatus();
  const healthService = useHealth();

  const { backgroundOptions } = useMtADropdownOptions();

  return (
    <div
      className={classnames("AdvantagesSection tw-flex tw-gap-x-4", className)}
    >
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 print:tw-hidden">
          {t("charsheet.advantages.backgrounds")}
        </Subheader>
        <BackgroundsSection
          limits={limits}
          backgroundOptions={backgroundOptions}
          {...backgroundsService}
        />
        <Subheader className="tw-mb-2">
          {t("charsheet.advantages.otherTraits")}
        </Subheader>
        <OtherTraitsSection limits={limits} {...otherTraitsService} />
      </div>
      <div className="tw-flex-1">
        <Subheader id="arete.header" className="tw-mb-2">
          {t("charsheet.status.arete")}
        </Subheader>
        <AreteSection {...statusService} />
        <Subheader className="tw-mb-2 tw-mt-2">
          {t("charsheet.status.willpower")}
        </Subheader>
        <WillSection className="tw-mb-4 print:tw-mb-2" {...statusService} />

        <Subheader id="quintessence.header" className="tw-mb-2">
          {t("charsheet.status.quintessence")}
        </Subheader>
        <QuintessenceSection {...statusService} />
        <Subheader id="paradox.header" className="tw-mb-2">
          {t("charsheet.status.paradox")}
        </Subheader>
        <ParadoxSection {...statusService} />
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
