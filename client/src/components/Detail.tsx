import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { shoesApi } from "../lib/api/shoes";
import Loader from "./Loader";
import Message from "./Message";

type Shoes = {
  method: string;
  title: string;
  description: string;
  release_date: string;
  color: string;
  price: string;
  code: string;
};

export default withRouter(function Detail({ history, location, match }) {
  const { id } = match.params;
  const [detail, setDetail] = useState<Shoes | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getDetail = useCallback(async (code: string) => {
    setLoading(true);
    try {
      const { data } = await shoesApi.getShoesDetail(code);
      setDetail(data);
    } catch (error) {
      setError("정보를 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getDetail(id);
  }, [getDetail, id]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message color="red" text={error} />
  ) : (
    detail && (
      <Container>
        <InnerContainer>
          <ReleaseWay>{detail.method}</ReleaseWay>
          <Title>{detail.title}</Title>
          <ImgContainer
            imgUrl={`http://localhost:8080/api/shoes/${detail.code}-4/image`}
          />
          <Description>{detail.description}</Description>
          <Line />
          <Info>
            <InfoItem>
              <InfoTitle>Release</InfoTitle>
              <InfoContext>{detail.release_date.slice(0, 10)}</InfoContext>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Color</InfoTitle>
              <InfoContext>{detail.color}</InfoContext>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Retail</InfoTitle>
              <InfoContext>{detail.price}</InfoContext>
            </InfoItem>
            <InfoItem>
              <InfoTitle>PID</InfoTitle>
              <InfoContext>{detail.code}</InfoContext>
            </InfoItem>
          </Info>
          <Line />
        </InnerContainer>
      </Container>
    )
  );
});

const Container = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  min-height: 75vh;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 7vh;
  padding-bottom: 24px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ReleaseWay = styled.div`
  width: 100%;
  box-sizing: border-box;
  line-height: 1.25;
  font-weight: 700;
  font-size: 17px;
  color: rgb(102, 102, 102);
  margin: 0px 0px 8px;
`;

const Title = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-weight: 700;
  line-height: 1.25;
  font-size: 24px;
  margin: 0px;
`;

const ImgContainer = styled.div<{ imgUrl: string }>`
  width: 100%;
  min-height: 300px;
  margin: 10px auto;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Description = styled.div`
  width: 100%;
  box-sizing: border-box;
  line-height: 1.55;
  font-size: 14px;
  margin: 0px 0px 4px;
`;

const Line = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  width: 100%;
  height: 1px;
  background: black;
  margin: 24px auto;
`;

const Info = styled.div`
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
`;

const InfoItem = styled.div`
  box-sizing: border-box;
  min-width: 80px;
  max-width: 180px;
  margin: 0px 20px 0px 0px;
`;

const InfoTitle = styled.div`
  font-weight: 900;
  opacity: 0.4;
  margin-bottom: 8px;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const InfoContext = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.5;
  font-size: 14px;
  margin: 0px;
`;
