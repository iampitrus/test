import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import CurrentRatePer1 from "../atoms/CurrentRatePer1";
import TextInputLabel from "../atoms/TextInputLabel";

const OurBank = () => {
  const navigate = useNavigate();
  const handleBank = () => {
    navigate("/user/buy/receipt", { state: "buy" });
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <TextInputLabel label="Kuda Bank" text="2019038333" />
      <TextInputLabel label="Sender Account Name" text="Akazie Ebuka" />
      <TextInputLabel
        label="Sender Crypto Address"
        text="0xBa01BBbbDe652Ae2ea99e61aFB4CD918ba144C64"
      />
      <CurrentRatePer1 />

      <Button onclick={handleBank}>Confirm</Button>
    </div>
  );
};

export default OurBank;
