import { GoCopy } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SendCrypto = () => {
  const walletAdrress = "0x9144B42ED902F4b915111";
  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();

  const handleCopy = async (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

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
            <div className="relative">
              {copied ? (
                <IoIosCheckmarkCircleOutline className="text-headercolor" />
              ) : (
                <GoCopy
                  onClick={() => handleCopy(walletAdrress)}
                  className="text-headercolor cursor-pointer"
                />
              )}
              {copied && (
                <p className="absolute top-5 -left-4 text-white text-xs bg-gray-600 py-1 px-2 rounded-2xl">
                  copied
                </p>
              )}
            </div>
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
