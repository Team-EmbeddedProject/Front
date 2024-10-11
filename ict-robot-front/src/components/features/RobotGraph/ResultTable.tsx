import { Divider } from "@chakra-ui/react";
import styled from "@emotion/styled";

import type { TrashResult } from "@/types";

import { TableLine } from "./TableLine";

type Props = {
  data: TrashResult[];
};

export const ResultTable = ({ data }: Props) => {
  return (
    <Wrapper>
      <TableLine tableType="title" />
      {data.map((element, index) => (
        <>
          <Divider borderColor="#f1edaf" />
          <TableLine tableType="content" key={index} data={element} />
        </>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 550px;
  margin-bottom: 40px;
`;
