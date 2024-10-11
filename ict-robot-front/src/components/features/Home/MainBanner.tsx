import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import MainBackground from "@/assets/main-background.png";
import { RouterPath } from "@/routes/path";
import { breakpoints } from "@/styles/variants";

export const MainBanner = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <InnerWrapper>
        <Content>
          <TITLE>BCBOT</TITLE>
          <Description>AI 기반 스마트 해변 자율 청소 로봇</Description>
          <AboutUsBtn onClick={() => navigate(RouterPath.aboutUs)}>더 알아보기</AboutUsBtn>
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${MainBackground});
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  height: 500px;

  @media screen and (min-width: ${breakpoints.sm}) {
    height: 600px;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    height: 700px;
  }
`;

const Content = styled.div`
  z-index: 5;
  position: absolute;
  left: 50px;
  top: 75px;

  @media screen and (min-width: ${breakpoints.sm}) {
    left: 70px;
    top: 100px;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    left: 20px;
    top: 150px;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  max-height: 800px;
  z-index: 7;
`;

const TITLE = styled.div`
  font-weight: 700;
  color: white;
  z-index: 10;

  font-size: 48px;

  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 64px;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 84px;
  }
`;

const Description = styled.div`
  color: white;
  z-index: 10;

  font-size: 16px;
  font-weight: 500;

  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 20px;
    font-weight: 600;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 24px;
    font-weight: 600;
  }
`;

const AboutUsBtn = styled.button`
  color: white;
  font-weight: var(--font-weight-semi_bold);

  margin-top: 20px;
  font-size: 16px;
  padding: 10px 20px;

  border: 2px solid white;
  border-radius: 15px;
  outline: 0;

  transition: background-color 0.3s ease;

  @media screen and (min-width: ${breakpoints.sm}) {
    margin-top: 30px;
    font-size: 18px;
    padding: 15px 30px;

    border: 3px solid white;
    border-radius: 20px;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 40px;
    font-size: 20px;
    padding: 20px 40px;

    border: 3px solid white;
    border-radius: 25px;
  }

  &:hover {
    background-color: rgba(256, 256, 256, 0.1);
    font-weight: var(--font-weight-bold);
  }
`;
