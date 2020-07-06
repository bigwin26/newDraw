import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GlobalStyles from "../lib/GlobalStyles";
import Responsive from "../lib/responsive";
import Header from "./Header";
import Main from "./Main";
import Detail from "./Detail";
import Footer from "./Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Responsive />
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/product/:id" component={Detail} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
