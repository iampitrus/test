import { Outlet } from "react-router-dom";
import { Logo } from "../../assets";

const AppLayout = () => {
  return (
    <div className="flex-col gap-3 bg-[#000] w-screen h-screen">
      <img src={Logo} className="w-[10rem]" />
      <div className="flex justify-center items-center">
        <div
          className="bg-boxcolor  flex flex-col items-center gap-5 w-[350px] h-[510px]
         p-[20px] rounded-3xl md:w-[450px]  border-none"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
