import React from "react";
import classnames from "classnames";
import Table from "react-bootstrap/Table";
import { useTranslation } from "react-i18next";

import { CheckListBadge } from "../../charSheets/generic/checkList";

interface SupportedFeaturesTableProps {
  className?: string;
}

export function SupportedFeaturesTable(
  props: SupportedFeaturesTableProps
): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classnames("SupportedFeaturesTable", className)}>
      <h2 className="tw-text-lg">{t("about.supported-features")}</h2>
      <Table>
        <thead>
          <tr>
            <th>{t("about.char-sheet-type")}</th>
            <th>{t("about.basic-support")}</th>
            <th>{t("about.dropdown-lists")}</th>
            <th>{t("about.creation-checklist")}</th>
            <th>{t("about.freebie-points")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("about.vtm")}</td>
            <td className="tw-text-center">
              <CheckListBadge checked className="" />
            </td>
            <td className="tw-text-center">
              <CheckListBadge checked className="" />
            </td>
            <td className="tw-text-center">
              <CheckListBadge checked className="" />
            </td>
            <td className="tw-text-center">
              <CheckListBadge checked className="" />
            </td>
          </tr>
          <tr>
            <td>{t("about.ctd")}</td>
            <td className="tw-text-center">
              <CheckListBadge checked className="" />
            </td>
            <td className="tw-text-center">
              <CheckListBadge checked className="" />
            </td>
            <td className="tw-text-center">
              <CheckListBadge checked className="" />
            </td>
            <td className="tw-text-center">
              <CheckListBadge checked className="" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
