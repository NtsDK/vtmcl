import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.css';

import logo from './logo.svg';
import './App.css';

import { Settings } from "luxon";

import { defaultLang } from "./i18nResources";

import { Header } from "./ui/Header";
import { ErrorNotification } from './ui/ErrorNotification';
import { CharSheetPage } from './ui/CharSheetPage';
import { InstructionPage } from './ui/InstructionPage';
import { LogPage } from './ui/LogPage';
import { AboutPage } from './ui/AboutPage';
import { PageNav } from './ui/PageNav';
import { ActionList } from './ui/ActionList';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="tw-flex">
          <div className="tw-flex-grow-0 tw-bg-gray-200">
            {/* <Header /> */}
            <PageNav className='tw-flex-col'/>
            <ActionList />
          </div>
          <div className="tw-flex-grow-1 tw-w-full">
            <Switch>
              <Route path="/charsheet" component={CharSheetPage} />
              <Route path="/instruction" component={InstructionPage} />
              <Route path="/log" component={LogPage} />
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
