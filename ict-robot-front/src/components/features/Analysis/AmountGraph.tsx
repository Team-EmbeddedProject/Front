import styled from "@emotion/styled";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { AnalysisAmountData } from "@/types";

type GraphProps = {
  data: AnalysisAmountData[];
};

export const AmountGraph = ({ data }: GraphProps) => {
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height={500} minWidth={550}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="plastic" stroke="#CB55DD" name="플라스틱" />
          <Line type="monotone" dataKey="paper" stroke="#FFCB77" name="종이" />
          <Line type="monotone" dataKey="can" stroke="#FE6D73" name="캔" />
          <Line type="monotone" dataKey="can" stroke="#40CBA3" name="가죽" />
          <Line type="monotone" dataKey="can" stroke="#5759B7" name="유리" />
          <Line type="monotone" dataKey="all" stroke="#A4A4A4" name="전체" />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
`;
