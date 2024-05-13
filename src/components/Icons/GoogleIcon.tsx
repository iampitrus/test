import { FcGoogle } from "react-icons/fc";

const GoogleIcon = ({onclick}:any) => {
  return (
      <div className="flex justify-center items-center bg-[#FFC107] w-[4rem] h-[4rem] rounded-full">
          <FcGoogle size={36} onClick={onclick}/>
      </div>
  )
}

export default GoogleIcon