import React, { useEffect } from "react";
import styled from "styled-components";

const Item = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 90vh;
  margin-bottom: 2vh;
  background-image: url(${require("../lib/assets/test2.png")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease-in-out 0s;
`;

const Info = styled.div`
  position: absolute;
  right: 0px;
  bottom: 50px;
  left: 0px;
  z-index: 20;
  margin: auto;
  h3,
  h2 {
    text-align: center;
  }
`;

const Counter = styled.div`
  width: 315px;
  text-align: center;
  font-size: 1.14286rem;
  font-family: ProximaNova-Regular, "Helvetica Neue", Verdana, Arial, sans-serif;
  letter-spacing: 0.0285714rem;
  line-height: 1.48571rem;
  font-weight: normal;
  text-transform: none;
  margin: 0px auto 8px;
`;

export default function Poster() {
  function getTime() {
    const xmasDay: any = new Date("2020-12-25 10:00:00");
    const currDay: any = new Date();

    let diff = xmasDay - currDay;
    const diffDays = Math.floor(
      (xmasDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24),
    );
    diff -= diffDays * (1000 * 60 * 60 * 24);
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    diff -= diffHours * (1000 * 60 * 60);
    const diffMin = Math.floor(diff / (1000 * 60));
    diff -= diffMin * (1000 * 60);
    const diffSec = Math.floor(diff / 1000);

    console.log(
      `${diffDays < 10 ? `0${diffDays}` : diffDays}일 ${
        diffHours < 10 ? `0${diffHours}` : diffHours
      }시간 ${diffMin < 10 ? `0${diffMin}` : diffMin}분 ${
        diffSec < 10 ? `0${diffSec}` : diffSec
      }초`,
    );
  }
  useEffect(() => {
    //setInterval(getTime, 1000);
  }, []);

  return (
    <Item>
      <Info>
        <h3>UP COMING</h3>
        <h2>NIKE JODAN 1</h2>
        <Counter></Counter>
      </Info>
    </Item>
  );
}
