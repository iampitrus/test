const InputType = ({
  type,
  label,
  onchange,
  value,
  placeholder,
  className,
  textType,
  name,
}: any) => {
  switch (textType) {
    case "labelForm":
      return (
        <div className="flex flex-col justify-start items-start gap-2">
          <label className="text-[#4F5069]">{label}</label>
          <input
            name={name}
            type={type}
            className={`${className} bg-[#2C2D3A] px-3 py-3 rounded-xl w-[20rem]`}
            onChange={onchange}
            value={value}
            placeholder={placeholder}
          />
        </div>
      );

    default:
      break;
  }
};

export default InputType;
