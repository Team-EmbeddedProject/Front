import styled from "@emotion/styled";

import { Grid } from "@/components/common/layouts/Grid";
import { RouterPath } from "@/routes/path";
import { breakpoints } from "@/styles/variants";

import { IntroMenu } from "./IntroMenu";

export const IntroSection = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Grid
          columns={{
            initial: 1,
            sm: 2,
          }}
          gap={4}
        >
          <IntroMenu
            title="로봇 로그 조회"
            description="로봇 로그를 조회할 수 있습니다."
            next={RouterPath.robotLog}
          />
          <IntroMenu
            title="로봇 원격 제어"
            description="로봇의 Cam을 확인하고, 홈으로 돌아가기, 강제 종료, 로봇 조종 등 로봇을 원격으로 제어할 수 있습니다."
            next={RouterPath.robotControl}
          />
          <IntroMenu
            title="쓰레기 수거 결과 분포도 조회"
            description="로봇이 수거한 쓰레기의 위치를 지도 위에 표시된 마커로 확인할 수 있습니다."
            next={RouterPath.robotDistribution}
          />
          <IntroMenu
            title="시간별 쓰레기 수거 결과 조회"
            description="일자별로 로봇이 수거한 쓰레기의 종류와 양을 그래프와 표로 조회할 수 있습니다."
            next={RouterPath.robotGraph}
          />
          <IntroMenu
            title="분석 결과 조회"
            description="시기별로 쓰레기 발생량 및 변화량을 분석하고 패턴을 예측한 결과를 그래프로 조회할 수 있습니다."
            next={RouterPath.analysis}
          />
        </Grid>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 20px 0;
  padding: 0 40px;

  @media screen and (min-width: ${breakpoints.sm}) {
    margin: 45px 0;
    padding: 0 20px;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    margin: 60px 0;
    padding: 0;
  }
`;
