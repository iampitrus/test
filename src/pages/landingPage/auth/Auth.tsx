import ModalContainer from "../../../components/layout/ModalContainer";
import SignIn from "./SignIn";
import Verify from "./Verify";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../redux/authSlice";

function AuthLayout() {
  const user = useSelector(selectAuth).user;

  return (
    <ModalContainer>
      <div className="mt-10 border border-slate-600 rounded-lg px-6 flex flex-col gap-5 py-6 bg-[#000000] lg:w-[30rem] h-fit">
        {!user ? <SignIn /> : <Verify />}
      </div>
    </ModalContainer>
  );
}

export default AuthLayout;
