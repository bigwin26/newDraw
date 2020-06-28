import styled from "styled-components";

export const Item = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 90vh;
  margin-bottom: 2vh;
  background-image: url(${require("../lib/assets/test.png")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease-in-out 0s;
`;
