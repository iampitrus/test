import Dropdown from "./Dropdown";
import { useDispatch } from "react-redux";
import { setAmount } from "../../redux/userSlice";
const Input = ({
  inputType,
  type,
  name,
  id,
  placeholder,
  label,
  className,
  data,
  value,
  onChange,
  convertedAmt,
  disabled,
}: any) => {
  const dispatch = useDispatch();

  function handleChange(e: any) {
    // Store the input value so it can be used in other components
    dispatch(setAmount(e.target.value));
  }

  switch (inputType) {
    case "primary":
      return (
        <div className="w-full flex justify-between items-center border-[1px] p-[10px] rounded-2xl border-borderPrimary md:w-[400px]">
          <Dropdown dataType={data} />
          <input
            className="w-full px-3 text-end text-white outline-none border-none bg-transparent"
            type={type}
            name={name}
            id={id}
            onChange={handleChange}
            placeholder="Amount"
          />
        </div>
      );
    case "secondary":
      return (
        <label className="w-full flex justify-between items-center border-[1px] p-[10px] rounded-2xl border-borderSecondary md:w-[400px]">
          <Dropdown dataType={data} none />
          <p className="w-full text-end outline-none border-none bg-transparent px-3 text-white">
            {convertedAmt}
          </p>
        </label>
      );
    case "field":
      return (
        <div className="flex flex-col gap-[5px]">
          <label className="text-headercolor font-Poppins text-[14px]">
            {label}
          </label>
          <input
            disabled={disabled}
            value={value}
            type={type}
            onChange={onChange}
            className="font-Rubik bg-transparent p-2 rounded-lg border text-[16px] text-white"
            placeholder={placeholder}
          />
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
