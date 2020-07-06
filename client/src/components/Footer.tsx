import React from "react";
import {
  StyledFooter,
  Container,
  Intro,
  Title,
  StyledLink,
  Description,
} from "./Footer.styles";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Intro>
          <Title>Info</Title>
          <Description>
            YourDraw는 신발 발매정보를 제공합니다.
            <br />
            이 사이트는 모바일환경에 최적화 되어있습니다.
            <br />
            Made By 대승
          </Description>
          <Title>Contact</Title>
          <Description>kdsgood12@gmail.com</Description>
          <StyledLink href="https://github.com/bigwin26">Github</StyledLink>
        </Intro>
      </Container>
    </StyledFooter>
  );
}
