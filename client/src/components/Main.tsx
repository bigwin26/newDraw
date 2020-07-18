import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { shoesApi } from "../lib/api/shoes";
import Horizon from "./Horizon";
import HorizonItem from "./HorizonItem";
import Poster from "./Poster";
import Message from "./Message";
import Loader from "./Loader";

const StyledArticle = styled.div`
  background-color: white;
  box-sizing: border-box;
  min-width: 0px;
  position: relative;
  top: 0px;
  flex-direction: column;
  display: flex;
`;

export default function Main() {
  const [upcomingList, setUpcomingList] = useState<any>(null);
  const [releasedList, setReleasedList] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getList = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const {
        data: { shoes: upcoming },
      } = await shoesApi.getList(page, "upcoming");
      setUpcomingList(upcoming);
      const {
        data: { shoes: released },
      } = await shoesApi.getList(page, "released");
      setReleasedList(released);
    } catch (error) {
      setError("정보를 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getList(1);
  }, [getList]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message color="red" text={error} />
  ) : (
    <>
      {upcomingList && <Poster info={upcomingList[0]} />}
      <StyledArticle>
        {upcomingList && upcomingList.length > 0 && (
          <Horizon title="UPCOMING" path="/products">
            {upcomingList.map((shoes: any) => (
              <HorizonItem key={shoes.code} shoes={shoes} />
            ))}
          </Horizon>
        )}
        {releasedList && releasedList.length > 0 && (
          <Horizon title="RELEASED" path="/products">
            {releasedList.map((shoes: any) => (
              <HorizonItem key={shoes.code} shoes={shoes} />
            ))}
          </Horizon>
        )}
      </StyledArticle>
    </>
  );
}
