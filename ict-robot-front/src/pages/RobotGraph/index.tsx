import styled from "@emotion/styled";
import { useState } from "react";

import { Sidebar } from "@/components/common/Sidebar";
import { Graph } from "@/components/features/RobotGraph/Graph";
import { Options } from "@/components/features/RobotGraph/Options";
import { ResultTable } from "@/components/features/RobotGraph/ResultTable";
import type { TrashResult } from "@/types";

export const RobotGraphPage = () => {
  const [robotId, setRobotId] = useState("all");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  console.log(robotId, fromDate, toDate);

  return (
    <Wrapper>
      <Sidebar
        title="시간별 쓰레기"
        title2="수거 결과 조회"
        description="해변 자율 청소 로봇의 시간별 쓰레기 수거 결과 조회 페이지입니다. 쓰레기 수거 결과를 그래프를 통해 확인할 수 있습니다."
        Options={
          <Options
            setRobotId={setRobotId}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
          />
        }
      />
      <Content>
        <InnerWrapper>
          <Graph data={Data} />
        </InnerWrapper>
        <InnerWrapper>
          <ResultTable data={Data} />
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 300px;
  min-width: 768px;
`;

const Content = styled.div`
  margin-left: 300px;
  padding: 16px;
  width: 100%;
  margin-bottom: 30px;
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Data: TrashResult[] = [
  {
    time: "2024.09.03",
    all: 55,
    plastic: 18,
    paper: 12,
    general: 25,
  },
  {
    time: "2024.09.04",
    all: 77,
    plastic: 23,
    paper: 14,
    general: 40,
  },
  {
    time: "2024.09.05",
    all: 56,
    plastic: 19,
    paper: 5,
    general: 32,
  },
  {
    time: "2024.09.06",
    all: 55,
    plastic: 18,
    paper: 12,
    general: 25,
  },
  {
    time: "2024.09.07",
    all: 71,
    plastic: 16,
    paper: 20,
    general: 35,
  },
  {
    time: "2024.09.08",
    all: 51,
    plastic: 24,
    paper: 6,
    general: 21,
  },
  {
    time: "2024.09.09",
    all: 53,
    plastic: 21,
    paper: 10,
    general: 22,
  },
];
