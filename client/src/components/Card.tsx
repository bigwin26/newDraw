import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Item } from "./Card.styles";

const ImageContainer = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  height: 240px;
  width: 100%;
  margin: 0px;
  padding: 16px;
  background: white;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(${require("../lib/assets/test2.png")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0px auto;
`;

const InfoContainer = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  height: 120px;
  width: 100%;
  margin: 0px;
  padding: 16px;
  background: white;
`;

const Title = styled.div`
  margin-bottom: 10px;
`;
const Color = styled.div`
  margin-bottom: 10px;
`;
const DatePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Card() {
  return (
    <Item>
      <ImageContainer>
        <Link to="/product/1">
          <Image />
        </Link>
      </ImageContainer>
      <InfoContainer>
        <Title>
          <h3>NIKE JORDAN 1</h3>
        </Title>
        <Color>
          <span>SMOKE GREY</span>
        </Color>
        <DatePrice>
          <span>2020-07-06 10:00:00</span>
          <span>199,000 원</span>
        </DatePrice>
      </InfoContainer>
    </Item>
  );
}
