import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Card from "./Card";
import Poster from "./Poster";

const StyledArticle = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  position: relative;
  top: 0px;
  flex-direction: column;
  display: flex;
  margin: 10px 20px;
`;

export default function Main() {
  return (
    <>
      <Poster />
      <StyledArticle>
        <Section title="UPCOMING">
          <Card />
          <Card />
          <Card />
        </Section>
      </StyledArticle>
    </>
  );
}
