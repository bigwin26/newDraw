import styled from "styled-components";

export const Item = styled.section`
  box-sizing: border-box;
  min-width: 0px;
  width: 100%;
  position: relative;
  display: grid;
  min-height: 300px;
  z-index: 1;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    "image"
    "info";
  margin: 0px;
  grid-column-gap: 24px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  border-image: initial;
  transition: all 0.3s ease-in-out 0s;
`;
