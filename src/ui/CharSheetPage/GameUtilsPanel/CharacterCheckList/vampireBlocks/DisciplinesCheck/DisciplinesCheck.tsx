import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import "./DisciplinesCheck.css";
import { useDisciplines } from "../../../../../../services/storageAdapter";
import { CheckListItem } from "../../primitives/CheckListItem";
import {
  checkDisciplines,
  EXPECTED_DISCIPLINE_DOTS,
} from "../../../../../../domainServices";

interface DisciplinesCheckProps {
  className?: string;
}

export function DisciplinesCheck(props: DisciplinesCheckProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { disciplines } = useDisciplines();
  const disciplinesFilled = useMemo(() => {
    return checkDisciplines(disciplines);
  }, [disciplines]);

  return (
    <CheckListItem
      className={classnames("DisciplinesCheck", className)}
      checked={disciplinesFilled.checked}
      text={t("checklist.discipline-dots", {
        value: disciplinesFilled.value,
        expected: EXPECTED_DISCIPLINE_DOTS,
      })}
    />
  );
}
