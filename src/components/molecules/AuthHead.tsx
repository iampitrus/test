import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { showAuth } from "../../redux/authSlice";

const AuthHead = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-start items-start gap-[2px] w-full">
      <div className="flex justify-between items-center gap-5 w-full">
        <span className="text-white">Secure Login</span>
        <IoCloseSharp
          className="cursor-pointer"
          onClick={() => dispatch(showAuth(false))}
          size={36}
          color="#fff"
        />
      </div>
      <p className="text-white">Sign In with your email address</p>
    </div>
  );
};

export default AuthHead;
