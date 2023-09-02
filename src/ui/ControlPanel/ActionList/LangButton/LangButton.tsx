import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { i18n } from "../../../../i18n";

interface LangButtonProps {
  lang: "ru" | "en";
  className?: string;
}

export function LangButton(props: LangButtonProps) {
  const { t } = useTranslation();
  const { lang, className } = props;

  return (
    <Dropdown.Item
      as="button"
      type="button"
      onClick={() => i18n.changeLanguage(lang)}
      className={classnames("LangButton", className)}
    >
      <img
        className="tw-w-5 tw-inline tw-leading-5 tw-mr-2"
        src={`images/${lang}.svg`}
        alt=""
      />
      <span className="tw-leading-5">{t(`actionMenu.lang-${lang}`)}</span>
    </Dropdown.Item>
  );
}
