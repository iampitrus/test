import { RiExchangeLine } from "react-icons/ri";
import TextInput from "./TextInput";
import { useGetCurrentRatesQuery } from "../../api/offRamp";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

function CurrentRate() {
  const { data, isSuccess } = useGetCurrentRatesQuery();
  const [rate, setRate] = useState("");

  const pair = useSelector(selectUser).currencyPair;

  useEffect(() => {
    setRate(data?.data["BNBBNB"].rate);
    console.log("currency pair:", pair);
  }, [isSuccess]);

  return (
    <div className="flex items-center gap-2">
      <TextInput> {rate}</TextInput>
      <RiExchangeLine size={20} className="text-white" />
    </div>
  );
}

export default CurrentRate;
