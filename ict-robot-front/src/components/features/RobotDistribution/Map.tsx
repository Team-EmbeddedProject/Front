import styled from "@emotion/styled";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import marker_can from "@/assets/marker_can.png";
import marker_pack from "@/assets/marker_pack.png";
import marker_plastic from "@/assets/marker_plastic.png";
import type { MapData } from "@/types";

type Props = {
  data: MapData[];
};

export const MapContainer = ({ data }: Props) => {
  const [activeInfoWindow, setActiveInfoWindow] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setActiveInfoWindow(index);
  };

  const handleMouseOut = () => {
    setActiveInfoWindow(null);
  };

  return (
    <Map
      center={data.length != 0 ? data[0].latlng : { lat: 35.887445, lng: 128.611655 }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {data.map((element, index) => (
        <MapMarker
          key={index}
          position={element.latlng}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
          image={{
            src:
              element.trashType == "plastic"
                ? marker_plastic
                : element.trashType == "can"
                  ? marker_can
                  : marker_pack,
            size: {
              width: 18,
              height: 18,
            },
          }}
        >
          {activeInfoWindow == index && (
            <Detail>
              <DetailLine>
                <DetailTitle>수거 로봇</DetailTitle>
                <DetailContent>{element.robotId}</DetailContent>
              </DetailLine>
              <DetailLine>
                <DetailTitle>수거 시간</DetailTitle>
                <DetailContent>{element.time}</DetailContent>
              </DetailLine>
              <DetailLine>
                <DetailTitle>쓰레기 종류</DetailTitle>
                <DetailContent>{element.trashType}</DetailContent>
              </DetailLine>
            </Detail>
          )}
        </MapMarker>
      ))}
    </Map>
  );
};
const Detail = styled.div`
  width: 300px;
  padding: 16px 24px;
`;
const DetailLine = styled.div`
  display: flex;
  margint: 5px 0;
`;
const DetailTitle = styled.div`
  font-weight: 300;
`;
const DetailContent = styled.div`
  margin-left: auto;
  color: #91a543;
`;
