import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "./components/Loader";
const Main = lazy(() => import("./components/Main"));
const Detail = lazy(() => import("./components/Detail"));
const ReleaseList = lazy(() => import("./components/ReleaseList"));

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/product/:id" component={Detail} />
        <Route exact path="/products" component={ReleaseList} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
}
