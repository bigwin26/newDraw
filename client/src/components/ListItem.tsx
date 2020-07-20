import React from "react";
import { Link } from "react-router-dom";
import { IShoes } from "../lib/types";
import { BASE_URL } from "../lib/config";
import styled from "styled-components";

export default function Shoes({ shoes }: IShoes) {
  return (
    <Link to={`/product/${shoes.code}`}>
      <ImageContainer isReleased={shoes.status === "released" && true}>
        <Image imgUrl={`${BASE_URL}/api/shoes/${shoes.code}-4/image`} />
        <InfoContainer>
          <Title>
            <h3>{shoes.title}</h3>
          </Title>
          <Color>
            <span>{shoes.color}</span>
          </Color>
        </InfoContainer>
      </ImageContainer>
    </Link>
  );
}

const ImageContainer = styled.section<{ isReleased?: boolean }>`
  box-sizing: border-box;
  min-width: 0px;
  height: 300px;
  width: 100%;
  margin: 0px;
  margin-bottom: 20px;
  opacity: ${(props) => props.isReleased && "0.6"};
`;

const Image = styled.img<{ imgUrl?: string }>`
  height: 300px;
  width: 100%;
  margin: 0px;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: 0px auto;
`;

const InfoContainer = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  height: 120px;
  width: 100%;
  margin: 0px;
  padding: 16px;
  bottom: 10vh;
  position: relative;
`;

const Title = styled.div`
  margin-bottom: 10px;
`;
const Color = styled.div`
  margin-bottom: 10px;
`;
