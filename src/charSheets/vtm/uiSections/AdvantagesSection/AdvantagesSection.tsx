import React from "react";
import "./AdvantagesSection.css";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { useLimits } from "../../../../charSheets/root/services/storageAdapter";
import { Subheader } from "../../../generic/uiPrimitives";
import { BackgroundsSection } from "../../../generic/uiSections";
import { useDropdownOptions } from "../../dropdownContent";
import { useDisciplines, useVirtues } from "../../services/storageAdapter";
import { useBackgrounds } from "../../../generic/services/storageAdapter";

import { DisciplinesSection } from "./DisciplinesSection";
import { VirtuesSection } from "./VirtuesSection";

interface AdvantagesSectionProps {
  className?: string;
}

export function AdvantagesSection(props: AdvantagesSectionProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { backgroundOptions, disciplineOptions } = useDropdownOptions();
  const { limits } = useLimits();
  const disciplinesService = useDisciplines();
  const backgroundsService = useBackgrounds();
  const virtuesService = useVirtues();

  return (
    <div
      className={classnames("AdvantagesSection tw-flex tw-gap-x-4", className)}
    >
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 print:tw-hidden">
          {t("charsheet.advantages.disciplines")}
        </Subheader>
        <DisciplinesSection
          limits={limits}
          disciplineOptions={disciplineOptions}
          {...disciplinesService}
        />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 print:tw-hidden">
          {t("charsheet.advantages.backgrounds")}
        </Subheader>
        <BackgroundsSection
          limits={limits}
          backgroundOptions={backgroundOptions}
          {...backgroundsService}
        />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 print:tw-hidden">
          {t("charsheet.advantages.virtues")}
        </Subheader>
        <VirtuesSection {...virtuesService} />
      </div>
    </div>
  );
}
