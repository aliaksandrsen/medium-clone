import React from "react";
import { Switch, Route } from "react-router-dom";

import { Article } from "./Article/Article";
import { GlobalFeed } from "./GlobalFeed/GlobalFeed";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <GlobalFeed />
      </Route>
      <Route path="/articles/:slug">
        <Article />
      </Route>
    </Switch>
  );
};
