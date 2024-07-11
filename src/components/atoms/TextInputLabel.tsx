import TextInput from "./TextInput";

type Props = {
  label: string;
  text: string;
};

function TextInputLabel({ label, text }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <TextInput>{label}</TextInput>
      <p className="text-white break-words">{text}</p>
    </div>
  );
}

export default TextInputLabel;
