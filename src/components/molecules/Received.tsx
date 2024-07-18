import { IoIosArrowDown } from "react-icons/io";
import Input from "../atoms/UserInput";
import TextInput from "../atoms/TextInput";

const Received = ({
  sell,
  convertedAmt,
}: {
  sell?: boolean;
  convertedAmt?: string;
}) => {
  return (
    <div className="flex flex-col w-[250px] justify-center items-center gap-2 md:w-[400px]">
      <div className="flex flex-row w-full justify-between items-center">
        <TextInput>Receive (Estimated)</TextInput>
        <TextInput className="flex items-center gap-[4px]">
          Select Network <IoIosArrowDown />
        </TextInput>
      </div>
      {sell ? (
        <Input data={"crypto"} inputType={"primary"} type="number" />
      ) : (
        <Input
          convertedAmt={convertedAmt}
          data={"crypto"}
          inputType={"secondary"}
          type="number"
        />
      )}
    </div>
  );
};

export default Received;
