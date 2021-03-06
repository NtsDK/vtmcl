import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.css';

// import logo from './logo.svg';
import './App.css';

// import { Settings } from "luxon";

import { useTranslation } from 'react-i18next';

// import { defaultLang } from "./i18nResources";

// import { Header } from "./ui/Header";
import { ErrorNotification } from './ui/ErrorNotification';
import { CharSheetPage } from './ui/CharSheetPage';
import { AboutPage } from './ui/AboutPage';

import { useSettings } from './services/storageAdapter';
import { ControlPanel } from './ui/ControlPanel';

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
            className="tw-flex-grow-0 tw-flex-shrink-0 tw-bg-gray-200 tw-max-w-sm"
            // style={{flexBasis: '25rem'}}
          >
            <ControlPanel />
          </div>
          <div className="tw-flex-grow-1 tw-w-full">
            <Switch>
              <Route path="/charsheet" component={CharSheetPage} />
              {/* <Route path="/instruction" component={InstructionPage} /> */}
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
