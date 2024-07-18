import Pay from "../molecules/Pay";
import Received from "../molecules/Received";
import { LuArrowDownCircle } from "react-icons/lu";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import CurrentRate from "../atoms/CurrentRate";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import useGetCurrentRate from "../../hooks/useGetCurrentRate";
import { useEffect, useState } from "react";

const Buy = () => {
  const [convertedAmt, setConvertedAmt] = useState("");
  const amount = useSelector(selectUser).amount;
  const { rate } = useGetCurrentRate();

  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/user/buy/ourbank");
  };

  useEffect(() => {
    const convert = amount / parseFloat(rate);
    setConvertedAmt(convert.toFixed(5));
  }, [amount, rate]);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Pay />
      <LuArrowDownCircle className="text-white" />
      <Received convertedAmt={convertedAmt} />
      <CurrentRate />

      <Button onclick={handleBuy}>Confirm Order</Button>
    </div>
  );
};

export default Buy;
