import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as R from "ramda";
import classnames from "classnames";

import { CheckListItem } from "../../../generic/checkList";
import { checkRealms, EXPECTED_REALM_DOTS } from "../../checkListLogic";
import { useRealms } from "../../services/storageAdapter";

interface RealmsCheckProps {
  className?: string;
}

export function RealmsCheck(props: RealmsCheckProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  const { realms } = useRealms();
  const realmsFilled = useMemo(() => {
    return checkRealms(realms);
  }, [realms]);

  return (
    <CheckListItem
      className={classnames("RealmsCheck", className)}
      checked={realmsFilled.checked}
      text={t("checklist.realm-dots", {
        value: realmsFilled.value,
        expected: EXPECTED_REALM_DOTS,
      })}
    />
  );
}
