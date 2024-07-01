import TextInput from "../atoms/TextInput";
import Input from "../atoms/UserInput";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Email = () => {
  const [emailAddress, setEmailAddress] = useState("");

  const navigate = useNavigate();

  const handleBank = () => {
    if (!emailAddress) return;
    navigate("/user/send-crypto");
  };
  return (
    <div className="flex w-full flex-col gap-10">
      <Input
        inputType={"field"}
        label="Address"
        placeholder="Enter your email address"
        value={emailAddress}
        onChange={(e: any) => setEmailAddress(e.target.value)}
      />
      <p className="text-white text-center">
        There is a fee associated on your exchange/ wallet; check that the fee
        is included to your coin value before withdrawing
      </p>
      <div className="w-full flex justify-between items-center">
        <TextInput>Price</TextInput>
        <div className="flex gap-[4px] items-center">
          <p className="text-gray-500">1,000 NGN per 1 Usdt</p>
          <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
        </div>
      </div>
      <div className="mx-auto">
        <Button onclick={handleBank}>Confirm</Button>
      </div>
    </div>
  );
};

export default Email;
