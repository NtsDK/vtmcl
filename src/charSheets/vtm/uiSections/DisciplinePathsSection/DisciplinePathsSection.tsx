import React, { memo } from "react";

import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { OptionGroup } from "../../../../i18nResources";
import { DisciplinePathsService } from "../../../../application/ports";
import { Limits } from "../../../../domain";
import { NameNumberSection } from "../../../commons/uiPrimitives";

interface DisciplinePathsSectionProps extends DisciplinePathsService {
  disciplinePathOptions: OptionGroup[];
  limits: Limits;
  className?: string;
}

export const DisciplinePathsSection = memo(function DisciplinePathsSection(
  props: DisciplinePathsSectionProps
) {
  const { t } = useTranslation();
  const {
    className,
    disciplinePathOptions,
    limits,
    disciplinePaths,
    addDisciplinePath,
    removeDisciplinePath,
    setDisciplinePathName,
    setDisciplinePathValue,
  } = props;

  return (
    <NameNumberSection
      sectionItemName="disciplinePath"
      className={classnames("DisciplinePathsSection", className)}
      addItem={addDisciplinePath}
      items={disciplinePaths}
      removeItem={removeDisciplinePath}
      setItemName={setDisciplinePathName}
      setItemValue={setDisciplinePathValue}
      addItemMsg={t("charsheet.advantages.add-discipline-path")}
      removeItemMsg={t("charsheet.advantages.remove-discipline-path")}
      options={disciplinePathOptions}
      selectOptionMsg={t("charsheet.advantages.select-discipline-path")}
      nameLabel="charsheet.advantages.discipline-path-label"
      max={limits.parameterLimit}
    />
  );
});
