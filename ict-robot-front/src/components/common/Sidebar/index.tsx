import { Divider } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";

import { HEADER_HEIGHT } from "@/components/features/Layout/Header";

type SidebarProps = {
  title: string;
  title2?: string;
  description: string;
  Options?: React.ReactNode;
};

export const Sidebar = ({ title, title2, description, Options }: SidebarProps) => {
  const [isFold, setIsFold] = useState(false);

  const handleFold = () => {
    setIsFold(!isFold);
  };

  return isFold ? (
    <OuterFoldBtn onClick={handleFold}>{"▶"}</OuterFoldBtn>
  ) : (
    <SidebarWrapper>
      <Content>
        <InnerFoldBtn onClick={handleFold}>{"◀"}</InnerFoldBtn>
        <TitleWrapper>
          <Title>{title}</Title>
          {title2 && <Title>{title2}</Title>}
          <Description>{description}</Description>
        </TitleWrapper>
        <Divider color="#f5f5f5" />
        <OptionWrapper>{Options}</OptionWrapper>
      </Content>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  min-width: 300px;
  width: 300px;
  height: calc(100vh - ${HEADER_HEIGHT});
  background-color: var(--color-sidebar_back);
  padding: 30px 30px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  overflow-y: auto;
  z-index: 10;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const InnerFoldBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;

  width: 30px;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-lightgray);
  outline: 0;
`;

const OuterFoldBtn = styled.button`
  position: absolute;
  margin-top: 30px;
  width: 30px;
  height: 30px;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-lightgray);
  outline: 0;
  line-height: 0;

  background-color: var(--color-sidebar_back);
  border: 1px solid var(--color-lightgray);
  z-index: 10;
`;

const TitleWrapper = styled.div`
  margin-bottom: 24px;
`;

const OptionWrapper = styled.div`
  margin-top: 24px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  color: var(--basic);
`;

const Description = styled.p`
  font-size: var(--font-size-p);
  font-weight: var(--font-weight-light);
  color: var(--color-darkgray);
  margin-top: 16px;
`;
