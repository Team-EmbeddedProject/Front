import styled from "@emotion/styled";
import type { LinkProps } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { breakpoints } from "@/styles/variants";

type Props = {
  title: string;
  description: string;
  next: LinkProps["to"];
};

export const IntroMenu = ({ title, description, next }: Props) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Detail>{description}</Detail>
      <BtnWrapper>
        <LinkBtn onClick={() => navigate(next)}>바로가기</LinkBtn>
      </BtnWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  border: 3px solid var(--color-primary);
  border-radius: 15px;

  margin: 10px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease;

  @media screen and (min-width: ${breakpoints.sm}) {
    border-radius: 20px;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    border-radius: 25px;
  }
`;

const Title = styled.p`
  color: var(--color-primary);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  letter-spacing: normal;
  @media screen and (min-width: ${breakpoints.sm}) {
    letter-spacing: -1px;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    letter-spacing: normal;
  }
`;

const Detail = styled.p`
  margin-top: 5px;
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  font-size: 16px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

const LinkBtn = styled.button`
  color: var(--color-primary);
  font-weight: 600;

  margin-top: 20px;
  font-size: var(--font-size-p);
  padding: 10px 25px;

  border: 2px solid var(--color-primary);
  border-radius: 15px;
  outline: 0;

  transition: background-color 0.3s ease;

  width: 100%;
  @media screen and (min-width: ${breakpoints.sm}) {
    width: auto;
  }

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;
