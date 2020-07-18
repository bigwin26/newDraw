import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Intro>
          <Title>Info</Title>
          <Description>
            YourDraw는 신발 발매정보를 제공합니다.
            <br />
          </Description>
          <Title>Contact</Title>
          <Description>kdsgood12@gmail.com</Description>
          <StyledLink href="https://github.com/bigwin26">Github</StyledLink>
        </Intro>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  box-sizing: border-box;
  min-width: 0px;
  background-color: rgb(37, 37, 37);
  display: flex;
  width: 100%;
  margin: 0px;
  color: white;
`;

const Container = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  max-width: 1124px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  padding-bottom: 32px;
  flex-direction: column;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
  display: flex;
  margin: 24px auto 0px;
  flex: 1 1 0%;
`;

const Intro = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  margin: 0px 8px 24px 0px;
  flex: 1 1 0%;
`;

const Title = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  font-family: "GT America Condensed", -apple-system, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.1em;
  font-size: 11px;
  color: rgb(102, 102, 102);
  margin: 0px 0px 16px;
`;

const Description = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  color: rgb(221, 221, 223);
  line-height: 1.5;
  font-size: 14px;
  margin: 0px 0px 16px;
`;

const StyledLink = styled.a`
  box-sizing: border-box;
  min-width: 0px;
  color: rgb(221, 221, 223);
  line-height: 1.5;
  font-size: 14px;
  margin: 0px 0px 16px;
`;
