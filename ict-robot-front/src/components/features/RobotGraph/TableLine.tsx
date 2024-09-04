import styled from "@emotion/styled";

import type { TrashResult } from "@/types";

type Props = {
  tableType: string;
  data?: TrashResult;
};

const TABLE_WIDTH = {
  TIME: "150px",
  PLASTIC: "100px",
  PAPER: "100px",
  GENERAL: "100px",
  ALL: "100px",
};

export const TableLine = ({ tableType, data }: Props) => {
  if (tableType == "title") {
    return (
      <Wrapper>
        <Column width={TABLE_WIDTH.TIME} color="#91a543">
          날짜
        </Column>
        <Column width={TABLE_WIDTH.PLASTIC} color="#91a543">
          플라스틱
        </Column>
        <Column width={TABLE_WIDTH.PAPER} color="#91a543">
          종이팩
        </Column>
        <Column width={TABLE_WIDTH.GENERAL} color="#91a543">
          캔
        </Column>
        <Column width={TABLE_WIDTH.ALL} color="#91a543">
          전체
        </Column>
      </Wrapper>
    );
  } else if (data) {
    return (
      <Wrapper>
        <Column width={TABLE_WIDTH.TIME} color="#383838">
          {data.time}
        </Column>
        <Column width={TABLE_WIDTH.PLASTIC} color="#383838">
          {data.general}
        </Column>
        <Column width={TABLE_WIDTH.PAPER} color="#383838">
          {data.paper}
        </Column>
        <Column width={TABLE_WIDTH.GENERAL} color="#383838">
          {data.plastic}
        </Column>
        <Column width={TABLE_WIDTH.ALL} color="#383838">
          {data.all}
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
