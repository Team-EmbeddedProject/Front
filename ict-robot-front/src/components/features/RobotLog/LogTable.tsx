import { Divider } from "@chakra-ui/react";
import styled from "@emotion/styled";

import type { RobotLog } from "@/types";

import { TableLine } from "./TableLine";

type Props = {
  data: RobotLog[];
};

export const LogTable = ({ data }: Props) => {
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
  width: auto;
`;
