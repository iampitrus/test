import TextInput from "../atoms/TextInput";
import Input from "../atoms/UserInput";
import Button from "../atoms/UserButton";

const Email = () => {
  const handleBank = () => {};
  return (
    <div className="flex w-full flex-col gap-4">
      <Input
        inputType={"field"}
        label="Address"
        value={"franktrade123@gmail.com"}
      />
      <div className="w-full flex justify-between items-center">
        <TextInput>Price</TextInput>
        <div className="flex gap-[4px] items-center">
          <p>1,000 NGN per 1 Usdt</p>
          <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
        </div>
      </div>
      <Button onclick={handleBank}>Confirm</Button>
    </div>
  );
};

export default Email;
