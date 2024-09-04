import { Select } from "@chakra-ui/react";
import styled from "@emotion/styled";

type Props = {
  setRobotId: (id: string) => void;
};

export const Options = ({ setRobotId }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRobotId(event.target.value);
  };
  return (
    <Wrapper>
      <OptionTitle>조회 로봇</OptionTitle>
      <Select variant="outline" defaultValue="all" onChange={handleChange} backgroundColor="#fff">
        <option value="all">전체</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: auto;
`;

const OptionTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #383838;
  margin-bottom: 10px;
`;
