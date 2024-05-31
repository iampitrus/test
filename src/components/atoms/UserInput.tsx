import { useState } from "react";
import Dropdown from "./Dropdown";
const Input = ({
  inputType,
  type,
  name,
  id,
  placeholder,
  label,
  value,
  className,
  data,
}: any) => {
  const [amount, setAmount] = useState(null);

  function onChange(e: any) {
    setAmount(e.target.value);
  }

  const converted_amt = 10;

  switch (inputType) {
    case "primary":
      return (
        <div className="w-full flex justify-between items-center border-[1px] p-[10px] rounded-2xl border-borderPrimary md:w-[400px]">
          <Dropdown data={data} />
          <input
            className="w-full px-3 text-end text-white outline-none border-none bg-transparent"
            type={type}
            name={name}
            id={id}
            onChange={onChange}
            placeholder="Amount"
          />
        </div>
      );
    case "secondary":
      return (
        <label className="w-full flex justify-between items-center border-[1px] p-[10px] rounded-2xl border-borderSecondary md:w-[400px]">
          <Dropdown data={data} none />
          <p className="w-full text-end outline-none border-none bg-transparent px-3 text-white">
            {converted_amt}
          </p>
        </label>
      );
    case "field":
      return (
        <div className="flex flex-col gap-[5px]">
          <label className="text-headercolor font-Poppins text-[14px]">
            {label}
          </label>
          <h3 className="font-Rubik text-[16px] text-white">{value}</h3>
        </div>
      );

    case "main":
      return (
        <input
          type={type}
          placeholder={placeholder}
          className={`${className} rounded-2xl border-[1px] solid border-borderPrimary p-[4px]`}
        />
      );
    default:
      break;
  }
};

export default Input;
