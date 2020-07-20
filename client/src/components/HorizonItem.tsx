import React from "react";
import { IShoes } from "../lib/types";
import { BASE_URL } from "../lib/config";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HorizonItem = ({ shoes }: IShoes) => {
  return (
    <StyledLink to={`/product/${shoes.code}`}>
      <Container>
        <ImageContainer>
          <Image imgUrl={`${BASE_URL}/api/shoes/${shoes.code}-4/image`} />
        </ImageContainer>
        <InfoContainer>
          <Title>
            <h3>{shoes.title}</h3>
          </Title>
          <Color>
            <span>{shoes.color}</span>
          </Color>
          <DatePrice>
            <span>{shoes.release_date}</span>
            <span>{shoes.price}</span>
          </DatePrice>
        </InfoContainer>
      </Container>
    </StyledLink>
  );
};

export default React.memo(HorizonItem);

const Container = styled.div`
  font-size: 12px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-left: 10px;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

const Image = styled.div<{ imgUrl?: string }>`
  background-image: url(${(props) => props.imgUrl});
  height: 185px;
  /* width: 230px; */
  width: 320px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 20px;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.5;
    }
  }
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
