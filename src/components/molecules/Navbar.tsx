import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { LogoIcon } from "../../assets";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showAuth } from "../../redux/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const OpenLogin = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full relative flex justify-between items-center gap-5 px-4 py-4">
      <div className="">
        <img src={LogoIcon} className="w-[10rem]" />
      </div>
      <div className="hidden lg:flex lg:flex-1 justify-center gap-5 items-center">
        <ul className="hidden lg:flex   justify-between items-center gap-4">
          <li>
            <Link className="text-white" to="#">
              Swap
            </Link>
          </li>
          <li>
            <Link className="text-white" to="#">
              Support
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => dispatch(showAuth(true))}
              className="text-white"
            >
              Login/ Signup
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div
          onClick={OpenLogin}
          className="w-[3rem] flex justify-center items-center h-[3rem] rounded-full bg-[#000000]"
        >
          <FaUser color="#FAFF0AD9" size={24} />
        </div>
      </div>
      <div className="hidden w-[10rem] py-2 lg:flex lg:justify-center text-[#FAFF0AD9] border-[1px] border-[#FAFF0AD9]">
        <Link className="text-white" to="#">
          Join Community
        </Link>
      </div>
      <div className="flex lg:hidden">
        <GiHamburgerMenu color="#FAFF0AD9" size={28} />
      </div>
    </div>
  );
};

export default Navbar;
