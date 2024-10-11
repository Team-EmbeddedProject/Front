import styled from "@emotion/styled";

import { useGetRobots } from "@/api/hooks/useGetRobots.";
import { SelectPeriod } from "@/components/features/Option/SelectPeriod";
import { SelectRobot } from "@/components/features/Option/SelectRobot";
import { useRobotDistribution } from "@/pages/RobotDistribution";

type Props = {
  message: string;
};

export const Options = ({ message }: Props) => {
  const { data: robotList, isLoading: robotLoading } = useGetRobots();
  const {
    periodLoading,
    minDate,
    maxDate,
    startDate,
    endDate,
    handleRobotId,
    handleStartDate,
    handleEndDate,
  } = useRobotDistribution();

  return (
    <Wrapper>
      <SelectRobot
        loading={robotLoading}
        data={robotList?.data ? robotList.data : []}
        handleChange={handleRobotId}
      />
      <SelectPeriod
        isLoading={periodLoading}
        minDate={minDate}
        maxDate={maxDate}
        startDate={startDate}
        endDate={endDate}
        handleStartDate={handleStartDate}
        handleEndDate={handleEndDate}
      />
      <Message>{message}</Message>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: auto;
`;

const Message = styled.p`
  font-size: var(--font-size-p);
  font-weight: var(--font-weight-light);
  color: var(--color-gray);
`;
