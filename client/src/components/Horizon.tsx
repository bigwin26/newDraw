import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h2`
  display: inline-block;
  padding: 10px;
  font-weight: 600;
  font-size: 14px;
  color: black;
  :not(:first-child) {
    margin-top: 10px;
  }
`;

const StyledLink = styled(Link)`
  border: 1px solid;
  border-radius: 5px;
  padding: 2px;
  &:hover {
    background-color: grey;
  }
`;

const HorizonContainer = styled.div`
  overflow: auto;
  overflow-y: hidden;
  overflow-x: hidden;
  white-space: nowrap;
  iframe {
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    -ms-overflow-style: none;
    overflow-x: scroll;
  }
  scroll-behavior: smooth;
`;

const ArrowContainer = styled.div`
  position: relative;
`;

const ArrowButtonBlock = styled.div<{ direction: string }>`
  display: flex;
  position: absolute;
  top: 0px;
  z-index: 1;
  ${(props) => (props.direction === "left" ? `left:10px;` : `right:10px;`)};
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  opacity: 0;
  transition: all 300ms ease 0s;
`;

const Container = styled.div`
  margin: 10px 0;
  border-radius: 3px;
  &:hover {
    ${ArrowButtonBlock} {
      opacity: 0.9;
    }
  }
`;

interface IHorizon {
  title?: string;
  path?: string;
  children: React.ReactNode;
}

export default React.memo(({ children, path, title }: IHorizon) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {path && <StyledLink to={path}>더보기</StyledLink>}
      <ArrowContainer>
        <HorizonContainer>{children}</HorizonContainer>
      </ArrowContainer>
    </Container>
  );
});
