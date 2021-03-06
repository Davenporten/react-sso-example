import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.scss';
import Home from '../../routes/Home/Home';
import Legal from '../../routes/Legal/Legal';
import Login from '../../routes/Login/Login';

export default () => (
  <div className="Main">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/legal">
        <Legal />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      
    </Switch>
  </div>
);
