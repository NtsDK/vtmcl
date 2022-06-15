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

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <ErrorNotification />
        {/* <Switch>
          <Route path="/games" component={GamePage} />
          <Route path="/servers" component={ServerPage} />
          <Route path="/" component={GamePage} />
        </Switch> */}
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
