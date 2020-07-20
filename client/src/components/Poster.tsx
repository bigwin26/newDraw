import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../lib/config";
import Counter from "./Counter";

export default function Poster({ info }: any) {
  return (
    info && (
      <Item>
        <Img imgUrl={`${BASE_URL}/api/shoes/${info.code}-4/image`} />
        <Info>
          <h3>{info.status === "upcoming" ? "UPCOMING" : "RELEASED"}</h3>
          <h2>{info.title}</h2>
          <Counter release_date={info.release_date} />
        </Info>
      </Item>
    )
  );
}

const Item = styled.div`
  top: 10vh;
  box-sizing: border-box;
  width: 100%;
  min-height: 60vh;
  margin-bottom: 2vh;

  transition: all 0.3s ease-in-out 0s;
`;

const Img = styled.div<{ imgUrl: string }>`
  width: 100%;
  min-height: inherit;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Info = styled.div`
  position: absolute;
  right: 0px;
  bottom: 43vh;
  left: 0px;
  z-index: 1;
  margin: auto;
  h3,
  h2 {
    text-align: center;
  }
`;
