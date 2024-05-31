import { useGetSupportedCurrenciesQuery } from "../../api/offRamp";

function Dropdown({ none, data }: { none?: boolean; data: "fiat" | "crypto" }) {
  const { data: currencyData, isSuccess } = useGetSupportedCurrenciesQuery();

  return (
    <div className="w-56 flex relative items-center justify-start text-white">
      <div className="w-[20px] h-[20px] absolute rounded-full bg-white"></div>
      {isSuccess ? (
        <select
          style={none && { appearance: "none", marginLeft: "25px" }}
          className="w-full ml-5 border-none m-0 outline-none text-white bg-boxcolor font-bold"
        >
          {data === "fiat" &&
            currencyData.data.incomingCurrencies.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          {data === "crypto" &&
            currencyData.data.outgoingCurrencies.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}

          {/* {data.map(({ currency }) => (
          <option value={currency}>{currency}</option>
        ))} */}
        </select>
      ) : (
        <p className="absolute left-6 text-gray-400">
          {data == "fiat" ? "loading fiat..." : "loading crypto..."}
        </p>
      )}
    </div>
  );
}

export default Dropdown;
