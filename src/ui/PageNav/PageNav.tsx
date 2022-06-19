import React from 'react';
import './PageNav.css';
import Nav from 'react-bootstrap/Nav';
import {
  NavLink, Route,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";

interface PageNavProps {
  className?: string;
}

export function PageNav(props: PageNavProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Nav className={classnames("PageNav", className)} as="ul">
      <Nav.Item as="li">
        <NavLink
          className="tw-px-3 tw-py-2 tw-text-lg"
          to={'/charsheet'}
        >
          {t('header.charsheet')}
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          className="tw-px-3 tw-py-2 tw-text-lg"
          to={'/instruction'}
        >
          {t('header.instruction')}
        </NavLink>
      </Nav.Item>
      {/* <Nav.Item as="li">
        <NavLink
          className="tw-px-3 tw-py-2 tw-text-lg"
          to={'/log'}
        >
          {t('header.logViewer')}
        </NavLink>
      </Nav.Item> */}
      <Nav.Item as="li">
        <NavLink
          className="tw-px-3 tw-py-2 tw-text-lg"
          to={'/about'}
        >
          {t('header.about')}
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}



