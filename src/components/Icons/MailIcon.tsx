import { IoMail } from "react-icons/io5";

const MailIcon = ({className}:any) => {
  return (
    <div className={`flex justify-center items-center bg-[#FFC107] w-[3rem] h-[3rem] rounded-full ${className}`}><IoMail size={36}/></div>
  )
}

export default MailIcon