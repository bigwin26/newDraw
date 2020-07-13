import React from "react";
import { Link } from "react-router-dom";
import {
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Color,
} from "./Shoes.styles";

export default function Shoes() {
  return (
    <Link to="/product/1">
      <ImageContainer>
        <Image />
        <InfoContainer>
          <Title>
            <h3>NIKE JORDAN 1</h3>
          </Title>
          <Color>
            <span>SMOKE GREY</span>
          </Color>
        </InfoContainer>
      </ImageContainer>
    </Link>
  );
}
