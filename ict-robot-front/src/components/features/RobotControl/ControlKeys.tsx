import styled from "@emotion/styled";
import { useState } from "react";

import { ControlMode } from "./ControlMode";
import { KeyPads } from "./KeyPads";

type Props = {
  setCode: (id: string) => void;
};

export const ControlKeys = ({ setCode }: Props) => {
  const [isControlMode, setMode] = useState(false);

  return (
    <Wrapper>
      <ControlMode isControlMode={isControlMode} setMode={setMode} setCode={setCode} />
      <KeyPads isControlMode={isControlMode} setCode={setCode} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: auto;

  padding: 30px;
`;
