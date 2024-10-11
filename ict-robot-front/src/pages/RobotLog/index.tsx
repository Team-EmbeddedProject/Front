import styled from "@emotion/styled";
import { useState } from "react";

import { useGetRobotLog } from "@/api/hooks/useGetRobotLog";
import { Sidebar } from "@/components/common/Sidebar";
import { Spinner } from "@/components/common/Spinner";
import { LogTable } from "@/components/features/RobotLog/LogTable";
import { Options } from "@/components/features/RobotLog/Options";
import { breakpoints } from "@/styles/variants";

export const RobotLogPage = () => {
  const [robotId, setRobotId] = useState("all");
  const { data, isLoading } = useGetRobotLog(robotId);

  return (
    <Wrapper>
      <Sidebar
        title="로봇 로그 조회"
        description="해변 자율 청소 로봇 로그 조회 페이지입니다."
        Options={<Options setRobotId={setRobotId} />}
      />
      <Content>
        {isLoading ? (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        ) : !data || data.data.length == 0 ? (
          <p>조회할 데이터가 없습니다.</p>
        ) : (
          robotId != "" && <LogTable data={data.data} />
        )}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 300px;
`;

const Content = styled.div`
  position: relative;
  height: calc(100vh - 54px);
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  overflow: scroll;

  justify-content: flex-start;
  padding: 16px 45px;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
  }
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;
