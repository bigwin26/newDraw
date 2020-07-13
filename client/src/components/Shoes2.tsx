import React from "react";
import {
  StyledLink,
  Container,
  ImageContainer,
  Image,
  InfoContainer,
  Color,
  Title,
  DatePrice,
} from "./Shoes2.styles";

const Shoes2 = () => {
  return (
    <StyledLink to="/products/upcoming">
      <Container>
        <ImageContainer>
          <Image bgUrl={require("../lib/assets/test2.png")} />
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
      </Container>
    </StyledLink>
  );
};

export default React.memo(Shoes2);
