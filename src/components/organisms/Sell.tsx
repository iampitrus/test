import Pay from "../molecules/Pay";
import { LuArrowDownCircle } from "react-icons/lu";
import Received from "../molecules/Received";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import CurrentRate from "../atoms/CurrentRate";

const Sell = () => {
  const navigate = useNavigate();
  const handleSell = () => {
    navigate("/user/bank-details");
  };

  let converted_amt = 0;

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Received sell />
      <LuArrowDownCircle className="text-white" />
      <Pay sell value={converted_amt} />
      <CurrentRate />
      <Button onclick={handleSell}>Confirm Order</Button>
    </div>
  );
};

export default Sell;
