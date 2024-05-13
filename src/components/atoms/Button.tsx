const Button = ({ type, value, className, onclick, icon }: any) => {
  switch (type) {
    case "transparent":
      return (
        <div
          onClick={onclick}
          className={`${className} bg-transparent text-dark p-[1rem]`}
        >
          {value}
        </div>
      );
    case "primary":
      return (
        <div
          onClick={onclick}
          className={`${className} bg-primary text-white p-[1rem]`}
        >
          {value}
        </div>
      );

    case "icon":
      return (
        <div
          onClick={onclick}
          className={`${className} flex justify-center items-center gap-4 rounded-xl py-3`}
        >
          {icon}
          {value}
        </div>
      );
    default:
      break;
  }
};

export default Button;
