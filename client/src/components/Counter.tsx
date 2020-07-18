import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

const Counter = ({ release_date }: any) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const getTime = useCallback(() => {
    const xmasDay: any = new Date(release_date);
    const currDay: any = new Date();

    let diff = xmasDay - currDay;
    const diffDays = Math.floor(
      (xmasDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24),
    );
    setDays(diffDays);
    diff -= diffDays * (1000 * 60 * 60 * 24);
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    setHours(diffHours);
    diff -= diffHours * (1000 * 60 * 60);
    const diffMin = Math.floor(diff / (1000 * 60));
    setMins(diffMin);
    diff -= diffMin * (1000 * 60);
    const diffSec = Math.floor(diff / 1000);
    setSecs(diffSec);
  }, [release_date]);

  useEffect(() => {
    const time = setInterval(getTime, 1000);
    return () => {
      clearInterval(time);
    };
  }, [getTime]);

  return (
    <CounterContainer>
      <InnerContainer>
        <DaysBox>
          <Count>{days}</Count>
          <Text>DAYS</Text>
        </DaysBox>
        <DaysBox>
          <Count>{hours}</Count>
          <Text>HOURS</Text>
        </DaysBox>
        <DaysBox>
          <Count>{mins}</Count>
          <Text>MINS</Text>
        </DaysBox>
        <DaysBox>
          <Count>{secs}</Count>
          <Text>SECS</Text>
        </DaysBox>
      </InnerContainer>
    </CounterContainer>
  );
};

export default Counter;

const CounterContainer = styled.div`
  width: 80%;
  text-align: center;
  font-weight: normal;
  text-transform: none;
  margin: 10px auto 8px;
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: space-around;
  padding-top: 0px;
`;

const DaysBox = styled.div`
  font-size: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25%;
  :not(:last-child) {
    ::after {
      position: absolute;
      top: -6px;
      right: -5px;
      font-size: 2.64286rem;
      line-height: 3.43571rem;
      content: ":";
    }
  }
`;

const Count = styled.span`
  display: block;
  font-size: 2.35714rem;
  font-family: ProximaNova-Semibold, "Helvetica Neue", Verdana, Arial,
    sans-serif;
  letter-spacing: 0.0589286rem;
  line-height: 3.06429rem;
  text-transform: none;
`;

const Text = styled.span`
  display: block;
  margin-top: 9px;
  font-size: 0.714286rem;
  font-family: ProximaNova-Regular, "Helvetica Neue", Verdana, Arial, sans-serif;
  letter-spacing: 0.0714286rem;
  line-height: 0.928571rem;
  text-transform: uppercase;
`;
