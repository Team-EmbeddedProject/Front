import styled from "@emotion/styled";

import type { RobotLog } from "@/types";

type Props = {
  tableType: string;
  data?: RobotLog;
};

const TABLE_WIDTH = {
  TIME: "150px",
  ID: "100px",
  LOCATION: "200px",
  BATTERY: "100px",
};

export const TableLine = ({ tableType, data }: Props) => {
  if (tableType == "title") {
    return (
      <Wrapper>
        <Column width={TABLE_WIDTH.TIME} color="#91a543">
          TIME
        </Column>
        <Column width={TABLE_WIDTH.ID} color="#91a543">
          ROBOT ID
        </Column>
        <Column width={TABLE_WIDTH.LOCATION} color="#91a543">
          LOCATION
        </Column>
        <Column width={TABLE_WIDTH.BATTERY} color="#91a543">
          BATTERY(%)
        </Column>
      </Wrapper>
    );
  } else if (data) {
    return (
      <Wrapper>
        <Column width={TABLE_WIDTH.TIME} color="#383838">
          {data.time}
        </Column>
        <Column width={TABLE_WIDTH.ID} color="#383838">
          {data.id}
        </Column>
        <Column width={TABLE_WIDTH.LOCATION} color="#383838">
          ({data.location.latitude}, {data.location.longitude})
        </Column>
        <Column width={TABLE_WIDTH.BATTERY} color="#383838">
          {data.battery}
        </Column>
      </Wrapper>
    );
  } else {
    return <Wrapper />;
  }
};

const Wrapper = styled.div`
  display: flex;
`;

const Column = styled.div<{ width: string; color: string }>`
  width: ${({ width }) => width};
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ color }) => color};
`;
