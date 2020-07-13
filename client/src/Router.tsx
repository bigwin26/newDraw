import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Detail from "./components/Detail";
import ReleaseList from "./components/ReleaseList";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/product/:id" component={Detail} />
      <Route exact path="/products" component={ReleaseList} />
      <Redirect to="/" />
    </Switch>
  );
}
