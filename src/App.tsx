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

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <ErrorNotification />
        <Switch>
          <Route path="/charsheet" component={CharSheetPage} />
          <Route path="/instruction" component={InstructionPage} />
          <Route path="/log" component={LogPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={CharSheetPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
