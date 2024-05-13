import { GoCopy } from "react-icons/go";
import TextInput from "../atoms/TextInput";

const SendCrypto = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-[3px]">
          <TextInput>Crypto Address</TextInput>
          <div className="flex items-center gap-[4px]">
            <h3>0x9144B42ED902F4b915111</h3>
            <GoCopy className="text-headercolor" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SendCrypto;
