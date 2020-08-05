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
      <Route path="/login">
        <Authentication />
      </Route>
      <Route path="/register">
        <Authentication />
      </Route>
      <Route path="/articles/:slug">
        <Article />
      </Route>
    </Switch>
  );
};
