import Pay from "../molecules/Pay";
import Received from "../molecules/Received";
import { LuArrowDownCircle } from "react-icons/lu";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import CurrentRate from "../atoms/CurrentRate";

const Buy = () => {
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate("/user/ourbank");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Pay />
      <LuArrowDownCircle className="text-white" />
      <Received />
      <CurrentRate />

      <Button onclick={handleBuy}>Confirm Order</Button>
    </div>
  );
};

export default Buy;
