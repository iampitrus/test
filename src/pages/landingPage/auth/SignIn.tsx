import { ToastContainer } from "react-toastify";
import AuthHead from "../../../components/molecules/AuthHead";
import GoogleForm from "../../../components/molecules/GoogleForm";
import SendEmail from "../../../components/molecules/SendEmail";

function SignIn() {
  return (
    <>
      <AuthHead />
      <GoogleForm />
      <SendEmail />
      <ToastContainer />
    </>
  );
}

export default SignIn;
