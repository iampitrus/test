import Pay from "../molecules/Pay";
import { LuArrowDownCircle } from "react-icons/lu";
import Received from "../molecules/Received";
import TextInput from "../atoms/TextInput";
import { RiExchangeLine } from "react-icons/ri";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import CurrentRate from "../atoms/CurrentRate";

const Sell = () => {
  const navigate = useNavigate();
  const handleSell = () => {
    navigate("/user/bank-details");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Received />
      <LuArrowDownCircle className="text-white" />
      <Pay />
      <CurrentRate />

      <Button onclick={handleSell}>Confirm Order</Button>
    </div>
  );
};

export default Sell;
