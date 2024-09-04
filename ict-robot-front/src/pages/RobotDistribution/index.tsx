import styled from "@emotion/styled";
import { useState } from "react";

import { Sidebar } from "@/components/common/Sidebar";
import { MapContainer } from "@/components/features/RobotDistribution/Map";
import { Options } from "@/components/features/RobotDistribution/Options";

export const RobotDistributionPage = () => {
  const [robotId, setRobotId] = useState("all");

  console.log(robotId);

  return (
    <Wrapper>
      <Sidebar
        title="쓰레기 수거 결과"
        title2="분포도 조회"
        description="해변 자율 청소 로봇의 쓰레기 수거 결과 조회 페이지입니다. 쓰레기 위치와 정보를 확인할 수 있습니다."
        Options={<Options setRobotId={setRobotId} />}
      />
      <Content>
        <MapContainer data={positions} />
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
`;

const positions = [
  {
    robotId: "1",
    latlng: { lat: 36.0560219, lng: 129.3784538 },
    time: "2024.08.22 13:05",
    trashType: "플라스틱",
  },
  {
    robotId: "1",
    latlng: { lat: 36.056114, lng: 129.3782957 },
    time: "2024.08.22 13:08",
    trashType: "플라스틱",
  },
  {
    robotId: "1",
    latlng: { lat: 36.0560963, lng: 129.3782864 },
    time: "2024.08.22 13:14",
    trashType: "종이팩",
  },
  {
    robotId: "1",
    latlng: { lat: 36.0559756, lng: 129.3782477 },
    time: "2024.08.22 13:15",
    trashType: "캔",
  },
  {
    robotId: "1",
    latlng: { lat: 36.0559042, lng: 129.3783221 },
    time: "2024.08.22 13:18",
    trashType: "플라스틱",
  },
  {
    robotId: "1",
    latlng: { lat: 36.0558766, lng: 129.3784786 },
    time: "2024.08.22 13:26",
    trashType: "종이팩",
  },
  {
    robotId: "1",
    latlng: { lat: 36.0558728, lng: 129.3782803 },
    time: "2024.08.22 13:30",
    trashType: "플라스틱",
  },
  {
    robotId: "1",
    latlng: { lat: 36.0556787, lng: 129.3783577 },
    time: "2024.08.22 13:33",
    trashType: "종이팩",
  },
  {
    robotId: "1",
    latlng: { lat: 36.0557238, lng: 129.3780959 },
    time: "2024.08.22 13:37",
    trashType: "캔",
  },
];
