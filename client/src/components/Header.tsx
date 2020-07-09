import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  background-color: white;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  position: fixed;
  margin: 0px;
  font-size: 1.5rem;
  z-index: 10;
`;

export default function Header() {
  return <StyledHeader>YourDraw</StyledHeader>;
}
