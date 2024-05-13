import MailIcon from "../../../components/Icons/MailIcon";
import { IoMdClose } from "react-icons/io";
import VerifyOtpCode from "../../../components/molecules/VerifyOtpCode";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, showAuth } from "../../../redux/authSlice";
import { ToastContainer } from "react-toastify";

const Verify = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectAuth).user;

  const closeModal = () => {
    dispatch(showAuth(false));
  };

  return (
    <>
      <div className="px-3 flex flex-col justify-around items-center gap-5 py-4 bg-[#000000] w-full h-[20rem]">
        <div className="flex justify-between items-center gap-4">
          <MailIcon className="flex-1" size={36} />
          <IoMdClose onClick={closeModal} color="white" size={36} />
        </div>
        <p className="text-white">
          Enter the code 6 digits code sent to your email
        </p>
        <p className="text-slate-400">{email}</p>
        <VerifyOtpCode />
      </div>
      <ToastContainer />
    </>
  );
};

export default Verify;
