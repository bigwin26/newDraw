import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Card from "./Card";

const StyledArticle = styled.article`
  box-sizing: border-box;
  min-width: 0px;
  position: relative;
  top: 0px;
  flex-direction: column;
  display: flex;
  margin: 0px;
`;

export default function Main() {
  return (
    <StyledArticle>
      <Section>
        <Card />
        <Card />
        <Card />
      </Section>
    </StyledArticle>
  );
}
