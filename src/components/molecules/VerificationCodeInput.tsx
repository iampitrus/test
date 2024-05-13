// src/VerificationCodeInput.tsx
import { useEffect, useState } from "react";
import { useVerificationCode } from "../../hooks/useVerificationCode";
import { useLoginMutation } from "../../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, setUser } from "../../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const VerificationCodeInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [codee, setCodee] = useState("");

  const { code, handleChange } = useVerificationCode({ length: 6 });

  const [login, { data, isLoading, isSuccess, isError, error }] =
    useLoginMutation();

  const email = useSelector(selectAuth).user;

  const handleComplete = async () => {
    if (isLoading) return;
    if (!code) return;
    await login({ email, token: codee });
  };

  useEffect(() => {
    const fullCode = code.join("");
    if (fullCode.length === length) {
      setCodee(fullCode);
      handleComplete();
    }

    if (isSuccess) {
      dispatch(setUser(data));
      toast.success("Successfull!");
      navigate("/user");
    }
    if (isError) {
      toast.error("Error, pls try again");
      console.log(error);
    }
  }, [code, length]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        code.map((_, index: any) => (
          <input
            name={"verify"}
            key={index}
            type="text"
            maxLength={1}
            onChange={(e) => handleChange(e, index)}
            style={{
              color: "white",
              width: "40px",
              marginRight: "5px",
              background: "none",
              borderBottom: "2px solid #2C2D3A",
            }}
          />
        ))
      )}
    </div>
  );
};

export default VerificationCodeInput;
