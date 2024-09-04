import "react-datepicker/dist/react-datepicker.css";
import "src/styles/datePicker.css";

import { Select } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

type Props = {
  setRobotId: (id: string) => void;
  fromDate: Date;
  setFromDate: (id: Date) => void;
  toDate: Date;
  setToDate: (id: Date) => void;
};

export const Options = ({ setRobotId }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRobotId(event.target.value);
  };

  console.log(selectedDate);

  return (
    <Wrapper>
      <OptionWrapper>
        <OptionTitle>조회 로봇</OptionTitle>
        <Select variant="outline" defaultValue="all" onChange={handleChange} backgroundColor="#fff">
          <option value="all">전체</option>
          <option>12345</option>
          <option>22222</option>
          <option>33333</option>
        </Select>
      </OptionWrapper>
      <OptionWrapper>
        <OptionTitle>조회 기간</OptionTitle>
        <LineWrapper>
          <DatePicker
            dateFormat="yyyy.MM.dd"
            shouldCloseOnSelect
            minDate={new Date("2000-01-01")}
            maxDate={new Date()}
            className="datePicker"
            selected={new Date("2024-08-15")}
            onChange={(date) => setSelectedDate(date)}
          />
          <LineText>부터</LineText>
        </LineWrapper>
        <LineWrapper>
          <DatePicker
            dateFormat="yyyy.MM.dd"
            shouldCloseOnSelect
            minDate={new Date("2000-01-01")}
            maxDate={new Date()}
            className="datePicker"
            selected={new Date("2024-08-22")}
            onChange={(date) => setSelectedDate(date)}
          />
          <LineText>까지</LineText>
        </LineWrapper>
      </OptionWrapper>
      <OptionWrapper>
        {/* <OptionTitle>조회 기간</OptionTitle>
        <DatePicker selected={fromDate} onChange={(date) => (date ? setFromDate(date) : null)} />
        <DatePicker
          locale="ko"
          dateFormat="yyyy.MM.dd"
          shouldCloseOnSelect
          minDate={new Date("2000-01-01")}
          maxDate={new Date()}
          selected={fromDate}
          onChange={(date) => (date ? setFromDate(date) : null)}
        />
        <DatePicker
          locale="ko"
          dateFormat="yyyy.MM.dd"
          shouldCloseOnSelect
          minDate={new Date("2000-01-01")}
          maxDate={new Date()}
          selected={toDate}
          onChange={(date) => (date ? setToDate(date) : null)}
        /> */}
      </OptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: auto;
`;

const OptionWrapper = styled.div`
  margin-bottom: 28px;
`;

const OptionTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #383838;
  margin-bottom: 10px;
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

// const StyledDatePicker = styled.button``;
