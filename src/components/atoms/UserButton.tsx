const Button = ({ children, onclick, type }: any) => {
  switch (type) {
    case "primary":
      return (
        <button
          onClick={onclick}
          className="flex justify-center items-center bg-secondary w-[250px]  p-[10px] font-bold rounded-2xl md:w-[400px]"
        >
          {children}
        </button>
      );

    case "secondary":
      return (
        <button
          onClick={onclick}
          className="flex justify-center items-center border-[2px] border-secondary bg-transparent w-[250px]  p-[10px] font-bold rounded-2xl md:w-[400px]"
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          onClick={onclick}
          className="flex justify-center items-center bg-secondary w-[250px]  p-[10px] font-bold rounded-2xl md:w-[400px]"
        >
          {children}
        </button>
      );
  }
};

export default Button;
