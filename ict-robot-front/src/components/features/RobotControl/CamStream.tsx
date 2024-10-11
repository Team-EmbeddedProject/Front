import styled from "@emotion/styled";
import { useState } from "react";

type Props = {
  ip: string;
};

export const CamStream = ({ ip }: Props) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  if (ip == "") {
    return (
      <Wrapper>
        <p>Unable to load camera stream.</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {error ? (
        <ErrorMsg>Unable to load camera stream.</ErrorMsg>
      ) : (
        <iframe
          src={"http://" + ip + ":8080/?action=stream"}
          title="Stream"
          style={{ border: "none", width: "100%", height: "100%", borderRadius: "20px" }}
          onError={handleError}
          onLoad={handleError}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 640px;
  height: 480px;
  background-color: var(--color-camstream_back);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMsg = styled.div`
  color: var(--color-gray);
`;
