import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  font-size: 12px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-left: 10px;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Image = styled.div<{ bgUrl?: string }>`
  background-image: url(${(props) => props.bgUrl});
  height: 185px;
  width: 230px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 20px;
`;

export const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.5;
    }
  }
`;

export const InfoContainer = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  height: 120px;
  width: 100%;
  margin: 0px;
  padding: 16px;
  background: white;
`;

export const Title = styled.div`
  margin-bottom: 10px;
`;
export const Color = styled.div`
  margin-bottom: 10px;
`;
export const DatePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;
