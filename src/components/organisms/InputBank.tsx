import Button from "../atoms/UserButton";
import Input from "../atoms/UserInput";
import { useNavigate } from "react-router-dom";
import TextInput from "../atoms/TextInput";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import {
  useGetSupportedBanksQuery,
  useResolveBankMutation,
} from "../../api/offRamp";
import { useDispatch } from "react-redux";
import { setAcctDetails } from "../../redux/userSlice";

const InputBank = () => {
  const [options, setOptions] = useState({} as any);
  const [bankDetails, setBankDetails] = useState({
    accountNumber: "",
    bankCode: "",
  });

  const { data: supportedBanks, isSuccess } = useGetSupportedBanksQuery();
  const [
    resolveBank,
    {
      data: resolveDetails,
      isLoading: resolveLoading,
      isSuccess: resolveSuccess,
      isError: resolveError,
    },
  ] = useResolveBankMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputBank = () => {
    if (!resolveSuccess) return;

    dispatch(setAcctDetails(resolveDetails?.data?.data));
    navigate("/user/review-sell");
  };

  const verifyAccount = () => {
    if (resolveLoading) return;
    resolveBank(bankDetails);
  };

  const handleChangeAcct = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (bankDetails.accountNumber.length >= 10) {
      return;
    } else {
      setBankDetails({ ...bankDetails, accountNumber: e.target.value });
    }
  };

  useEffect(() => {
    const formattedOptions = supportedBanks?.data.map((bank) => ({
      value: bank.Code,
      label: bank.Name,
    }));

    setOptions(formattedOptions);

    if (bankDetails.accountNumber.length === 10 && bankDetails.bankCode) {
      verifyAccount();
    }
  }, [isSuccess, bankDetails, resolveError]);

  useEffect(() => {
    if (resolveError) {
      // reset account number
      setBankDetails({ ...bankDetails, accountNumber: "" });
    }
  }, [resolveError]);

  return (
    <div className="flex flex-col gap-4">
      <Select
        onChange={(e: any) =>
          setBankDetails({ ...bankDetails, bankCode: e.value })
        }
        options={options}
      />
      <Input
        inputType={"field"}
        label={"Account Number"}
        onChange={handleChangeAcct}
        value={bankDetails.accountNumber}
        type="number"
      />
      {resolveSuccess && (
        <TextInput>{resolveDetails.data?.data?.accountname}</TextInput>
      )}
      {resolveLoading && <TextInput>Verifying Account...</TextInput>}
      {resolveError && (
        <TextInput>
          Account not verified. Check credentials and try again!
        </TextInput>
      )}
      <Button onclick={handleInputBank}>Confirm</Button>
    </div>
  );
};

export default InputBank;
