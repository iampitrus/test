// src/useVerificationCode.tsx
import { useState, ChangeEvent } from "react";

type UseVerificationCodeProps = {
  length: number;
};

export const useVerificationCode = ({ length }: UseVerificationCodeProps) => {
  const [code, setCode] = useState(new Array(length).fill(""));

  const handleChange = (
    element: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...code];
    newCode[index] = element.target.value;
    setCode(newCode);
    if (element.target.nextSibling) {
      (element.target.nextSibling as HTMLElement).focus();
    }
  };
  return {
    code,
    handleChange,
  };
};
