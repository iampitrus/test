import Button from "../atoms/UserButton";
import Input from "../atoms/UserInput";
import { useNavigate } from "react-router-dom";
import TextInput from "../atoms/TextInput";

const InputBank = () => {
  const navigate = useNavigate();
  const handleInputBank = () => {
    navigate("/user/review-sell");
  };
  return (
    <div className="flex flex-col gap-4">
      <Input inputType={"field"} label={"Bank Name"} value={"Kuda Bank"} />
      <Input
        inputType={"field"}
        label={"Account Number"}
        value={"2019038333"}
      />
      <TextInput>Akazia Ebuka</TextInput>
      <Button onclick={handleInputBank}>Confirm</Button>
    </div>
  );
};

export default InputBank;
