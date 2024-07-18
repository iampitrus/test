import TextInput from "../atoms/TextInput";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import CopyToClipboard from "./CopyToClipboard";

const SendCrypto = () => {
  const walletAdrress = "0x9144B42ED902F4b915111";

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/user/sell/review-sell");
  };

  return (
    <>
      <div className="flex w-full flex-col gap-10 h-full">
        <div className="flex flex-col justify-between gap-2">
          <TextInput>Crypto Address</TextInput>
          <div className="flex items-center gap-5">
            <h3 className="text-white">{walletAdrress}</h3>
            <CopyToClipboard data={walletAdrress} />
          </div>
        </div>
        <div className="text-center">
          <TextInput>Rate exceed in 2mins: 44secs</TextInput>
        </div>
        <Button onclick={handleNext}>I've made the deposit</Button>
      </div>
    </>
  );
};

export default SendCrypto;
