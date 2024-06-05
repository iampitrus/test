import { useState } from "react";
import { useGetSupportedCurrenciesQuery } from "../../api/offRamp";
import { useDispatch } from "react-redux";
import { setCrypto, setFiat } from "../../redux/userSlice";

function Dropdown({
  none,
  dataType,
}: {
  none?: boolean;
  dataType: "fiat" | "crypto";
}) {
  const { data: currencyData, isSuccess } = useGetSupportedCurrenciesQuery();

  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleChange(e: any) {
    setValue(e.target.value);
    if (dataType == "crypto") {
      dispatch(setCrypto(e.target.value));
    } else {
      dispatch(setFiat(e.target.value));
    }
  }

  return (
    <div className="w-56 flex relative items-center justify-start text-white">
      <div className="w-[20px] h-[20px] absolute rounded-full bg-white"></div>
      {isSuccess ? (
        <select
          id="dropdown"
          style={none ? { appearance: "none", marginLeft: "25px" } : {}}
          className="w-full ml-5 border-none m-0 outline-none text-white bg-boxcolor font-bold"
          value={value}
          onChange={handleChange}
        >
          {dataType === "fiat" &&
            currencyData.data.outgoingCurrencies.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          {dataType === "crypto" &&
            currencyData.data.incomingCurrencies.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      ) : (
        <p className="absolute left-6 text-xs text-gray-400">
          {dataType == "fiat" ? "loading fiat..." : "loading crypto..."}
        </p>
      )}
    </div>
  );
}

export default Dropdown;
