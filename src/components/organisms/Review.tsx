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
  const { fiat, crypto, amount, walletAddress } = userDetails;

  const currency = fiat === "NGN" ? "Naira" : "Dollar";

  const [convertedAmt, setConvertedAmt] = useState("");
  const { rate } = useGetCurrentRate();

  const [createPayment, { isError, isSuccess, isLoading }] =
    useCreatePaymentBuyMutation();

  const initalPaymentDetails = {
    fullName: "cryptnance",
    incomingCurrency: fiat,
    outgoingCurrency: crypto,
    amount,
    rateKey: "rate",
    network: "3131656942",
    currency: fiat,
    cryptoAddress: walletAddress,
    fee: 60,
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
            label={`Your ${crypto} crypto address`}
            text={walletAddress}
          />
          <TextInput className="text-center">Transaction Details</TextInput>
          <TextInput className="font-bold text-red-600 text-center">
            Before making payments, review your transaction information.
          </TextInput>
          <div className="flex justify-between items-center">
            <TextInputLabel
              label={`${currency} Amount`}
              text={`${amount} ${fiat}`}
            />
            <TextInputLabel
              label="Crypto Amount"
              text={`${convertedAmt} ${crypto}`}
            />
          </div>
          <TextInputLabel label="You sent to" text="Akazie Ebuka" />
          <Button onclick={handleBuy}>1've made the deposit</Button>
        </div>
      )}
    </div>
  );
};

export default Review;
