import React from 'react';
import './Header.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

import {
  NavLink, Route,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DownloadDatabaseButton } from './DownloadDatabaseButton';
import { UploadDatabaseButton } from './UploadDatabaseButton';

interface HeaderProps {
}

export function Header(props: HeaderProps) {
  const { t } = useTranslation();

  return (
    <header className="Header flex-0-0-auto">
      <Navbar
        expand="md"
        className="view-switch tw-pb-0"
        // collapseOnSelect
        // expanded={expanded}
        // onToggle={this.onToggle}
      >

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="ul">
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
            <Nav.Item as="li">
              <NavLink
                className="tw-px-3 tw-py-2 tw-text-lg"
                to={'/log'}
              >
                {t('header.logViewer')}
              </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
              <NavLink
                className="tw-px-3 tw-py-2 tw-text-lg"
                to={'/about'}
              >
                {t('header.about')}
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <Dropdown as={Nav.Item} alignRight>
          <Dropdown.Toggle as={Nav.Link} className="tw-text-lg">{t('header.actionMenu')}</Dropdown.Toggle>
          <Dropdown.Menu style={{ zIndex: 2000 }}>
            <UploadDatabaseButton />
            <DownloadDatabaseButton />
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </header>
  );
}



