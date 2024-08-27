import styled from "@emotion/styled";

export const HomePage = () => {
  return (
    <Wrapper>
      <MainBanner>
        <TITLE>AI 기반 스마트 해변 자율 청소 로봇</TITLE>
        <Description>쓰레기 수거 로봇 모니터링 웹 서비스</Description>
      </MainBanner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-width: 768px;
`;

const MainBanner = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafcfd;
`;

const TITLE = styled.div`
  margin-top: 70px;
  font-size: 32px;
  font-weight: 700;
  color: #7badd5;
`;
const Description = styled.div`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #acd9ef;
`;
