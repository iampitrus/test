import Input from "../atoms/UserInput";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/UserButton";

const Review = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <Input
        inputType={"field"}
        label="Crypto Address"
        value={"0xBa01BBbbDe652Ae2ea99e61aFB4CD918ba144C64"}
      />
      <TextInput>Transaction Details</TextInput>
      <TextInput className="font-bold">
        Before making payments, review your transaction information.
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
      <Input
        inputType={"field"}
        label={"Account Sender Name"}
        value={"Akazie Ebuka"}
      />
      <Button>1've made the deposit</Button>
    </div>
  );
};

export default Review;
