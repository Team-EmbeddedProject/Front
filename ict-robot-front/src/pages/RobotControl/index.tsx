import styled from "@emotion/styled";
import { throttle } from "lodash";
import { useEffect, useState } from "react";

import { useControlRobot } from "@/api/hooks/useControlRobot";
import { Sidebar } from "@/components/common/Sidebar";
import { CamStream } from "@/components/features/RobotControl/CamStream";
import { ControlKeys } from "@/components/features/RobotControl/ControlKeys";
import { Options } from "@/components/features/RobotControl/Options";
import { breakpoints } from "@/styles/variants";

export const RobotControlPage = () => {
  const [robotId, setRobotId] = useState("");
  const [robotIp, setRobotIp] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [code, setCode] = useState("");
  const [prevCode, setPrevCode] = useState("prev");

  const controlRobot = useControlRobot();

  useEffect(() => {
    const throttledSendCode = throttle(() => {
      if (robotId && code !== "" && code !== prevCode) {
        setPrevCode(code);
        controlRobot.mutate({ robotId, code });
      }
    }, 1000);

    if (isConnected) {
      throttledSendCode();
    }

    return () => {
      throttledSendCode.cancel();
    };
  }, [isConnected, code, robotId, prevCode, controlRobot]);

  return (
    <Wrapper>
      <Sidebar
        title="로봇 원격 제어"
        description="해변 자율 청소 로봇을 원격으로 제어하는 페이지입니다."
        Options={
          <Options
            isConnected={isConnected}
            robotId={robotId}
            setRobotIp={setRobotIp}
            setIsConnected={setIsConnected}
            setRobotId={setRobotId}
            setCode={setCode}
          />
        }
      />
      <Content>
        {!isConnected ? (
          <Inform>
            <p>연결된 로봇이 없습니다.</p>
            <p>제어할 로봇을 연결해주세요.</p>
          </Inform>
        ) : (
          <InnerContent>
            <CamStream ip={robotId == "1" ? "192.168.0.4" : robotIp} />
            <ControlKeys setCode={setCode} />
          </InnerContent>
        )}
      </Content>
    </Wrapper>
  );
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
  flex-direction: column;

  overflow: scroll;

  justify-content: flex-start;
  padding: 16px 45px;
  @media screen and (min-width: ${breakpoints.md}) {
    align-items: center;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
  }
`;

const InnerContent = styled.div`
  min-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inform = styled.div`
  width: 100%;
  padding: 30px 20px;

  font-size: var(--font-size-p);
  color: var(--color-gray);
`;
