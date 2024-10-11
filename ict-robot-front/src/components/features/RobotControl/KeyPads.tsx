import styled from "@emotion/styled";

import { Grid } from "@/components/common/layouts/Grid";
import { breakpoints } from "@/styles/variants";

import { ArrowBtn } from "./ArrowBtn";

type Props = {
  isControlMode: boolean;
  setCode: (id: string) => void;
};

export const KeyPads = ({ isControlMode, setCode }: Props) => {
  const handleHome = () => {
    setCode("301");
  };
  const handleEnd = () => {
    setCode("302");
  };
  return (
    <Wrapper>
      <div>
        <Grid
          columns={{
            initial: 1,
          }}
          gap={10}
        >
          <StyledBtn onClick={handleHome}>홈으로 돌아가기</StyledBtn>
          <StyledBtn onClick={handleEnd}>강제 종료</StyledBtn>
        </Grid>
      </div>
      {isControlMode && (
        <div>
          <Grid
            columns={{
              initial: 3,
            }}
            gap={10}
          >
            <div />
            <ArrowBtn title="▲" keyboard="ArrowUp" code="401" setCode={setCode} />
            <div />
            <ArrowBtn title="↶" keyboard="ArrowLeft" code="403" setCode={setCode} />
            <ArrowBtn title="▼" keyboard="ArrowDown" code="402" setCode={setCode} />
            <ArrowBtn title="↷" keyboard="ArrowRight" code="404" setCode={setCode} />
          </Grid>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 640px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  flex-direction: row;

  @media screen and (min-width: ${breakpoints.sm}) {
  }
  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

const StyledBtn = styled.button`
  color: var(--color-gray);
  font-size: var(--font-size-h3);

  width: 250px;
  height: 80px;

  border: 2px solid var(--color-gray);
  border-radius: 15px;
  outline: 0;

  transition: background-color 0.3s ease;

  &:hover {
    border-color: var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;
