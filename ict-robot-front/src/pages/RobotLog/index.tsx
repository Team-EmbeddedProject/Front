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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Content = styled.div`
  padding: 16px;
  margin-left: 300px;
`;

const Data = [
  {
    time: "2024.08.22 13:05",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "95",
  },
  {
    time: "2024.08.22 13:06",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "95",
  },
  {
    time: "2024.08.22 13:07",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "95",
  },
  {
    time: "2024.08.22 13:08",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "94",
  },
  {
    time: "2024.08.22 13:09",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "94",
  },
  {
    time: "2024.08.22 13:10",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "93",
  },
  {
    time: "2024.08.22 13:11",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "93",
  },
  {
    time: "2024.08.22 13:12",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "93",
  },
  {
    time: "2024.08.22 13:13",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "92",
  },
  {
    time: "2024.08.22 13:14",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "92",
  },
  {
    time: "2024.08.22 13:15",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "92",
  },
  {
    time: "2024.08.22 13:16",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "91",
  },
  {
    time: "2024.08.22 13:17",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "91",
  },
  {
    time: "2024.08.22 13:18",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "91",
  },
  {
    time: "2024.08.22 13:19",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "91",
  },
  {
    time: "2024.08.22 13:20",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "90",
  },
  {
    time: "2024.08.22 13:21",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "90",
  },
  {
    time: "2024.08.22 13:22",
    id: "1",
    location: {
      latitude: "37.636446",
      longitude: "129.045045",
    },
    battery: "90",
  },
];
