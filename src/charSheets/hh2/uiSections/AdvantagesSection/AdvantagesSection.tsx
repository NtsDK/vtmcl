import React from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { useLimits } from "../../../../charSheets/root/services/storageAdapter";
import { Subheader } from "../../../generic/uiPrimitives";
import {
  BackgroundsSection,
  VirtuesSection,
} from "../../../generic/uiSections";
import {
  useBackgrounds,
  useVirtues,
} from "../../../generic/services/storageAdapter";
import { useNuminaAndTraits } from "../../services/storageAdapter";
import { useDropdownOptions } from "../../dropdownContent";

import { NuminaAndTraitsSection } from "./NuminaAndTraitsSection";

interface AdvantagesSectionProps {
  className?: string;
}

export function AdvantagesSection(props: AdvantagesSectionProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { limits } = useLimits();
  const backgroundsService = useBackgrounds();
  const virtuesService = useVirtues();
  const numinaAndTraitsService = useNuminaAndTraits();

  const { backgroundOptions, numinaOptions } = useDropdownOptions();

  return (
    <div
      className={classnames("AdvantagesSection tw-flex tw-gap-x-4", className)}
    >
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 print:tw-hidden">
          {t("charsheet.advantages.numinaAndOtherTraits")}
        </Subheader>
        <NuminaAndTraitsSection
          {...numinaAndTraitsService}
          limits={limits}
          numinaAndTraitsOptions={numinaOptions}
        />
        {/* <ArtsSection limits={limits} artOptions={artOptions} {...artsService} /> */}
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
