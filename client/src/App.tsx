import React from "react";
import styled from "styled-components";
import GlobalStyles from "./lib/GlobalStyles";
import Responsive from "./lib/responsive";

const Styleddiv = styled.div`
  width: 100px;
  background-color: red;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Responsive />
      <Styleddiv>test</Styleddiv>
    </>
  );
}

export default App;
