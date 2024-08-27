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
      {data.map((element) => (
        <>
          <Divider borderColor="#f1edaf" />
          <TableLine tableType="content" data={element} />
        </>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 550px;
`;
