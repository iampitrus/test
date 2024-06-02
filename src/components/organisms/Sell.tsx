import Pay from "../molecules/Pay";
import { LuArrowDownCircle } from "react-icons/lu";
import Received from "../molecules/Received";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import CurrentRate from "../atoms/CurrentRate";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import useGetCurrentRate from "../../hooks/useGetCurrentRate";

const Sell = () => {
  const [convertedAmt, setConvertedAmt] = useState("");
  const navigate = useNavigate();

  const amount = useSelector(selectUser).amount;
  const { rate } = useGetCurrentRate();

  const handleSell = () => {
    navigate("/user/bank-details");
  };

  useEffect(() => {
    const convert = amount * parseFloat(rate);
    setConvertedAmt(convert.toLocaleString());
  }, [amount, rate]);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Received sell />
      <LuArrowDownCircle className="text-white" />
      <Pay convertedAmt={convertedAmt} sell />
      <CurrentRate />
      <Button onclick={handleSell}>Confirm Order</Button>
    </div>
  );
};

export default Sell;
