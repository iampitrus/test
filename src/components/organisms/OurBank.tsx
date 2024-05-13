import Input from "../atoms/UserInput";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import TextInput from "../atoms/TextInput";

const OurBank = () => {
  const navigate = useNavigate();
  const handleBank = () => {
    navigate("/user/review");
  };
  return (
    <div className="flex w-full flex-col gap-4">
      <Input inputType={"field"} label="Kuda Bank" value={"2019038333"} />
      <TextInput>
        No Use of Crypto Related Words As a Reference Such As Btc, Usdt,
        Binance, Crypto when sending money in your Bank
      </TextInput>
      <Input
        inputType={"field"}
        label={"Sender Account Name"}
        value={"Akazie Ebuka"}
      />
      <Input
        inputType={"field"}
        label={"Sender Crypto Address"}
        value={"0xBa01BBbbDe652Ae2ea99e61aFB4CD918ba144C64"}
      />
      <div className="w-full flex justify-between items-center">
        <TextInput>Price</TextInput>
        <div className="flex gap-[4px] items-center">
          <TextInput>1,000 NGN per 1 Usdt</TextInput>
          <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
        </div>
      </div>

      <Button onclick={handleBank}>Payment Complete</Button>
    </div>
  );
};

export default OurBank;
