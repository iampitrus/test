import TextInput from "../atoms/TextInput";
import Input from "../atoms/UserInput";

const Receipt = () => {
  return (
    <div className="flex flex-col gap-4">
      <TextInput>
        There is fee associated on your exchange / wallet; check that the fee is
        included to your coin value before withdrawing.{" "}
      </TextInput>
      <Input
        inputType={"field"}
        label={"Email"}
        value={"franktrade123@gmail.com"}
      />
      <div className="w-full flex justify-between items-center">
        <TextInput>Price</TextInput>
        <div className="flex gap-[4px] items-center">
          <p>1,000 NGN per 1 Usdt</p>
          <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
