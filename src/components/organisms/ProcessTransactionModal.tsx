import Pending from "../../assets/pending.svg";
import Success from "../../assets/success.svg";
import Failure from "../../assets/failure.svg";
import Button from "../atoms/UserButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

interface Props {
  state: "pending" | "success" | "failure";
  type: "sell" | "buy";
  convertedAmt: string;
}

function ProcessTransactionModal({ state, convertedAmt, type }: Props) {
  const navigate = useNavigate();
  const userDetails = useSelector(selectUser);
  const { fiat, crypto, amount } = userDetails;

  const src =
    state == "success" ? Success : state == "failure" ? Failure : Pending;

  function handleClick() {
    navigate("/user");
  }

  return (
    <div className="flex gap-7 flex-col items-center">
      <div
        style={
          state == "failure"
            ? { borderColor: "red" }
            : { borderColor: "yellow" }
        }
        className="border-2 rounded-full boder aspect-square w w-40 flex items-center justify-center"
      >
        {state == "pending" ? (
          <img className="animate-rotate-infinite" src={src} alt={state} />
        ) : (
          <img src={src} alt={state} />
        )}
      </div>
      <div>
        <h1 className="text-2xl text-center text-white font-bold">
          {state == "success"
            ? "Transaction Successful"
            : state == "failure"
            ? "Transaction Cancel"
            : "Transaction Processing"}
        </h1>
        <p className="text-center text-gray-500">
          {state == "success"
            ? type == "sell"
              ? `Exchanged ${amount} ${crypto} for ${convertedAmt} ${fiat}`
              : `Exchanged ${amount} ${fiat} for ${convertedAmt} ${crypto}`
            : state == "failure"
            ? "Oh, Our system has not received your cash deposit, yet.  Kindly ensure you have deposited the exact Fiat currency to the provided bank Account. Then wait for us to approve your transaction"
            : type == "sell"
            ? `Exchanging ${amount} ${crypto} for ${convertedAmt} ${fiat}`
            : `Exchanging ${amount} ${fiat} for ${convertedAmt} ${crypto}`}
        </p>
      </div>
      {!(state == "pending") && (
        <Button type="primary" onclick={handleClick}>
          Go Home
        </Button>
      )}
    </div>
  );
}

export default ProcessTransactionModal;
