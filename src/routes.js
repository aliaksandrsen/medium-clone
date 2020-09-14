import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Article } from './pages/Article';
import { Authentication } from './pages/Authentication';
import { GlobalFeed } from './pages/GlobalFeed';
import { TagFeed } from './pages/TagFeed';
import { YourFeed } from './pages/YourFeed';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/feed" component={YourFeed} />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};
