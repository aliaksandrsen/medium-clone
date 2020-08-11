import React from "react";
import { Switch, Route } from "react-router-dom";

import { Article } from "./Article/Article";
import { Authentication } from "./Authentication";
import { GlobalFeed } from "./GlobalFeed/GlobalFeed";

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
