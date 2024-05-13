import Button from "../atoms/Button";

const BtnSection = () => {
  return (
    <div className="flex justify-center items-center gap-[1rem]">
      <Button
        type="primary"
        value="buy"
        className="w-[10rem] rounded-lg border-none"
      />
      <Button
        type="transparent"
        value="sell"
        className="w-[10rem] rounded-lg border-[1px] text-primary border-primary"
      />
    </div>
  );
};

export default BtnSection;
