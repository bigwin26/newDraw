import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  box-sizing: border-box;
  min-width: 0px;
  background-color: rgb(37, 37, 37);
  display: flex;
  width: 100%;
  margin: 0px;
  color: white;
`;

export default function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}
