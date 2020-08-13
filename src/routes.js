import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Article } from './pages/Article/Article';
import { Authentication } from './pages/Authentication';
import { GlobalFeed } from './pages/GlobalFeed/GlobalFeed';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <GlobalFeed />
      </Route>
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/articles/:slug">
        <Article />
      </Route>
    </Switch>
  );
};
