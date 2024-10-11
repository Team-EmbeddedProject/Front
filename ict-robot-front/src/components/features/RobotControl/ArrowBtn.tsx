import styled from "@emotion/styled";
import { useEffect } from "react";

type Props = {
  title: string;
  code: string;
  keyboard: string;
  setCode: (id: string) => void;
};

export const ArrowBtn = ({ title, code, setCode, keyboard }: Props) => {
  const handleMouseDown = () => {
    setCode(code);
  };

  const handleMouseUp = () => {
    setCode("400");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === keyboard) {
        setCode(code);
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === keyboard) {
        setCode("400");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [code, keyboard, setCode]);

  return (
    <StyledBtn onMouseDown={handleMouseDown} onClick={handleMouseUp}>
      {title}
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  color: var(--color-gray);
  font-weight: 600;
  font-size: var(--font-size-h2);

  width: 100px;
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
