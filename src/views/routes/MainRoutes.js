import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Navbar from "../../components/common/AppBars/Navbar";
import NotFound from "../NotFound";

export const routes = [
  {
    path: "/",
    component: Home,
  },
];

export default class MainRoutes extends Component {
  render() {
    return (
      <body>
        <Navbar />
        <Switch>
          {routes.map((route, index) => (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={Number(index)}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </body>
    );
  }
}
