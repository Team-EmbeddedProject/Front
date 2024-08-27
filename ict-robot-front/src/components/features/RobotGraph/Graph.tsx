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

type GraphProps = {
  data: Array<{
    time: string;
    all: number;
    plastic: number;
    paper: number;
    general: number;
  }>;
};

export const Graph = ({ data }: GraphProps) => {
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height={400} minWidth={500}>
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
          <Line type="monotone" dataKey="plastic" stroke="#D98573" name="플라스틱" />
          <Line type="monotone" dataKey="paper" stroke="#D9C373" name="종이" />
          <Line type="monotone" dataKey="general" stroke="#B273D9" name="일반쓰레기" />
          <Line type="monotone" dataKey="all" stroke="#7BADD5" name="전체" />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
`;
