import styled from "@emotion/styled";
import { format } from "date-fns";
import { createContext, useContext, useEffect, useState } from "react";

import { useGetDistribution } from "@/api/hooks/useGetDisribution";
import { useGetGraphPeriod } from "@/api/hooks/useGetResultTime";
import { Sidebar } from "@/components/common/Sidebar";
import { Spinner } from "@/components/common/Spinner";
import type { HandleDateType } from "@/components/features/Option/SelectPeriod";
import { MapContainer } from "@/components/features/RobotDistribution/Map";
import { Options } from "@/components/features/RobotDistribution/Options";
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

export const RobotDistributionContext = createContext<ContextType | null>(null);

export const useRobotDistribution = () => {
  const context = useContext(RobotDistributionContext);
  if (!context) {
    throw new Error("useOptions must be used within an OptionsProvider");
  }
  return context;
};

export const RobotDistributionPage = () => {
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

  //distribution result
  const {
    data = mockData,
    isLoading,
    isError,
    error,
  } = useGetDistribution({
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

  useEffect(() => {
    if (isError) {
      alert(
        error instanceof Error
          ? "데이터를 불러오는데 오류가 발생했습니다: " + error.message
          : "데이터를 불러오는데 오류가 발생했습니다.",
      );
    }
  }, [isError, error]);

  return (
    <RobotDistributionContext.Provider value={contextValue}>
      <Wrapper>
        <Sidebar
          title="쓰레기 수거 결과"
          title2="분포도 조회"
          description="해변 자율 청소 로봇의 쓰레기 수거 결과 조회 페이지입니다. 쓰레기 위치와 정보를 확인할 수 있습니다."
          Options={
            <Options
              message={
                !isLoading && (!data || data.data.length == 0)
                  ? "* 해당 기간에 조회할 데이터가 없습니다."
                  : ""
              }
            />
          }
        />
        <Content>
          {isLoading ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : (
            <MapContainer data={isError ? [] : data ? data.data : []} />
          )}
        </Content>
      </Wrapper>
    </RobotDistributionContext.Provider>
  );
};

const mockData = {
  data: [
    {
      robotId: "mock",
      latlng: {
        lat: 35.887445,
        lng: 128.611655,
      },
      time: "",
      trashType: "plastic",
    },
  ],
};

const Wrapper = styled.div`
  display: flex;
  min-height: 300px;
`;

const Content = styled.div`
  position: relative;
  height: calc(100vh - 54px);
  flex: 1 1 auto;
  display: flex;

  justify-content: flex-start;

  @media screen and (min-width: ${breakpoints.md}) {
    justify-content: center;
  }
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
