import React from "react";
import "./LangButton.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import { i18n } from "../../../../i18n";

interface LangButtonProps {
  lang: "ru" | "en";
}

export function LangButton(props: LangButtonProps) {
  const { t } = useTranslation();
  const { lang } = props;

  return (
    <Dropdown.Item
      as="button"
      type="button"
      // data-original-title=""
      onClick={() => i18n.changeLanguage(lang)}
      // title={t(`header.lang-${lang}`)}
      className="LangButton tw-py-3 tw-text-lg"
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
