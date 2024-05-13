import Input from "../atoms/UserInput";
import TextInput from "../atoms/TextInput";

const Pay = () => {
  return (
    <div className="flex flex-col w-[250px] gap-2 justify-center items-center md:w-[400px]">
      <TextInput>Pay</TextInput>
      <Input inputType={"secondary"} />
    </div>
  );
};

export default Pay;
