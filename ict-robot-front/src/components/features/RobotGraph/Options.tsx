import styled from "@emotion/styled";

import { useGetRobots } from "@/api/hooks/useGetRobots.";
import { SelectPeriod } from "@/components/features/Option/SelectPeriod";
import { SelectRobot } from "@/components/features/Option/SelectRobot";
import { useRobotGraph } from "@/pages/RobotGraph";

export const Options = () => {
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
  } = useRobotGraph();

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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: auto;
`;
