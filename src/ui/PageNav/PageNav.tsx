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

  // from
  // https://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem
  return (
    <Nav as="nav" className={classnames("PageNav", className)}>
      <Nav.Link 
        as={NavLink} 
        to='/charsheet' 
        className="tw-px-5 tw-py-3"
      >
        {t('header.charsheet')}
      </Nav.Link>
      {/* <Nav.Link as={NavLink} to='/instruction' className="tw-px-5 tw-py-3">{t('header.instruction')}</Nav.Link> */}
      <Nav.Link 
        as={NavLink} 
        to='/about' 
        className="tw-px-5 tw-py-3"
      >
        {t('header.about')}
      </Nav.Link>
    </Nav>
  );
}



