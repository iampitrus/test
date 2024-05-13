const TextInput = ({ children, className }: any) => {
  return (
    <p className={`font-Poppins text-[14px] text-headercolor ${className}`}>
      {children}
    </p>
  );
};

export default TextInput;
