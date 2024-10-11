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

import type { AnalysisChangeData } from "@/types";

type GraphProps = {
  data: AnalysisChangeData[];
};

export const ChangeGrpah = ({ data }: GraphProps) => {
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
          <YAxis domain={[-100, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="change" stroke="#7BADD5" name="변화량" />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
`;
