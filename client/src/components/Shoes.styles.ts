import styled from "styled-components";

export const ImageContainer = styled.section`
  box-sizing: border-box;
  min-width: 0px;
  height: 300px;
  width: 100%;
  margin: 0px;
  background-image: url(${require("../lib/assets/test2.png")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  margin: 0px auto;
`;

export const InfoContainer = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  height: 120px;
  width: 100%;
  margin: 0px;
  padding: 16px;
  position: relative;
  bottom: 10vh;
`;

export const Title = styled.div`
  margin-bottom: 10px;
`;
export const Color = styled.div`
  margin-bottom: 10px;
`;
