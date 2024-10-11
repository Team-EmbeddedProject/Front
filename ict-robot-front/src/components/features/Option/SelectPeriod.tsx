import "react-datepicker/dist/react-datepicker.css";
import "src/styles/datePicker.css";

import styled from "@emotion/styled";
import DatePicker from "react-datepicker";

import { Spinner } from "@/components/common/Spinner";

export type HandleDateType = (
  date: Date | null,
  event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
) => void;

type Props = {
  isLoading: boolean;
  minDate: Date;
  maxDate: Date;
  startDate: Date;
  endDate: Date;
  handleStartDate: HandleDateType;
  handleEndDate: HandleDateType;
};

export const SelectPeriod = ({
  isLoading,
  minDate,
  maxDate,
  startDate,
  endDate,
  handleStartDate,
  handleEndDate,
}: Props) => {
  return (
    <OptionWrapper>
      <OptionTitle>조회 기간</OptionTitle>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <>
          <LineWrapper>
            <DatePicker
              dateFormat="yyyy.MM.dd"
              shouldCloseOnSelect
              minDate={minDate}
              maxDate={endDate}
              className="datePicker"
              selected={startDate}
              onChange={handleStartDate}
            />
            <LineText>부터</LineText>
          </LineWrapper>
          <LineWrapper>
            <DatePicker
              dateFormat="yyyy.MM.dd"
              shouldCloseOnSelect
              minDate={startDate}
              maxDate={maxDate}
              className="datePicker"
              selected={endDate}
              onChange={handleEndDate}
            />
            <LineText>까지</LineText>
          </LineWrapper>
        </>
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

const LineWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const LineText = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;
