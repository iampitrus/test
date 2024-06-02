import { useEffect, useState } from "react";
import { useGetCurrentRatesQuery } from "../api/offRamp";
import { getChosenPair, selectUser } from "../redux/userSlice";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function useGetCurrentRate() {
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

  return { rate };
}

export default useGetCurrentRate;
