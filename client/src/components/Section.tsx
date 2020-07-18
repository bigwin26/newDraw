import React from "react";
import styled from "styled-components";

interface ISection {
  title?: string;
  path?: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: ISection) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Grid>{children}</Grid>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 7vh;
`;

const Title = styled.h1`
  font-size: 15px;
  margin-bottom: 10px;
`;

const Grid = styled.div`
  box-sizing: border-box;
  min-width: 0px;
`;
