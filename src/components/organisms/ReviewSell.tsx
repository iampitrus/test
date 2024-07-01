import Input from "../atoms/UserInput";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/UserButton";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import useGetCurrentRate from "../../hooks/useGetCurrentRate";
import { useEffect, useState } from "react";
import { useCreatePaymentMutation } from "../../api/offRamp";
import ProcessTransactionModal from "./ProcessTransactionModal";

const ReviewSell = () => {
  const userDetails = useSelector(selectUser);
  const { fiat, crypto, acctDetails, amount } = userDetails;

  const [convertedAmt, setConvertedAmt] = useState("");
  const { rate } = useGetCurrentRate();

  const [createPayment, { isSuccess, isError, isLoading, error }] =
    useCreatePaymentMutation();

  const initalPaymentDetails = {
    businessId: "remittance",
    incomingCurrency: crypto,
    incomingAmount: amount,
    outgoingCurrency: fiat,
    paymentType: "bank",
    country: "NGN",
    accountNumber: acctDetails?.accountnumber,
    accountName: acctDetails?.accountname,
    bank: acctDetails?.name,
    bankCode: acctDetails?.code,
  };

  function handleTransaction() {
    console.log("Transaction completed");
    createPayment(initalPaymentDetails);
  }

  useEffect(() => {
    const convert = amount * parseFloat(rate);
    setConvertedAmt(convert.toLocaleString());
  }, [amount, rate]);

  useEffect(() => {
    if (isSuccess) {
      console.log("Payment successful");
    }
    if (isError) {
      console.log(error);
    }
  }, [isSuccess, isError]);

  return (
    <div className="my-auto">
      {isLoading || isSuccess || isError ? (
        <ProcessTransactionModal
          type="sell"
          convertedAmt={convertedAmt}
          state={isSuccess ? "success" : isLoading ? "pending" : "failure"}
        />
      ) : (
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
            label="Your Account Number"
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
                className={"w-[8rem] border-none font-bold bg-transparent"}
                inputType={"main"}
                placeholder={convertedAmt}
              />
            </div>
            <div className="flex flex-col gap-[3px]">
              <TextInput>Crypto Amount</TextInput>
              <Input
                className={"w-[8rem] border-none font-bold bg-transparent"}
                inputType={"main"}
                placeholder={`${amount} ${crypto}`}
              />
            </div>
          </div>
          <div className="mx-auto mt-8">
            <Button onclick={handleTransaction}>1've made the deposit</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSell;
