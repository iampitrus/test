import React, { useState, useRef, useEffect } from "react";
import { useLoginMutation, useResendOtpMutation } from "../../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, setUser } from "../../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const OTPVerification: React.FC = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector(selectAuth).user;

  const [login, { data, isLoading, isSuccess, isError, error }] =
    useLoginMutation();
  const [
    resend,
    {
      isLoading: resendLoading,
      isSuccess: resendSuccess,
      isError: resendError,
    },
  ] = useResendOtpMutation();

  const handleOTPChange = (index: number, value: string) => {
    // Allow only digits
    if (/^\d*$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Move focus to the next input if current input is filled
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const ResendOtp = async () => {
    await resend({ email });
  };

  const handleVerifyOTP = async () => {
    const otpPin = otp.join("");

    if (isLoading) return;
    if (!otpPin) return;
    await login({ email, token: otpPin });
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.key === "Enter" && index === 5) {
      handleVerifyOTP();
    }

    // Go to previous input when backspace is pressed
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");
    // Allow only 6 digits
    if (/^\d{6}$/.test(pastedData)) {
      const newOTP = pastedData.split("");
      setOTP(newOTP);
      inputRefs.current[0]?.focus();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data));
      toast.success("Login Successful!");
      navigate("/user");
    }
    if (resendSuccess) toast.success("Token sent successfully!");

    if (isError || resendError) {
      toast.error("Error, pls try again");
      console.log(error);
    }

    if (otp.every((digit) => digit !== "") && !isError) {
      handleVerifyOTP();
    } else if (isError) {
      toast.info("Input the correct code.");
    }
  }, [isSuccess, isError, resendSuccess, resendError, otp]);

  return (
    <div className="text-white flex flex-col items-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex gap-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              className="w-10 text-center bg-transparent border-b"
              type="text"
              maxLength={1}
              value={digit}
              onPaste={handlePaste}
              onChange={(e) => handleOTPChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, index)}
              ref={(input) => (inputRefs.current[index] = input)}
            />
          ))}
        </div>
      )}
      <p className="text-slate-400 mt-4">
        Didn't receive a code?
        {resendLoading ? (
          <Spinner />
        ) : (
          <span onClick={ResendOtp} className="text-primary cursor-pointer">
            Resend
          </span>
        )}
      </p>
    </div>
  );
};

export default OTPVerification;
