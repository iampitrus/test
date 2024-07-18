import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import CurrentRatePer1 from "../atoms/CurrentRatePer1";
import TextInputLabel from "../atoms/TextInputLabel";
import TextInput from "../atoms/TextInput";
import Input from "../atoms/UserInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectUser, setUserWalletAddress } from "../../redux/userSlice";
import CopyToClipboard from "./CopyToClipboard";

const OurBank = () => {
  const [userAddress, setUserAddress] = useState("");
  const companyAccountNumber = "2019038333";

  const crypto = useSelector(selectUser).crypto;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBank = () => {
    if (!userAddress) return;

    dispatch(setUserWalletAddress(userAddress));
    navigate("/user/buy/receipt", { state: "buy" });
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <TextInputLabel label="Kuda Bank" text="2019038333">
        <CopyToClipboard data={companyAccountNumber} />
      </TextInputLabel>
      <TextInputLabel label="Sender Account Name" text="Akazie Ebuka" />
      <TextInput>Enter your {crypto} crypto address</TextInput>
      <Input
        inputType="field"
        type="text"
        placeholder="Paste your wallet address"
        onChange={(e: any) => setUserAddress(e.target.value)}
      />

      <CurrentRatePer1 />

      <Button onclick={handleBank}>Confirm</Button>
    </div>
  );
};

export default OurBank;
