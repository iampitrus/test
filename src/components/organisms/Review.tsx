import TextInput from "../atoms/TextInput";
import Button from "../atoms/UserButton";
import TextInputLabel from "../atoms/TextInputLabel";
import ProcessTransactionModal from "./ProcessTransactionModal";
import { useCreatePaymentBuyMutation } from "../../api/onRamp";
import useGetCurrentRate from "../../hooks/useGetCurrentRate";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

const Review = () => {
  const userDetails = useSelector(selectUser);
  const { fiat, crypto, acctDetails, amount } = userDetails;

  const [convertedAmt, setConvertedAmt] = useState("");
  const { rate } = useGetCurrentRate();

  const [createPayment, { isError, isSuccess, isLoading }] =
    useCreatePaymentBuyMutation();

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

  function handleBuy() {
    createPayment(initalPaymentDetails);
  }

  useEffect(() => {
    const convert = amount / parseFloat(rate);
    setConvertedAmt(convert.toLocaleString());
  }, [amount, rate]);

  return (
    <div className="my-auto w-full">
      {isLoading || isSuccess || isError ? (
        <ProcessTransactionModal
          type="buy"
          convertedAmt={convertedAmt}
          state={isSuccess ? "success" : isLoading ? "pending" : "failure"}
        />
      ) : (
        <div className="flex w-full flex-col gap-4">
          <TextInputLabel
            label="Crypto Address"
            text="0xBa01BBbbDe652Ae2ea99e61aFB4CD918ba144C64"
          />
          <TextInput className="text-center">Transaction Details</TextInput>
          <TextInput className="font-bold text-red-600 text-center">
            Before making payments, review your transaction information.
          </TextInput>
          <div className="flex justify-between items-center">
            <TextInputLabel label="Naira Amout" text={`${amount}`} />
            <TextInputLabel
              label="Crypto Amount"
              text={`${convertedAmt} ${crypto}`}
            />
          </div>
          <TextInputLabel label="Account Sender Name" text="Akazie Ebuka" />
          <Button onclick={handleBuy}>1've made the deposit</Button>
        </div>
      )}
    </div>
  );
};

export default Review;
