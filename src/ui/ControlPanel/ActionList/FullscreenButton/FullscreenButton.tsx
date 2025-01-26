import React from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/cjs/Dropdown";
import classnames from "classnames";

interface FullscreenButtonProps {
  className?: string;
}

export function FullscreenButton(props: FullscreenButtonProps) {
  const { t } = useTranslation();
  const { className } = props;

  function onClick() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  return (
    <Dropdown.Item
      as="button"
      type="button"
      onClick={onClick}
      className={classnames("FullscreenButton", className)}
    >
      {t("actionMenu.fullscreen-toggle")}
    </Dropdown.Item>
  );
}
