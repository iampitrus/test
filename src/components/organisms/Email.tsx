import Input from "../atoms/UserInput";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CurrentRatePer1 from "../atoms/CurrentRatePer1";

const Email = () => {
  const [emailAddress, setEmailAddress] = useState("");

  const navigate = useNavigate();

  const handleBank = () => {
    if (!emailAddress) return;
    navigate("/user/send-crypto");
  };
  return (
    <div className="flex w-full flex-col gap-10">
      <p className="text-white text-center">
        There is a fee associated on your exchange/ wallet; check that the fee
        is included to your coin value before withdrawing
      </p>
      <Input
        inputType={"field"}
        label="Address"
        placeholder="Enter your email address"
        value={emailAddress}
        onChange={(e: any) => setEmailAddress(e.target.value)}
      />
      <CurrentRatePer1 />
      <Button onclick={handleBank}>Confirm</Button>
    </div>
  );
};

export default Email;
