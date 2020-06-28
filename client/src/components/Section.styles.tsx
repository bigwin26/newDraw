import styled from "styled-components";

export const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
  :first-child {
    margin-top: 15px;
  }
`;

export const Grid = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  overflow-x: hidden;
  margin: 0px;
  grid-row-gap: 24px;
`;
