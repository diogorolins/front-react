import React from "react";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import Confirmation from "../pages/Confirmation";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/profile" exact={true} component={Profile} />
      <Route path="/signin" exact={true} component={Signin} />
      <Route path="/confirmation" exact={true} component={Confirmation} />
      /signin
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
