import { Divider } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { HEADER_HEIGHT } from "@/components/features/Layout/Header";

type SidebarProps = {
  title: string;
  title2?: string;
  description: string;
  Options?: React.ReactNode;
};

export const Sidebar = ({ title, title2, description, Options }: SidebarProps) => {
  return (
    <SidebarWrapper>
      <Content>
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
  position: fixed;
  top: ${HEADER_HEIGHT};
  left: 0;
  min-width: 300px;
  width: 300px;
  height: calc(100vh - ${HEADER_HEIGHT});
  background-color: #fafcfd;
  padding: 30px 30px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  overflow-y: auto;
  z-index: 9999;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 16px;
`;
