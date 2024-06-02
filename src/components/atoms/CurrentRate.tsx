import { RiExchangeLine } from "react-icons/ri";
import TextInput from "./TextInput";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setCrypto, setFiat } from "../../redux/userSlice";
import { useLocation } from "react-router-dom";
import useGetCurrentRate from "../../hooks/useGetCurrentRate";

function CurrentRate() {
  const { rate } = useGetCurrentRate();

  const dispatch = useDispatch();
  const crypto = useSelector(selectUser)?.crypto;
  const fiat = useSelector(selectUser)?.fiat;

  const location = useLocation();

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
