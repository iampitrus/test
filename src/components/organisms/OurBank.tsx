import Input from "../atoms/UserInput";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import TextInput from "../atoms/TextInput";
import CurrentRatePer1 from "../atoms/CurrentRatePer1";

const OurBank = () => {
  const navigate = useNavigate();
  const handleBank = () => {
    navigate("/user/review");
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <Input
        inputType={"field"}
        label="Kuda Bank"
        value={"2019038333"}
        noBorder
        disabled
      />
      <Input
        inputType={"field"}
        label={"Sender Account Name"}
        value={"Akazie Ebuka"}
        disabled
        noBorder
      />
      <Input
        inputType={"field"}
        label={"Sender Crypto Address"}
        value={"0xBa01BBbbDe652Ae2ea99e61aFB4CD918ba144C64"}
        disabled
        noBorder
      />
      <CurrentRatePer1 />

      <Button onclick={handleBank}>Confirm</Button>
    </div>
  );
};

export default OurBank;
