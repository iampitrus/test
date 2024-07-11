import { useLocation, useNavigate } from "react-router-dom";
import CurrentRatePer1 from "../atoms/CurrentRatePer1";
import TextInput from "../atoms/TextInput";
import Input from "../atoms/UserInput";
import { useState } from "react";
import Button from "../atoms/UserButton";

const Receipt = () => {
  const [emailAddress, setEmailAddress] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (!emailAddress) return;
    navigate(`${location.pathname}/review`);
  };
  return (
    <div className="flex flex-col gap-4">
      <TextInput>
        There is fee associated on your exchange / wallet; check that the fee is
        included to your coin value before withdrawing.{" "}
      </TextInput>
      <Input
        inputType={"field"}
        label="Address"
        placeholder="Enter your email address"
        value={emailAddress}
        onChange={(e: any) => setEmailAddress(e.target.value)}
      />
      <CurrentRatePer1 />
      <Button onclick={handleClick}>Confirm</Button>
    </div>
  );
};

export default Receipt;
