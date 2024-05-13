import { IoIosArrowDown } from "react-icons/io";
import Input from "../atoms/UserInput";
import TextInput from "../atoms/TextInput";

const Received = () => {
  return (
    <div className="flex flex-col w-[250px] justify-center items-center gap-2 md:w-[400px]">
      <div className="flex flex-row w-full justify-between items-center">
        <TextInput>Receive (Estimated)</TextInput>
        <TextInput className="flex items-center gap-[4px]">
          Select Network <IoIosArrowDown />
        </TextInput>
      </div>
      <Input inputType={"primary"} />
    </div>
  );
};

export default Received;
