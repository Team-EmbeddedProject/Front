import styled from "@emotion/styled";

import { useGetAnalysisAmount } from "@/api/hooks/useGetAnalysisAmount";
import { useGetAnalysisChange } from "@/api/hooks/useGetAnalysisChange";
import { Sidebar } from "@/components/common/Sidebar";
import { Spinner } from "@/components/common/Spinner";
import { AmountGraph } from "@/components/features/Analysis/AmountGraph";
import { ChangeGrpah } from "@/components/features/Analysis/ChangeGraph";
import { breakpoints } from "@/styles/variants";

export const AnalysisPage = () => {
  const {
    data: amountData,
    isLoading: amountLoading,
    isError: amountError,
  } = useGetAnalysisAmount();
  const {
    data: changeData,
    isLoading: changeLoading,
    isError: changeError,
  } = useGetAnalysisChange();

  console.log(amountData, changeData);

  return (
    <Wrapper>
      <Sidebar
        title="분석 결과 조회"
        description="시기별 쓰레기 발생량 및 변화량 분석/예측 결과 조회 페이지입니다."
      />
      <Content>
        <InnerWrapper>
          <Title>쓰레기 발생량</Title>
          {amountLoading ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : amountError ? (
            <p>데이터를 불러오는 중 에러가 발생했습니다.</p>
          ) : !amountData || amountData.data.length == 0 ? (
            <p>해당 기간에 조회할 데이터가 없습니다.</p>
          ) : (
            <AmountGraph data={amountData.data} />
          )}
        </InnerWrapper>
        <InnerWrapper>
          <Title>쓰레기 발생량 변화량</Title>
          {changeLoading ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : changeError ? (
            <p>데이터를 불러오는 중 에러가 발생했습니다.</p>
          ) : !changeData || changeData.data.length == 0 ? (
            <p>해당 기간에 조회할 데이터가 없습니다.</p>
          ) : (
            <ChangeGrpah data={changeData.data} />
          )}
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 300px;
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Content = styled.div`
  position: relative;
  height: calc(100vh - 54px);
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  overflow: scroll;

  justify-content: flex-start;
  padding: 30px 45px;

  @media screen and (min-width: ${breakpoints.md}) {
    align-items: center;
    padding: 45px 45px 0;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Title = styled.div`
  width: 100%;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 30px;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 30px;
    margin-top: 10px;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 0;

  @media screen and (min-width: 1000px) {
    align-items: center;
    margin-top: 0;
    padding: 0 10px;
  }
`;
