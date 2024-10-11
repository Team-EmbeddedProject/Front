import styled from "@emotion/styled";
import { format } from "date-fns";
import { createContext, useContext, useEffect, useState } from "react";

import { useGetTrashResult } from "@/api/hooks/useGetResult";
import { useGetGraphPeriod } from "@/api/hooks/useGetResultTime";
import { Sidebar } from "@/components/common/Sidebar";
import { Spinner } from "@/components/common/Spinner";
import type { HandleDateType } from "@/components/features/Option/SelectPeriod";
import { Graph } from "@/components/features/RobotGraph/Graph";
import { Options } from "@/components/features/RobotGraph/Options";
import { ResultTable } from "@/components/features/RobotGraph/ResultTable";
import { breakpoints } from "@/styles/variants";

type ContextType = {
  robotId: string;
  minDate: Date;
  maxDate: Date;
  startDate: Date;
  endDate: Date;
  periodLoading: boolean;
  handleRobotId: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleStartDate: HandleDateType;
  handleEndDate: HandleDateType;
};

export const RobotGraphContext = createContext<ContextType | null>(null);

export const useRobotGraph = () => {
  const context = useContext(RobotGraphContext);
  if (!context) {
    throw new Error("useOptions must be used within an OptionsProvider");
  }
  return context;
};

export const RobotGraphPage = () => {
  // select(input)
  const [robotId, setRobotId] = useState("all");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleRobotId = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRobotId(event.target.value);
  };

  // period
  const [minDate, setminDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const { data: period, isLoading: periodLoading } = useGetGraphPeriod(robotId);

  const handleStartDate = (date: Date | null) => {
    if (date) setStartDate(date);
  };

  const handleEndDate = (date: Date | null) => {
    if (date) setEndDate(date);
  };

  // trash result
  const {
    data: trashResult,
    isLoading: resultLoading,
    isError: resultError,
  } = useGetTrashResult({
    robotId,
    startDate: format(startDate, "yyyy.MM.dd"),
    endDate: format(endDate, "yyyy.MM.dd"),
  });

  const contextValue = {
    robotId,
    minDate,
    maxDate,
    startDate,
    endDate,
    periodLoading,
    handleRobotId,
    handleStartDate,
    handleEndDate,
  };

  useEffect(() => {
    setminDate(period?.data ? period.data.start_time : new Date());
    setMaxDate(period?.data ? period.data.end_time : new Date());
  }, [period]);

  useEffect(() => {
    setStartDate(minDate);
  }, [minDate]);

  useEffect(() => {
    setEndDate(maxDate);
  }, [maxDate]);

  return (
    <RobotGraphContext.Provider value={contextValue}>
      <Wrapper>
        <Sidebar
          title="시간별 쓰레기"
          title2="수거 결과 조회"
          description="해변 자율 청소 로봇의 시간별 쓰레기 수거 결과 조회 페이지입니다. 쓰레기 수거 결과를 그래프를 통해 확인할 수 있습니다."
          Options={<Options />}
        />
        <Content>
          {periodLoading || resultLoading ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : resultError ? (
            <p>데이터를 불러오는 중 에러가 발생했습니다.</p>
          ) : !trashResult || trashResult.data.length == 0 ? (
            <p>해당 기간에 조회할 데이터가 없습니다.</p>
          ) : (
            <>
              <InnerWrapper>
                <Graph data={trashResult ? trashResult.data : []} />
              </InnerWrapper>
              <InnerWrapper>
                <ResultTable data={trashResult ? trashResult.data : []} />
              </InnerWrapper>
            </>
          )}
        </Content>
      </Wrapper>
    </RobotGraphContext.Provider>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 300px;
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  height: calc(100vh - 54px);
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  overflow: scroll;

  justify-content: flex-start;
  padding: 30px 45px;

  @media screen and (min-width: ${breakpoints.md}) {
    align-items: center;
    padding: 45px 45px 0;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  max-width: 800px;

  @media screen and (min-width: 1000px) {
    align-items: center;
  }
`;
