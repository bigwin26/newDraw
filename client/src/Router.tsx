import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Detail from "./components/Detail";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/product/:id" component={Detail} />
      <Redirect to="/" />
    </Switch>
  );
}
