import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Tab = () => {
  const [active, setActive] = useState<"sell" | "buy">("buy");

  const location = useLocation();
  const navigate = useNavigate();

  const handleSell = () => {
    navigate("/user/sell");
  };
  const handleBuy = () => {
    navigate("/user");
  };

  useEffect(() => {
    if (location.pathname === "/user") {
      setActive("buy");
    } else if (location.pathname === "/user/sell") {
      setActive("sell");
    }
  }, [location.pathname]);

  return (
    <div className="flex justify-between items-center bg-borderPrimary w-[250px] h-[40px] rounded-xl">
      <div
        onClick={handleBuy}
        style={
          active === "buy"
            ? { backgroundColor: "white" }
            : { backgroundColor: "transparent" }
        }
        className={`w-1/2 h-[40px] flex justify-center items-center font-Poppins cursor-pointer font-bold rounded-xl`}
      >
        Buy
      </div>
      <div
        onClick={handleSell}
        style={
          active === "sell"
            ? { backgroundColor: "white" }
            : { backgroundColor: "transparent" }
        }
        className={`w-1/2 h-[40px] flex justify-center items-center font-Poppins cursor-pointer font-bold  rounded-xl`}
      >
        Sell
      </div>
    </div>
  );
};

export default Tab;
