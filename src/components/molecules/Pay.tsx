import Input from "../atoms/UserInput";
import TextInput from "../atoms/TextInput";

const Pay = ({ value, sell }: { value?: number; sell?: boolean }) => {
  return (
    <div className="flex flex-col w-[250px] gap-2 justify-center items-center md:w-[400px]">
      <TextInput>Pay</TextInput>
      {sell ? (
        <Input
          data={"crypto"}
          inputType={"secondary"}
          value={value}
          type="number"
        />
      ) : (
        <Input
          data={"crypto"}
          inputType={"primary"}
          value={value}
          type="number"
        />
      )}
    </div>
  );
};

export default Pay;
