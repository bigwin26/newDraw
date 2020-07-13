import React from "react";
import styled from "styled-components";
import Horizon from "./Horizon";
import Shoes from "./Shoes2";
import Poster from "./Poster";

const StyledArticle = styled.div`
  background-color: white;
  box-sizing: border-box;
  min-width: 0px;
  position: relative;
  top: 0px;
  flex-direction: column;
  display: flex;
`;

export default function Main() {
  return (
    <>
      <Poster />
      <StyledArticle>
        <Horizon title="UPCOMING" path="/products">
          <Shoes />
          <Shoes />
          <Shoes />
        </Horizon>
        <Horizon title="RELEASED" path="/products">
          <Shoes />
          <Shoes />
          <Shoes />
        </Horizon>
      </StyledArticle>
    </>
  );
}
