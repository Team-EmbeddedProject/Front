import { Select } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { useConnectRobot } from "@/api/hooks/useConnectRobot";
import { useGetRobots } from "@/api/hooks/useGetRobots.";
import { Spinner } from "@/components/common/Spinner";

type Props = {
  isConnected: boolean;
  robotId: string;
  setRobotIp: (id: string) => void;
  setIsConnected: (id: boolean) => void;
  setRobotId: (id: string) => void;
  setCode: (id: string) => void;
};

export const Options = ({
  setRobotId,
  setIsConnected,
  setRobotIp,
  isConnected,
  robotId,
  setCode,
}: Props) => {
  const { data, isLoading } = useGetRobots();
  const connectRobot = useConnectRobot();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRobotId(event.target.value);
    const foundIp = data ? data.data.find((robot) => robot.id === event.target.value) : "";
    setRobotIp(foundIp ? foundIp.ip : "");
  };

  const ConnectRobot = () => {
    if (robotId == "") {
      alert("로봇을 선택해주세요.");
    } else {
      connectRobot.mutate(robotId);
      setIsConnected(true);
    }
  };

  const DisConnectRobot = () => {
    if (window.confirm(robotId + " 로봇과 연결을 끊으시겠습니까?")) {
      setCode("000");
      alert(robotId + " 로봇과 연결을 끊었습니다.");
      window.location.reload();
    }
  };

  return (
    <Wrapper>
      {!isConnected ? (
        <>
          <OptionTitle>로봇 선택</OptionTitle>
          {isLoading ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : (
            <Select
              variant="outline"
              placeholder="로봇을 선택하세요"
              onChange={handleChange}
              backgroundColor="#fff"
            >
              {data?.data.map((robot) => (
                <option key={robot.id} value={robot.id}>
                  {robot.id}
                </option>
              ))}
            </Select>
          )}
          <OptionBtn onClick={ConnectRobot}>연결하기</OptionBtn>
        </>
      ) : (
        <>
          <OptionTitle>현재 연결된 로봇: {robotId}</OptionTitle>
          <OptionBtn onClick={DisConnectRobot}>연결끊기</OptionBtn>
          <Description>
            프로그램을 종료하거나, 다른 페이지로 이동하기 전에 반드시 "연결 끊기"를 진행해주십시오.
          </Description>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

const OptionTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #383838;
  margin-bottom: 10px;
`;

const OptionBtn = styled.button`
  color: var(--color-primary);
  font-weight: 600;

  margin-top: 20px;
  font-size: var(--font-size-p);
  padding: 10px 25px;

  border: 2px solid var(--color-primary);
  border-radius: 15px;
  outline: 0;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;

const Description = styled.div`
  margin-top: 20px;
  font-size: var(--font-size-p);
  font-weight: var(--font-weight-light);
  color: var(--color-gray);
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;
