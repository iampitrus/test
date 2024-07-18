import Input from "../atoms/UserInput";
import TextInput from "../atoms/TextInput";

const Pay = ({
  sell,
  convertedAmt,
}: {
  sell?: boolean;
  convertedAmt?: string;
}) => {
  return (
    <div className="flex flex-col w-[250px] gap-2 justify-center items-center md:w-[400px]">
      <TextInput>Pay</TextInput>
      {sell ? (
        <Input
          convertedAmt={convertedAmt}
          data={"fiat"}
          inputType={"secondary"}
          type="number"
        />
      ) : (
        <Input data={"fiat"} inputType={"primary"} type="number" />
      )}
    </div>
  );
};

export default Pay;
