import React from "react";
import { Container, Title, Grid } from "./Section.styles";

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
