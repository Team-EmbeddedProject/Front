import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

import { RouterPath } from "@/routes/path";
import { breakpoints } from "@/styles/variants";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LogoWrapper>
        <Link to={RouterPath.home}>
          <Title>BCBOT</Title>
        </Link>
      </LogoWrapper>
      <LargeMenuWrapper>
        <LinkButton onClick={() => navigate(RouterPath.aboutUs)}>ABOUT US</LinkButton>
        <LinkButton onClick={() => navigate(RouterPath.robotLog)}>LOG</LinkButton>
        <LinkButton onClick={() => navigate(RouterPath.robotControl)}>CONTROL</LinkButton>
        <LinkButton onClick={() => navigate(RouterPath.robotDistribution)}>MAP</LinkButton>
        <LinkButton onClick={() => navigate(RouterPath.robotGraph)}>GRAPH</LinkButton>
        <LinkButton onClick={() => navigate(RouterPath.analysis)}>ANALYSIS</LinkButton>
      </LargeMenuWrapper>
      <SmallMenuWrapper>
        <Menu>
          <MenuButton>
            <HamburgerIcon width={7} height={7} color="var(--color-primary)" />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => navigate(RouterPath.aboutUs)} width="89%">
              ABOUT US
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => navigate(RouterPath.robotLog)} width="89%">
              LOG
            </MenuItem>
            <MenuItem onClick={() => navigate(RouterPath.robotControl)} width="89%">
              CONTROL
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => navigate(RouterPath.robotDistribution)} width="89%">
              MAP
            </MenuItem>
            <MenuItem onClick={() => navigate(RouterPath.robotGraph)} width="89%">
              GRAPH
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => navigate(RouterPath.analysis)} width="89%">
              ANALYSIS
            </MenuItem>
          </MenuList>
        </Menu>
      </SmallMenuWrapper>
    </Wrapper>
  );
};

export const HEADER_HEIGHT = "54px";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: var(--color-white);
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
  margin-left: 16px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Title = styled.div`
  height: ${HEADER_HEIGHT};
  font-size: var(--logo-size);
  font-weight: var(--font-weight-semi_bold);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LargeMenuWrapper = styled.div`
  position: relative;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-left: ${HEADER_HEIGHT};
  display: None;

  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
  }
`;

const SmallMenuWrapper = styled.div`
  margin-left: auto;
  display: block;

  @media screen and (min-width: ${breakpoints.md}) {
    display: None;
  }
`;

const LinkButton = styled.p`
  font-size: var(--font-size-p);
  font-weight: var(--font-weight-medium);
  color: var(--color-basic);
  text-decoration: none;
  cursor: pointer;

  position: relative;
  width: 120px;
  height: ${HEADER_HEIGHT};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: color 0.3s ease;
  transition: font-size 0.3s ease;

  &:hover {
    font-size: 17px;
    color: var(--color-primary);
    font-weight: var(--font-weight-semi_bold);
  }
`;
