import React from "react";
import { Container, Grid } from "./Section.styles";

interface ISection {
  title?: string;
  path?: string;
  children: React.ReactNode;
}

export default function Section({ children }: ISection) {
  return (
    <Container>
      <Grid>{children}</Grid>
    </Container>
  );
}
