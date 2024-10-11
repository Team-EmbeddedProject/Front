import { Select } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { Spinner } from "@/components/common/Spinner";
import type { RobotData } from "@/types";

type Props = {
  loading: boolean;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  data: RobotData[];
};

export const SelectRobot = ({ loading, handleChange, data }: Props) => {
  return (
    <OptionWrapper>
      <OptionTitle>로봇</OptionTitle>
      {loading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <Select variant="outline" defaultValue="all" onChange={handleChange} backgroundColor="#fff">
          <option value="all">전체</option>
          {data.map((robot) => (
            <option key={robot.id} value={robot.id}>
              [{robot.id}] {robot.name}
            </option>
          ))}
        </Select>
      )}
    </OptionWrapper>
  );
};

const OptionWrapper = styled.div`
  margin-bottom: 28px;
`;

const OptionTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #383838;
  margin-bottom: 10px;
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;
