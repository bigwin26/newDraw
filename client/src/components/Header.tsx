import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  box-sizing: border-box;
  min-width: 0px;
  align-items: flex-start;
  -webkit-box-pack: start;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  position: relative;
  margin: 0px;
  font-size: 1.5rem;
`;

export default function Header() {
  return <StyledHeader>YourDraw</StyledHeader>;
}
