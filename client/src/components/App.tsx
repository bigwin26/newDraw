import React from "react";
import GlobalStyles from "../lib/GlobalStyles";
import Responsive from "../lib/responsive";
import Router from "../Router";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Responsive />
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
