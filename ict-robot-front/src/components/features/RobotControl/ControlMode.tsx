import { Switch } from "@chakra-ui/react";
import styled from "@emotion/styled";

type Props = {
  isControlMode: boolean;
  setMode: (id: boolean) => void;
  setCode: (id: string) => void;
};

export const ControlMode = ({ isControlMode, setMode, setCode }: Props) => {
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked);
    setCode(event.target.checked ? "200" : "100");
  };

  return (
    <Wrapper>
      <Title>로봇 모드</Title>
      <ModeState>
        {isControlMode ? (
          <ControlModeSpan>수동 모드</ControlModeSpan>
        ) : (
          <AutoModeSpan>자동 모드</AutoModeSpan>
        )}
      </ModeState>
      <Switch
        id="robot-mode"
        size="lg"
        colorScheme="blue"
        isChecked={isControlMode}
        onChange={handleSwitchChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0;
`;

const Title = styled.div`
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  color: var(--color-basic);
`;

const ModeState = styled.div`
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  margin-left: 20px;
  margin-right: 10px;
`;

const AutoModeSpan = styled.span`
  color: var(--color-gray);
`;

const ControlModeSpan = styled.span`
  color: var(--color-primary);
`;
