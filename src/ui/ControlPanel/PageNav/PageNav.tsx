import React from "react";
import "./PageNav.css";
import Nav from "react-bootstrap/cjs/Nav";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

interface PageNavProps {
  className?: string;
}

export function PageNav(props: PageNavProps): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  // from
  // https://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem
  return (
    <Nav as="nav" className={classnames("PageNav", className)}>
      <Nav.Link
        as={NavLink}
        to="/charsheet"
        className="tw-px-5 tw-py-3 tw-text-gray-900"
      >
        {t("charsheet.charsheet")}
      </Nav.Link>
      <Nav.Link
        as={NavLink}
        to="/instruction"
        className="tw-px-5 tw-py-3 tw-text-gray-900"
      >
        {t("instruction.header")}
      </Nav.Link>
      <Nav.Link
        as={NavLink}
        to="/about"
        className="tw-px-5 tw-py-3 tw-text-gray-900"
      >
        {t("about.header")}
      </Nav.Link>
    </Nav>
  );
}
