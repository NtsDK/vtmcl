import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.css';

// import logo from './logo.svg';
import './App.css';

// import { Settings } from "luxon";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useTranslation } from 'react-i18next';

// import { defaultLang } from "./i18nResources";

// import { Header } from "./ui/Header";
import { ErrorNotification } from './ui/ErrorNotification';
import { CharSheetPage } from './ui/CharSheetPage';
import { InstructionPage } from './ui/InstructionPage';
import { AboutPage } from './ui/AboutPage';
import { PageNav } from './ui/PageNav';
import { ActionList } from './ui/ActionList';
import { SettingsSection } from './ui/SettingsSection';
import { useSettings } from './services/storageAdapter';

function App() {
  const { t } = useTranslation();
  const { settings } = useSettings();

  useEffect(() => {
    document.body.style.backgroundColor = settings.backgroundColor;

    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, [settings]);

  return (
    <Router>
      <div className="app">
        <div className="tw-flex">
          <div 
            className="tw-flex-grow-0 tw-flex-shrink-0 tw-bg-gray-200"
            style={{flexBasis: '25rem'}}
          >
            {/* <Header /> */}
            <PageNav className='tw-flex-col tw-mb-8'/>

            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  {t('header.actionMenu')}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <ActionList />
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  {t('charsheet-tab.settings')}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <SettingsSection/>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            
          </div>
          <div className="tw-flex-grow-1 tw-w-full">
            <Switch>
              <Route path="/charsheet" component={CharSheetPage} />
              <Route path="/instruction" component={InstructionPage} />
              {/* <Route path="/log" component={LogPage} /> */}
              <Route path="/about" component={AboutPage} />
              <Route path="/" component={CharSheetPage} />
            </Switch>
          </div>
        </div>
        <ErrorNotification />
      </div>
    </Router>
  );
}

export default App;
