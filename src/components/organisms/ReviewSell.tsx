import Input from "../atoms/UserInput";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/UserButton";

const ReviewSell = () => {
  return (
    <div className="flex w-full h-fit flex-col gap-4">
      <Input
        disabled
        inputType={"field"}
        label="Your Bank Name"
        value={"Kuda Bank"}
      />
      <TextInput>Your name</TextInput>
      <Input
        disabled
        inputType={"field"}
        label="Your Account NUmber"
        value={"2019038333"}
      />
      <TextInput>Transaction Details</TextInput>
      <TextInput className="font-bold">
        Before making payments, review your transaction information.{" "}
      </TextInput>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[3px]">
          <TextInput>Naira Amount</TextInput>
          <Input
            className={"w-[8rem] bg-transparent"}
            inputType={"main"}
            placeholder={"5000 NGN"}
          />
        </div>
        <div className="flex flex-col gap-[3px]">
          <TextInput>Crypto Amount</TextInput>
          <Input
            className={"w-[8rem] bg-transparent"}
            inputType={"main"}
            placeholder={"20.111 USDT"}
          />
        </div>
      </div>
      <div className="mx-auto mt-8">
        <Button>1've made the deposit</Button>
      </div>
    </div>
  );
};

export default ReviewSell;
