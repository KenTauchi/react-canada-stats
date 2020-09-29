import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path="react-canada-stats(/)?" component={Home} />
    </Switch>
  );
};

export default Router;
