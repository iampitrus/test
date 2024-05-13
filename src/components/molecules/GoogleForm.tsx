import { useEffect } from "react";
import { useGoogleAuthMutation } from "../../api/authApi";
import GoogleIcon from "../Icons/GoogleIcon";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GoogleForm = () => {
  const [google, { isSuccess, isError, isLoading, error }] =
    useGoogleAuthMutation();

  const token = "tokenfromgoogle";
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await google({ token });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfull!");
      navigate("/user");
    }
    if (isError) {
      toast.error("An Error was Encountered. Try again!");
      console.log(error);
    }
  }, [isSuccess, isError, isLoading]);

  return (
    <div className="flex flex-col justify-start items-start gap-3">
      <p className="text-[#4F5069]">CONTINUE WITH</p>
      <i onClick={handleSubmit} className="cursor-pointer">
        <GoogleIcon name="token" value="token" />
      </i>
      {isLoading && <Spinner />}
    </div>
  );
};

export default GoogleForm;
