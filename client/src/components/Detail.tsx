import React from "react";
import styled from "styled-components";

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

const ImgContainer = styled.div`
  width: 100%;
  min-height: 300px;
  background-image: url(${require("../lib/assets/test2.png")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Img = styled.img`
  width: 100%;
  height: inherit;
  background-image: url(${require("../lib/assets/test2.png")});
  background-repeat: no-repeat;
  background-size: contain;
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

export default function Detail() {
  return (
    <Container>
      <InnerContainer>
        <ReleaseWay>DRAW</ReleaseWay>
        <Title>JORDAN 1</Title>
        <ImgContainer>
          <Img />
        </ImgContainer>
        <Description>
          조던은 언제나 오래된 것을 새로워 보이게 만드는 특별한 능력이
          있었습니다. 그리고 이번 시즌, 문자 그대로 폐기물을 재활용해 완성된
          혁신적인 실루엣이 조던의 레거시를 이어 갑니다. 미래적이고 지속 가능한
          디자인에는 재활용된 운동선수용 신발과 신발의 제작 과정에서 남은 여분의
          조각들을 재활용한 소재인 나이키 그라인드(Nike Grind)로 탄생한 견고한
          고무 아웃솔이 장착되어 있습니다. 또한 캔버스 느낌의 갑피 역시 재활용
          소재로 제작되어, ‘지난 물건을 더 좋은 곳에 활용하자’는 제품의 주제와
          가치에 중심을 두었습니다. 발밑의 폼이 부드럽고 유연한 쿠셔닝을
          전달하며, 블랙 & 유니버시티 레드 컬러가 브랜드의 유구한 역사에 경의를
          표합니다.\n\n*오직 나이키 멤버에 한해 먼저 구매 가능한 제품입니다.
        </Description>
        <Line />
        <Info>
          <InfoItem>
            <InfoTitle>Release</InfoTitle>
            <InfoContext>2020-07-13</InfoContext>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Color</InfoTitle>
            <InfoContext>Sail/Wheat-Sail-Team Crismon</InfoContext>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Retail</InfoTitle>
            <InfoContext>199,000원</InfoContext>
          </InfoItem>
          <InfoItem>
            <InfoTitle>PID</InfoTitle>
            <InfoContext>CODE101</InfoContext>
          </InfoItem>
        </Info>
        <Line />
      </InnerContainer>
    </Container>
  );
}
