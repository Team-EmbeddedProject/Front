import styled from "@emotion/styled";

import { Sidebar } from "@/components/common/Sidebar";
import { MapContainer } from "@/components/features/RobotDistribution/Map";

const positions = [
  {
    robotId: "12345",
    latlng: { lat: 33.450705, lng: 126.570677 },
    time: "2024.09.03 13:05",
    trashType: "플라스틱",
  },
  {
    robotId: "12345",
    latlng: { lat: 33.450936, lng: 126.569477 },
    time: "2024.09.03 13:05",
    trashType: "플라스틱",
  },
  {
    robotId: "12345",
    latlng: { lat: 33.450879, lng: 126.56994 },
    time: "2024.09.03 13:05",
    trashType: "종이",
  },
  {
    robotId: "12345",
    latlng: { lat: 33.451393, lng: 126.570738 },
    time: "2024.09.03 13:05",
    trashType: "일반 쓰레기",
  },
];

export const RobotDistributionPage = () => {
  return (
    <Wrapper>
      <Sidebar
        title="쓰레기 수거 결과"
        title2="분포도 조회"
        description="해변 자율 청소 로봇의 쓰레기 수거 결과 조회 페이지입니다. 쓰레기 위치와 정보를 확인할 수 있습니다."
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
