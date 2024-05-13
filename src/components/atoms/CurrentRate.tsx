import { RiExchangeLine } from "react-icons/ri";
import TextInput from "./TextInput";

function CurrentRate() {
  return (
    <div className="flex items-center gap-2">
      <TextInput> 1 NGN = 1.005</TextInput>
      <RiExchangeLine size={30} className="text-white" />
    </div>
  );
}

export default CurrentRate;
