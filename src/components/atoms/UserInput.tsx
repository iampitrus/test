import { IoIosArrowDown } from "react-icons/io";
const Input = ({
  inputType,
  type,
  name,
  id,
  onChange,
  placeholder,
  label,
  value,
  className,
}: any) => {
  switch (inputType) {
    case "primary":
      return (
        <label className="w-[250px] flex justify-between items-center border-[1px] p-[10px] rounded-2xl border-borderPrimary md:w-[400px]">
          <div className="flex justify-between w-[80px]  items-center">
            <div className="flex items-center gap-[5px]">
              <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
              <p className="font-bold text-white">USDC</p>
            </div>

            <div className="translate-x-[20px]">
              <IoIosArrowDown className="text-white" />
            </div>
          </div>
          <input
            className="w-[5rem] outline-none border-none bg-transparent"
            type={type}
            name={name}
            id={id}
            onChange={onChange}
            placeholder="Amount"
          />
        </label>
      );
    case "secondary":
      return (
        <label className="w-[250px] flex justify-between items-center border-[1px] p-[10px] rounded-2xl border-borderSecondary md:w-[400px]">
          <div className="flex gap-[5px] items-center">
            <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
            <p className="font-bold text-white">NGN</p>
          </div>
          <input
            className="w-[5rem] outline-none border-none bg-transparent px-3"
            type={type}
            name={name}
            id={id}
            onChange={onChange}
            placeholder="Amount"
          />
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
