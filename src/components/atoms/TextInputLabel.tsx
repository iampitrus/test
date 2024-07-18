import React from "react";
import TextInput from "./TextInput";

type Props = {
  label: string;
  text: string | number;
  children?: React.ReactNode;
};

function TextInputLabel({ label, text, children }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <TextInput>{label}</TextInput>
      <p className="text-white break-words font-Poppins">
        {text} {children}
      </p>
    </div>
  );
}

export default TextInputLabel;
