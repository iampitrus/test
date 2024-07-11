import { useSelector } from "react-redux";
import TextInput from "./TextInput";
import { selectUser } from "../../redux/userSlice";
import useGetCurrentRate from "../../hooks/useGetCurrentRate";

function CurrentRatePer1() {
  const crypto = useSelector(selectUser)?.crypto;
  const fiat = useSelector(selectUser)?.fiat;

  const { rate, isSuccess } = useGetCurrentRate();

  return (
    <div className="w-full flex justify-between items-center">
      <TextInput>Price</TextInput>
      {isSuccess ? (
        <div className="flex gap-[4px] items-center">
          <TextInput>
            {rate} {fiat} per 1 {crypto}
          </TextInput>
          <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
        </div>
      ) : (
        <p className="text-gray-600">loading...</p>
      )}
    </div>
  );
}

export default CurrentRatePer1;
