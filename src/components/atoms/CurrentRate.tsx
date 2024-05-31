import { RiExchangeLine } from "react-icons/ri";
import TextInput from "./TextInput";
import { useGetCurrentRatesQuery } from "../../api/offRamp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getChosenPair,
  selectUser,
  setCrypto,
  setFiat,
} from "../../redux/userSlice";
import { useLocation } from "react-router-dom";

function CurrentRate() {
  const { data, isSuccess } = useGetCurrentRatesQuery();
  const [rate, setRate] = useState("");

  const dispatch = useDispatch();
  const pair = useSelector(selectUser)?.pair;
  const crypto = useSelector(selectUser)?.crypto;
  const fiat = useSelector(selectUser)?.fiat;

  const location = useLocation();

  useEffect(() => {
    dispatch(getChosenPair());
    setRate(data?.data[pair]?.rate);
  }, [isSuccess, crypto, fiat, pair, location]);

  useEffect(() => {
    if (location.pathname === "/user/sell") {
      // reset the currency pair to default value
      dispatch(setFiat("NGN"));
      dispatch(setCrypto("BTC"));
    }
  }, []);

  return (
    <div className="flex items-center gap-2">
      <TextInput>
        1 {crypto} = {rate} {fiat}
      </TextInput>
      <RiExchangeLine size={20} className="text-white" />
    </div>
  );
}

export default CurrentRate;
