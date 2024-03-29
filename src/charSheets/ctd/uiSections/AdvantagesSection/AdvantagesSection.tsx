import React from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { useLimits } from "../../../../charSheets/root/services/storageAdapter";
import { Subheader } from "../../../generic/uiPrimitives";
import { BackgroundsSection } from "../../../generic/uiSections";
import { useCtDDropdownOptions } from "../../dropdownContent";
import { useBackgrounds } from "../../../generic/services/storageAdapter";
import { useArts, useRealms } from "../../services/storageAdapter";

import { ArtsSection } from "./ArtsSection";
import { RealmsSection } from "./RealmsSection";

interface AdvantagesSectionProps {
  className?: string;
}

export function AdvantagesSection(props: AdvantagesSectionProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { limits } = useLimits();
  const backgroundsService = useBackgrounds();
  const artsService = useArts();
  const realmsService = useRealms();

  const { artOptions, backgroundOptions } = useCtDDropdownOptions();

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
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 print:tw-hidden">
          {t("charsheet.advantages.arts")}
        </Subheader>
        <ArtsSection limits={limits} artOptions={artOptions} {...artsService} />
      </div>
      <div className="tw-flex-1">
        <Subheader className="tw-mb-2 print:tw-hidden">
          {t("charsheet.advantages.realms")}
        </Subheader>
        <RealmsSection {...realmsService} />
      </div>
    </div>
  );
}
