import Input from "../atoms/UserInput";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/UserButton";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import useGetCurrentRate from "../../hooks/useGetCurrentRate";
import { useEffect, useState } from "react";

const ReviewSell = () => {
  const userDetails = useSelector(selectUser);
  const { fiat, crypto, acctDetails, amount } = userDetails;

  const [convertedAmt, setConvertedAmt] = useState("");
  const { rate } = useGetCurrentRate();

  useEffect(() => {
    const convert = amount * parseFloat(rate);
    setConvertedAmt(convert.toLocaleString());
  }, [amount, rate]);

  return (
    <div className="flex w-full h-fit flex-col gap-4">
      <Input
        disabled
        inputType={"field"}
        label="Your Bank Name"
        value={acctDetails?.name}
      />
      <TextInput>{acctDetails?.accountname}</TextInput>
      <Input
        disabled
        inputType={"field"}
        label="Your Account NUmber"
        value={acctDetails?.accountnumber}
      />
      <TextInput>Transaction Details</TextInput>
      <TextInput className="font-bold">
        Before making payments, review your transaction information.
      </TextInput>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[3px]">
          <TextInput>Amount in {fiat}</TextInput>
          <Input
            className={"w-[8rem] bg-transparent"}
            inputType={"main"}
            placeholder={convertedAmt}
          />
        </div>
        <div className="flex flex-col gap-[3px]">
          <TextInput>Crypto Amount</TextInput>
          <Input
            className={"w-[8rem] bg-transparent"}
            inputType={"main"}
            placeholder={`${amount} ${crypto}`}
          />
        </div>
      </div>
      <div className="mx-auto mt-8">
        <Button>1've made the deposit</Button>
      </div>
    </div>
  );
};

export default ReviewSell;
