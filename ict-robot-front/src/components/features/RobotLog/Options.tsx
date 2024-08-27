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
      <Select
        variant="outline"
        placeholder="로봇을 선택하세요"
        onChange={handleChange}
        backgroundColor="#fff"
      >
        <option>12345</option>
        <option>22222</option>
        <option>33333</option>
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
