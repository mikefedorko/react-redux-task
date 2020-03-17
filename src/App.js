import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import { NavConfig } from './config/nav-config';
import routes from './config/routes';

import { Not_Found } from './pages/not-found';
import { NavigationBar } from './components/navbar';
import {Footer} from './components/footer';

function App() {
  return (
    <>
      <NavigationBar />
      <div className="App">
        <Switch>
          {NavConfig.map(({ path, component }, key) => (
            <Route exact path={path} key={key} component={component} />
          ))}
          <Route exact path={routes.NOT_FOUND} component={Not_Found} />
          <Redirect from="*" to={routes.NOT_FOUND} />
        </Switch>
      </div>
      <Footer/>
    </>
  );
}

export default App;
