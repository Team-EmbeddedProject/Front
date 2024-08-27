import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

import { RouterPath } from "@/routes/path";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LogoWrapper>
        <Link to={RouterPath.home}>
          <Title>TITLE</Title>
        </Link>
      </LogoWrapper>
      <MenuWrapper>
        <LinkButton onClick={() => navigate(RouterPath.aboutUs)}>ABOUT US</LinkButton>
        <LinkButton onClick={() => navigate(RouterPath.robotLog)}>LOG</LinkButton>
        <LinkButton onClick={() => navigate(RouterPath.robotDistribution)}>MAP</LinkButton>
        <LinkButton onClick={() => navigate(RouterPath.robotGraph)}>GRAPH</LinkButton>
      </MenuWrapper>
    </Wrapper>
  );
};

export const HEADER_HEIGHT = "54px";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 768px;
  height: ${HEADER_HEIGHT};
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 16px;
  z-index: 9999;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${HEADER_HEIGHT};
  padding-left: 16px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Title = styled.div`
  height: ${HEADER_HEIGHT};
  font-size: 24px;
  font-weight: 500;
  color: #7badd5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${HEADER_HEIGHT};
`;

const LinkButton = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  width: 120px;
  height: ${HEADER_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    font-size: 16px;
    color: #7badd5;
    font-weight: 500;
  }
`;
