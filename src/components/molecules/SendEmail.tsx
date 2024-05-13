import { useEffect, useState } from "react";
import MailIcon from "../Icons/MailIcon";
import Button from "../atoms/Button";
import InputType from "../atoms/InputType";
import { useRegisterMutation } from "../../api/authApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import { initialUser } from "../../redux/authSlice";

const SendEmail = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: "" });
  const { email } = formData;

  const [signUp, { data, isLoading, isSuccess, isError, error }] =
    useRegisterMutation();

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (email === "") {
      toast.error("Pls enter your email");
      return;
    }
    if (isLoading) return;

    await signUp(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("A Verification token was sent to your email");
      const userEmail = data.data?._doc
        ? data.data?._doc?.email
        : data.data?.email;
      dispatch(initialUser(userEmail));
    }
    if (isError) {
      toast.error("An Error was Encountered. Try again!");
      console.log(error);
    }
  }, [isSuccess, isError, isLoading, data]);
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col justify-center items-center gap-5">
        <InputType
          name={"email"}
          onchange={onChange}
          value={email}
          label="Email"
          type="email"
          className="text-white"
          textType="labelForm"
          placeholder="Enter Your Email ...."
        />

        <Button
          onclick={handleSubmit}
          type="icon"
          icon={<MailIcon />}
          value="Login via Email"
          className="bg-[#2C2D3A] w-[16rem] cursor-pointer"
        />
        {isLoading ? <Spinner /> : null}
      </div>
    </>
  );
};

export default SendEmail;
