import styled from "@emotion/styled";
import { useState } from "react";

import { Sidebar } from "@/components/common/Sidebar";
import { LogTable } from "@/components/features/RobotLog/LogTable";
import { Options } from "@/components/features/RobotLog/Options";

export const RobotLogPage = () => {
  const [robotId, setRobotId] = useState("");

  console.log(setRobotId);
  console.log(Data);

  return (
    <Wrapper>
      <Sidebar
        title="로봇 로그 조회"
        description="해변 자율 청소 로봇 로그 조회 페이지입니다."
        Options={<Options setRobotId={setRobotId} />}
      />
      <Content>{robotId != "" && <LogTable data={Data} />}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 300px;
  min-width: 768px;
`;

const Content = styled.div`
  padding: 16px;
  margin-left: 300px;
`;

const Data = [
  {
    time: "2024.09.03 13:05",
    id: "12345",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "95",
  },
  {
    time: "2024.09.03 13:05",
    id: "12345",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "95",
  },
  {
    time: "2024.09.03 13:05",
    id: "12345",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "95",
  },
  {
    time: "2024.09.03 13:05",
    id: "12345",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "95",
  },
  {
    time: "2024.09.03 13:05",
    id: "12345",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "95",
  },
  {
    time: "2024.09.03 13:05",
    id: "12345",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "95",
  },
  {
    time: "2024.09.03 13:05",
    id: "12345",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "95",
  },
  {
    time: "2024.09.03 13:05",
    id: "12345",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "95",
  },
];
